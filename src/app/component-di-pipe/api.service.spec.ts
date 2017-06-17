import {inject, TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {movies} from '../shared/mocks/movies';
import {genres} from "app/shared/mocks/genres";
import {categories} from '../shared/mocks/categories';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getMovies method', inject([ApiService], (service: ApiService) => {
    expect(service.getMovies).toBeDefined();
  }));

  it('should have getMovies method that return a list of movies', inject([ApiService], (service: ApiService) => {
    expect(Array.isArray(service.getMovies())).toBeTruthy();
  }));

  it('should have getMovies method that return a list of 50 movies', inject([ApiService], (service: ApiService) => {
    expect(service.getMovies().length).toEqual(50);
  }));

  it('should have getMovies method that return a list of 50 mock movies', inject([ApiService], (service: ApiService) => {
    expect(service.getMovies()).toEqual(movies.slice(0, 50));
  }));

  it('should have getGenres() method', inject([ApiService], (service: ApiService) => {
    expect(service.getGenres).toBeDefined();
  }));

  it('should have getGenres() method that return a list of genres', inject([ApiService], (service: ApiService) => {
    expect(Array.isArray(service.getGenres())).toBeTruthy();
  }));

  it('should have getGenres() method that return a list of mock genres', inject([ApiService], (service: ApiService) => {
    expect(service.getGenres()).toEqual(genres);
  }));

  it('should have getCategories() method', inject([ApiService], (service: ApiService) => {
    expect(service.getCategories()).toBeDefined();
  }));

  it('should have getCategories()() method that return a list of categories', inject([ApiService], (service: ApiService) => {
    expect(Array.isArray(service.getCategories())).toBeTruthy();
  }));

  it('should have getCategories()() method that return a list of mock categories', inject([ApiService], (service: ApiService) => {
    expect(service.getCategories()).toEqual(categories);
  }));
});
