import {Inject, Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../shared/types';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CATEGORIES_TOKEN, SERVER_URL_TOKEN} from './di';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(private http: Http,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string,
              @Inject(CATEGORIES_TOKEN) private categories: Category[]) {
  }

  /**
   * Get all movie from server : server url + '/movies'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */
  getMovies(): Observable<Movie[] | Error> {
    return this.http.get(`${this.serverUrl}/movies`)
      .map((res: Response) => res.json() as Movie[])
      .catch(this.handleError);
  }

  /**
   * Get movie by from server : server url + '/movies/:id'
   * Don't forgot to catch errors
   * @param id
   * @returns {Observable<R|T>}
   */
  getMovieById(id: number | string): Observable<Movie | Error> {
    return this.http.get(`${this.serverUrl}/movies/${id}`)
      .map((res: Response) => res.json() as Movie)
      .catch(this.handleError);
  }

  /**
   * Get all movie from server : server url + '/movies/:id'
   * then slice the response until the limit provided
   * Don't forgot to catch errors
   * @param limit
   * @returns {Observable<R|T>}
   */
  getOnlyMovies(limit: number = 50): Observable<Movie[] | Error> {
    return this.http.get(`${this.serverUrl}/movies`)
      .map((res: Response) => res.json() as Movie[])
      .map((movies: Movie[]) => movies.slice(0, limit))
      .catch(this.handleError);
  }

  /**
   * Get all categories from mock data
   * Don't forgot to catch errors
   * @returns {any}
   */
  getCategories(): Observable<Category[] | Error> {
    return Observable.of(this.categories);
  }

  /**
   * Get all genres by from server : server url + 'genres'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */
  getGenres(): Observable<Genre[] | Error> {
    return this.http.get(`${this.serverUrl}/genres`)
      .map((res: Response) => res.json() as Genre[])
      .catch(this.handleError);
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
