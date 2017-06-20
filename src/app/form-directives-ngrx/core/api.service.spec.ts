import {inject, TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {genres} from 'app/shared/mocks/genres';
import {categories} from '../../shared/mocks/categories';
import {Category, Genre, Movie} from '../../shared/types';
import {HttpModule} from '@angular/http';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from '../di';
import {CoreModule} from './core.module';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        CoreModule
      ],
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