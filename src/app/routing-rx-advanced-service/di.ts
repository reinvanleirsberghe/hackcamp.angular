import {InjectionToken} from '@angular/core';
import {PICTURES_CDN_URL, SERVER_URL} from '../shared/constant';
import {Category} from '../shared/types';
import {categories} from '../shared/mocks/categories';
/**
 * Create InjectionToken
 * @type {InjectionToken<string>}
 */
export const SERVER_URL_TOKEN = new InjectionToken<string>('SERVER_URL');
export const PICTURES_CDN_URL_TOKEN = new InjectionToken<string>('PICTURES_CDN_URL');
export const BACKDROP_URL_TOKEN = new InjectionToken<string>('BACKDROP_URL');
export const BACKDROP_URL_780_TOKEN = new InjectionToken<string>('BACKDROP_URL_780');
export const PICTURE_ORIGINAL_URL_TOKEN = new InjectionToken<string>('PICTURE_ORIGINAL_URL');

export const CATEGORIES_TOKEN = new InjectionToken<Category[]>('CATEGORIES_TOKEN');

export const Categories = { provide: CATEGORIES_TOKEN, useValue: categories };
export const ServerUrl = { provide: SERVER_URL_TOKEN, useValue: SERVER_URL };
export const PictureCdnUrl = { provide: PICTURES_CDN_URL_TOKEN, useValue: PICTURES_CDN_URL };
