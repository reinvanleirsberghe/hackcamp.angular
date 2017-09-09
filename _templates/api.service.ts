import {Inject, Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../../shared/types';
import {Observable} from 'rxjs/Observable';
import {CATEGORIES_TOKEN, SERVER_URL_TOKEN} from '../di';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import {Comment, CommentsByMovie} from '../type';

@Injectable()
export class ApiService {
  movies$: Observable<Movie[]> = null; // Select data movies from store
  categories$: Observable<Category[]> = null; // Select data categories from store
  genres$: Observable<Genre[]> = null; // Select data genres from store

  constructor(private http: HttpClient,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string,
              @Inject(CATEGORIES_TOKEN) private categories: Category[]) {
  }

  /**
   * Get all movie from server : server url + '/movies'
   * Then dispatch it in the store (GetMoviesAction)
   * Don't forgot to catch errors
   */
  fetchAllMovies(): Observable<void> {
    return this.http.get<Movie[]>(`${this.serverUrl}/movies`);
  }

  /**
   * Fetch all movies
   * Then return back the Observable from store that will emit all movies
   * Hint: this.movies$
   * @returns {Observable<Movie[]>}
   */
  getMovies(): Observable<Movie[]> {
    return Observable.empty();
  }

  /**
   * Get the movie from the store
   * Don't forgot to catch errors
   * @param id
   * @returns {Observable<R|T>}
   */
  getMovieById(id: number | string): Observable<Movie> {
    return this.http.get<Movie>(`${this.serverUrl}/movies/${id}`)
      .catch(this.handleError);
  }

  /**
   * Get all movie from server : server url + '/movies'
   * Then slice the response until the limit provided
   * Then dispatch it in the store
   * Then return back the Observable from store that will emit all movies
   * Don't forgot to catch errors
   * @param limit
   * @returns {Observable<R|T>}
   */
  getOnlyMovies(limit: number = 50): Observable<Movie[]> {
    this.http.get<Movie[]>(`${this.serverUrl}/movies`)
      .map((movies: Movie[]) => movies.slice(0, limit))
      .catch(this.handleError).subscribe();

    return Observable.empty();
  }

  /**
   * Dispatch all categories from mock data to store
   * Then return back the Observable from store that will emit all categories
   * Don't forgot to catch errors
   * @returns {Observable<Category[]>}
   */
  getCategories(): Observable<Category[]> {
    return Observable.empty();
  }

  /**
   * Get all genres  from server : server url + 'genres'
   * And dispatch to store
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */

  fetchAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.serverUrl}/genres`)
      .catch(this.handleError);
  }

  /**
   * Fetch all genres
   * Then return back the Observable from store that will emit all genres
   * @returns {Observable<Genre[]>}
   */
  getGenres(): Observable<Genre[]> {
    this.fetchAllGenres().subscribe();

    return this.genres$;
  }

  /**
   * Get all comments for a movie from server : server url + 'movies' + ':id' + 'comments'
   * @param movieId
   * @returns {Observable<R|T>}
   */
  fetchCommentsByMovieId(movieId: number): Observable<Comment[]> {
    return Observable.empty();
  }

  /**
   * Fetch all Comment by movie id and dispatch to store
   * Then return back the Observable from store that will emit all comments for the movieId
   * @param movieId
   * @returns {Observable<CommentsByMovie>}
   */
  getCommentsByMovieId(movieId: number): Observable<Comment[]> {
    this.fetchCommentsByMovieId(movieId)
      .map((comments: Comment[]) => {
        // Transform the comments into a map <movieId,listOfComment>
      })
      .subscribe();

    return Observable.empty();
  }

  /**
   * Post a comment for a movie : server url + 'movies' + ':id' + 'comments'
   * @param {number} movieId
   * @param {{author: string; content: string}} data
   * @returns {Observable<any>}
   * */
  postComment(movieId: number, data: { author: string, content: string }): Observable<null> {
    const randomCommentId = Math.floor(Math.random() * 1000000);
    const payload = {
      movie_id: movieId,
      id: randomCommentId,
      ...data
    };
    // Optimistic Update steps :
    // Dispatch AddCommentStartAction with the payload
    // Perform Post Http call to server url + 'movies' + ':id' + 'comments'
    // If success => dispatch AddCommentSuccessAction with { ...responseHttpCall, oldId: randomCommentId }
    // Else => dispatch DeleteCommentAction with payload
    return Observable.empty();
  }

  /**
   * Delete a comment for a movie : server url + 'comments' + ':id'
   * @param {} payload
   * @returns {Observable<any>}
   */
  deleteComment(payload: Comment): Observable<null> {
    // Optimistic Update steps :
    // Dispatch DeleteCommentAction with the payload
    // Perform Delete Http call to server url  + 'comments' + ':id'
    // If fail => dispatch AddCommentSuccessAction with payload
    return Observable.empty();
  }

  /**
   * Handle error by throw it
   * @param err
   * @returns {any}
   */
  private handleError(err: any): Observable<Error> {
    return Observable.throw(new Error(err));
  }
}
