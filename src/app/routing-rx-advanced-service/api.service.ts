import {Inject, Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../shared/types';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CATEGORIES_TOKEN, SERVER_URL_TOKEN} from './di';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiService {

  constructor(private http: Http,
              @Inject(SERVER_URL_TOKEN) private serverUrl: string,
              @Inject(CATEGORIES_TOKEN) private categories: Category[]) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get(`${this.serverUrl}/movies`)
      .map((res: Response) => res.json() as Movie[])
      .catch(this.handleError);
  }

  getOnlyMovies(limit: number = 50) {
    return this.http.get(`${this.serverUrl}/movies`)
      .map((res: Response) => res.json() as Movie[])
      .map((movies: Movie[]) => movies.slice(0, limit))
      .catch(this.handleError);
  }

  getCategories(): Observable<Category[]> {
    return Observable.of(this.categories);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get(`${this.serverUrl}/genres`)
      .map((res: Response) => res.json() as Genre[])
      .catch(this.handleError);
  }

  private handleError(err: any): Observable<Error> {
    return Observable.throw(new Error(err))
  }
}
