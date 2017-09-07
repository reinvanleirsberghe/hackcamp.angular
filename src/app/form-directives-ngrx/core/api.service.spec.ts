import {inject, TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {categories} from '../../shared/mocks/categories';
import {Category} from '../../shared/types';
import {HttpModule} from '@angular/http';
import {BackdropUrl, BackdropUrl780, Categories, PictureCdnUrl, PictureOriginalUrl, ServerUrl} from '../di';
import {CoreModule} from './core.module';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpModule,
        CoreModule,
      ],
      providers: [
        ApiService,
        ServerUrl,
        PictureCdnUrl,
        BackdropUrl,
        BackdropUrl780,
        PictureOriginalUrl,
        Categories,
        {
          provide: APP_BASE_HREF,
          useValue: ''
        }
      ]
    })
    ;
  });

  it('should be created 2', inject([ApiService], (service: ApiService) => {
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
