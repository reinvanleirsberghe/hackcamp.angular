import {Action} from '@ngrx/store';

export const LOGIN = '[AUTH] Login';
export const LOGOUT = '[AUTH] Logout';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: string) {
  }
}

// Add Logout Action


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */

export type Actions = LoginAction ; // Don't forgot to add the logout Action
