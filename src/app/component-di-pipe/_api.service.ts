import {Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../shared/types';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor() {
  }

  /**
   * Get all movie from server : server url + '/movies'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */
  getMovies(): Observable<Movie[] | Error> {
    throw new Error('Not implemented :p');
  }

  /**
   * Get movie by from server : server url + '/movies/:id'
   * Don't forgot to catch errors
   * @param id
   * @returns {Observable<R|T>}
   */
  getMovieById(id: number | string): Observable<Movie | Error> {
    throw new Error('Not implemented :p');
  }

  /**
   * Get all movie from server : server url + '/movies/:id'
   * then slice the response until the limit provided
   * Don't forgot to catch errors
   * @param limit
   * @returns {Observable<R|T>}
   */
  getOnlyMovies(limit: number = 50): Observable<Movie[] | Error> {
    throw new Error('Not implemented :p');
  }

  /**
   * Get all categories from mock data
   * Don't forgot to catch errors
   * @returns {any}
   */
  getCategories(): Observable<Category[] | Error> {
    throw new Error('Not implemented :p');
  }

  /**
   * Get all genres by from server : server url + 'genres'
   * Don't forgot to catch errors
   * @returns {Observable<R|T>}
   */
  getGenres(): Observable<Genre[] | Error> {
    throw new Error('Not implemented :p');
  }

  /**
   * Handle error by throw it
   * @param err
   * @returns {any}
   */
  private handleError(err: any): Observable<Error> {
    throw new Error('Not implemented :p');
  }
}
