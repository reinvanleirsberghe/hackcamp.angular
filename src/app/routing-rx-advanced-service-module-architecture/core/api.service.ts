import {Inject, Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../../shared/types';
import {Observable} from 'rxjs/Observable';
import {CATEGORIES_TOKEN, SERVER_URL_TOKEN} from '../di';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string,
              @Inject(CATEGORIES_TOKEN) private categories: Category[]) {
  }

  /**
   * Get all movie from server : server url + '/movies'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.serverUrl}/movies`)
      .catch(this.handleError);
  }

  /**
   * Get movie by from server : server url + '/movies/:id'
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
   * then slice the response until the limit provided
   * Don't forgot to catch errors
   * @param limit
   * @returns {Observable<R|T>}
   */
  getOnlyMovies(limit: number = 50) {
    return this.http.get<Movie[]>(`${this.serverUrl}/movies`)
      .map((movies: Movie[]) => movies.slice(0, limit))
      .catch(this.handleError);
  }

  /**
   * Get all categories from mock data
   * Don't forgot to catch errors
   * @returns {any}
   */
  getCategories(): Observable<Category[]> {
    return Observable.of(this.categories);
  }

  /**
   * Get all genres by from server : server url + 'genres'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */
  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.serverUrl}/genres`)
      .catch(this.handleError);
  }

  /**
   * Handle error by throw it
   * @param err
   * @returns {any}
   */
  private handleError(err: any): Observable<Error> {
    return Observable.of(new Error(err));
  }
}
