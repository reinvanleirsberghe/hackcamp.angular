import {Action} from '@ngrx/store';
import {Category, Genre, Movie} from '../../../../shared/types';
import {Comment, CommentsByMovie} from '../../../type';

export const GET_MOVIES = '[Data] Get movies';
export const GET_CATEGORIES = '[Data] Get categories';
export const GET_GENRES = '[Data] Get genres';

export const ADD_COMMENT_START = '[Data] Add comment start';
export const ADD_COMMENT_SUCCESS = '[Data] Add comment success';
export const GET_COMMENTS = '[Data] Get comments';
export const DELETE_COMMENT = '[Data] Delete comment';


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

export class AddCommentStartAction implements Action {
  readonly type = ADD_COMMENT_START;

  constructor(public payload: Comment) {
  }
}

export class AddCommentSuccessAction implements Action {
  readonly type = ADD_COMMENT_SUCCESS;

  constructor(public payload: Comment) {
  }
}

export class GetCommentsAction implements Action {
  readonly type = GET_COMMENTS;

  constructor(public payload: CommentsByMovie) {
  }
}

export class DeleteCommentAction implements Action {
  readonly type = DELETE_COMMENT;

  constructor(public payload: Comment) {
  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = GetMoviesAction
  | GetCategoriesAction
  | GetGenresAction
  | AddCommentStartAction
  | AddCommentSuccessAction
  | GetCommentsAction
  | DeleteCommentAction;
