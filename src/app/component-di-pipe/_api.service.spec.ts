import {inject, TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {genres} from 'app/shared/mocks/genres';
import {categories} from '../shared/mocks/categories';
import {Category, Genre, Movie} from '../shared/types';
import {HttpModule} from '@angular/http';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from './di';
/**
 * Test file for api.service.ts after that you rename the _api.service.ts to api.service.ts
 */
describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiService,
        ServerUrl,
        PictureCdnUrl,
        BackdropUrl,
        BackdropUrl780,
        PictureOriginalUrl,
        Categories,
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getMovies method', inject([ApiService], (service: ApiService) => {
    expect(service.getMovies).toBeDefined();
  }));

  it('should have getMovies method that return a list of movies', inject([ApiService], (service: ApiService) => {
    service.getMovies().subscribe((movies: Movie[]) => {
      expect(Array.isArray(movies)).toBeTruthy();
    });
  }));

  it('should have getMovies method that return a list of 50 movies', inject([ApiService], (service: ApiService) => {
    service.getMovies().subscribe((movies: Movie[]) => {
      expect(movies.length).toEqual(50);
    });
  }));

  it('should have getMovies method that return a list of 50 mock movies', inject([ApiService], (service: ApiService) => {
    service.getMovies().subscribe((movies: Movie[]) => {
      expect(movies).toEqual(movies.slice(0, 50));
    });
  }));

  it('should have getGenres() method', inject([ApiService], (service: ApiService) => {
    expect(service.getGenres).toBeDefined();
  }));

  it('should have getGenres() method that return a list of genres', inject([ApiService], (service: ApiService) => {
    service.getGenres().subscribe((genres: Genre[]) => {
      expect(Array.isArray(genres)).toBeTruthy();
    });
  }));

  it('should have getGenres() method that return a list of mock genres', inject([ApiService], (service: ApiService) => {
    service.getGenres().subscribe((gs: Genre[]) => {
      expect(gs).toEqual(genres);
    });
  }));

  it('should have getCategories() method', inject([ApiService], (service: ApiService) => {
    expect(service.getCategories).toBeDefined();
  }));

  it('should have getCategories() method that return a list of categories', inject([ApiService], (service: ApiService) => {
    service.getCategories().subscribe((categories: Category[]) => {
      expect(Array.isArray(categories)).toBeTruthy();
    });
  }));

  it('should have getCategories() method that return a list of mock categories', inject([ApiService], (service: ApiService) => {
    service.getCategories().subscribe((cs: Category[]) => {
      expect(cs).toEqual(categories);
    });
  }));
});
