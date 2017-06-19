import {Inject, Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../../shared/types';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CATEGORIES_TOKEN, SERVER_URL_TOKEN} from '../di';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Store} from '@ngrx/store';
import * as fromRoot from './state/store';
import {getDataCategories, getDataGenres, getDataMovies} from './state/store';
import {GetCategoriesAction, GetGenresAction, GetMoviesAction} from './state/data/actions';

@Injectable()
export class ApiService {
  movies$: Observable<Movie[]> = this.store.select(getDataMovies);
  categories$: Observable<Category[]> = this.store.select(getDataCategories);
  genres$: Observable<Genre[]> = this.store.select(getDataGenres);

  constructor(private http: Http,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string,
              @Inject(CATEGORIES_TOKEN) private categories: Category[],
              private store: Store<fromRoot.State>) {
  }

  /**
   * Get all movie from server : server url + '/movies'
   * Then dispatch it in the store
   * Don't forgot to catch errors
   */
  fetchAllMovies(): Observable<void> {
    return this.http.get(`${this.serverUrl}/movies`)
      .map((res: Response) => res.json() as Movie[])
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
  getMovieById(id: number | string): Observable<Movie> {
    return this.movies$
      .switchMap(movies => Observable.from(movies))
      .filter((movie: Movie) => movie.id === id)
      .first()
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
    this.http.get(`${this.serverUrl}/movies`)
      .map((res: Response) => res.json() as Movie[])
      .map((movies: Movie[]) => movies.slice(0, limit))
      .map((movies: Movie[]) => this.store.dispatch(new GetMoviesAction(movies)))
      .catch(this.handleError).subscribe();

    return this.movies$;
  }

  /**
   * Dispatch all categories from mock data to store
   * Don't forgot to catch errors
   * @returns {any}
   */
  getCategories(): Observable<Category[]> {
    this.store.dispatch(new GetCategoriesAction(this.categories));
    return this.categories$;
  }

  /**
   * Get all genres by from server : server url + 'genres'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */

  fetchAllGenres(): Observable<void> {
    return this.http.get(`${this.serverUrl}/genres`)
      .map((res: Response) => res.json() as Genre[])
      .map((genres: Genre[]) => this.store.dispatch(new GetGenresAction(genres)))
      .catch(this.handleError);
  }

  getGenres(): Observable<Genre[]> {
    this.fetchAllGenres().subscribe();
    return this.genres$;
  }

  /**
   * Handle error by throw it
   * @param err
   * @returns {any}
   */
  private handleError(err: any): Observable<Error> {
    return Observable.throw(new Error(err))
  }
}
