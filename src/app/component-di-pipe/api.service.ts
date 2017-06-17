import {Injectable} from '@angular/core';
import {Category, Genre, Movie} from '../shared/types';
import {movies} from '../shared/mocks/movies';
import {categories} from '../shared/mocks/categories';
import {genres} from '../shared/mocks/genres';

@Injectable()
export class ApiService {

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
