import {Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../shared/types';
import {movies} from '../shared/mocks/movies';
import {categories} from '../shared/mocks/categories';
import {genres} from '../shared/mocks/genres';
import {Credentials} from 'crypto';
import {Http} from '@angular/http';

@Injectable()
export class ApiService {
  constructor(private http:Http){

  }
  login(credentials: Credentials) {

  }

  getMovies(): Movie[] {
    return movies.slice(0, 50);
  }

  getCategories(): Category[] {
    return categories;
  }

  getGenres(): Genre[] {
    return genres;
  }
}
