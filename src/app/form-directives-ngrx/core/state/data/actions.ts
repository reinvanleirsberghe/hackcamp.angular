import {Action} from '@ngrx/store';
import {Category, Genre, Movie} from '../../../../shared/types';

export const GET_MOVIES = '[Data] Get movies';
export const GET_CATEGORIES = '[Data] Get categories';
export const GET_GENRES = '[Data] Get genre';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class GetMoviesAction implements Action {
  readonly type = GET_MOVIES;

  constructor(public payload: Movie[]) {
  }
}

export class GetCategoriesAction implements Action {
  readonly type = GET_CATEGORIES;

  constructor(public payload: Category[]) {
  }
}

export class GetGenresAction implements Action {
  readonly type = GET_GENRES;

  constructor(public payload: Genre[]) {
  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = GetMoviesAction
  | GetCategoriesAction
  | GetGenresAction;
