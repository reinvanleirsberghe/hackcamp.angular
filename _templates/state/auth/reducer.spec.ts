import {initialState, reducer as auth} from './reducer';
import {LOGIN, LoginAction, LOGOUT, LogoutAction} from './actions';

describe('Auth Reducer', () => {
  it('should be a function', () => {
    expect(typeof auth).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(auth(undefined, undefined)).toEqual(initialState);
  });

  it('should be able to log me in', () => {
    const action: LoginAction = {
      type: LOGIN,
      payload: 'fdq321fqfdqf432'
    };

    const expected = {
      isAuthenticated: true,
      token: 'fdq321fqfdqf432'
    };

    expect(auth(undefined, action)).toEqual(expected);
  });

  it('should be able to log me out', () => {
    const action: LogoutAction = {
      type: LOGOUT
    };

    const initialState = {
      isAuthenticated: true,
      token: 'fdq321fqfdqf432'
    };

    const expected = {
      isAuthenticated: false,
      token: null
    };

    expect(auth(initialState, action)).toEqual(expected);
  });
});
