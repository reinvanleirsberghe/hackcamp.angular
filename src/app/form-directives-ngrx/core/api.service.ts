import {Inject, Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../../shared/types';
import {Observable} from 'rxjs/Observable';
import {CATEGORIES_TOKEN, SERVER_URL_TOKEN} from '../di';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Store} from '@ngrx/store';
import * as fromRoot from './state/store';
import {getDataCategories, getDataGenres, getDataMovieComments, getDataMovies} from './state/store';
import {
  AddCommentStartAction,
  AddCommentSuccessAction,
  DeleteCommentAction,
  GetCategoriesAction,
  GetGenresAction,
  GetMoviesAction,
  SaveCommentsAction
} from './state/data/actions';
import {Comment, CommentsByMovie} from '../type';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  movies$: Observable<Movie[]> = this.store.select(getDataMovies);
  categories$: Observable<Category[]> = this.store.select(getDataCategories);
  genres$: Observable<Genre[]> = this.store.select(getDataGenres);
  movieComments$: Observable<CommentsByMovie> = this.store.select(getDataMovieComments);

  constructor(private http: HttpClient,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string,
              @Inject(CATEGORIES_TOKEN) private categories: Category[],
              private store: Store<fromRoot.State>) {
  }

  /**
   * Get all movies from server : server url + '/movies'
   * Then dispatch it in the store
   * Don't forgot to catch errors
   */
  fetchAllMovies(): Observable<void> {
    return this.http.get<Movie[]>(`${this.serverUrl}/movies`)
      .map((movies: Movie[]) => this.store.dispatch(new GetMoviesAction(movies)))
      .catch(this.handleError);
  }

  getMovies(): Observable<Movie[]> {
    this.fetchAllMovies().subscribe();
    return this.movies$;
  }

  /**
   * Get the movie from the store
   * Don't forgot to catch errors
   * @param id
   * @returns {Observable<R|T>}
   */
  getMovieById(id: string): Observable<Movie> {
    return this.movies$
      .switchMap(movies => Observable.from(movies))
      .filter((movie: Movie) => movie.id === parseInt(id, 10))
      .do(movies => console.log('movies', movies))
      .first();
  }

  /**
   * Get all movie from server : server url + '/movies'
   * Then slice the response until the limit provided
   * Then dispatch it in the store
   * Don't forgot to catch errors
   * @param limit
   * @returns {Observable<R|T>}
   */
  getOnlyMovies(limit: number = 50): Observable<Movie[]> {
    this.http.get<Movie[]>(`${this.serverUrl}/movies`)
      .map((movies: Movie[]) => movies.slice(0, limit))
      .map((movies: Movie[]) => this.store.dispatch(new GetMoviesAction(movies)))
      .catch(this.handleError).subscribe();

    return this.movies$;
  }

  /**
   * Dispatch all categories from mock data to store
   * Don't forgot to catch errors
   * @returns {Observable<Category[]>}
   */
  getCategories(): Observable<Category[]> {
    this.store.dispatch(new GetCategoriesAction(this.categories));
    return this.categories$;
  }

  /**
   * Get all genres  from server : server url + 'genres'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */

  fetchAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.serverUrl}/genres`)
      .catch(this.handleError);
  }

  /**
   * Fecth all genres and dispatch to store
   * @returns {Observable<Genre[]>}
   */
  getGenres(): Observable<Genre[]> {
    this.fetchAllGenres()
      .map((genres: Genre[]) => this.store.dispatch(new GetGenresAction(genres)))
      .subscribe();

    return this.genres$;
  }

  /**
   * Get all comments for a movie from server : server url + 'movies' + ':id' + 'comments'
   * @param movieId
   * @returns {Observable<R|T>}
   */
  fetchCommentsByMovieId(movieId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.serverUrl}/movies/${movieId}/comments`)
      .catch(this.handleError);
  }

  /**
   * Fetch all Comment by movie id and dispatch to store
   * @param movieId
   * @returns {Observable<CommentsByMovie>}
   */
  getCommentsByMovieId(movieId: number): Observable<Comment[]> {
    this.fetchCommentsByMovieId(movieId)
      .map((comments: Comment[]) => {
        // Transform the comments into a map <movieId,listOfComment>
        return comments.reduce((acc, comment) => {
          const { movie_id } = comment;
          if (acc[movie_id]) {
            let savedComments = acc[movie_id];
            savedComments = [...savedComments, comment];
            acc[movie_id] = savedComments;
          } else {
            acc[movie_id] = [comment];
          }
          return acc;
        }, {});
      })
      .map((movieComments: CommentsByMovie) => this.store.dispatch(new SaveCommentsAction(movieComments)))
      .subscribe();

    return this.movieComments$.map((commentsByMovies: CommentsByMovie) => commentsByMovies[movieId]);

  }

  postComment(movieId: number, data: { author: string, content: string }): Observable<null> {
    const randomCommentId = Math.floor(Math.random() * 1000000);
    const payload = {
      movie_id: movieId,
      id: randomCommentId,
      ...data
    };
    this.store.dispatch(new AddCommentStartAction(payload));
    return this.http.post<Comment>(`${this.serverUrl}/movies/${movieId}/comments`, data)
      .map((comment: Comment) => {
        this.store.dispatch(new AddCommentSuccessAction({ ...comment, oldId: randomCommentId }));
      })
      .catch((err) => {
        this.store.dispatch(new DeleteCommentAction(payload));
        return Observable.throw(err);
      });
  }

  deleteComment(payload: Comment): Observable<null> {
    this.store.dispatch(new DeleteCommentAction(payload));
    return this.http.delete<Comment>(`${this.serverUrl}/comments/${payload.id}`)
      .catch((err) => {
        this.store.dispatch(new AddCommentSuccessAction(payload));
        return Observable.throw(err);
      });
  }


  /**
   * Handle error by throw it
   * @param err
   * @returns {any}
   */
  private handleError(err: any) {
    return Observable.throw(err);
  }
}
