import * as auth from './actions';

export interface State {
  isAuthenticated: boolean;
  token: string
}


export const initialState: State = {
  isAuthenticated: false,
  token: null
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action && action.type) {
    case auth.LOGIN: {
      return {
        isAuthenticated: true,
        token: action.payload
      }
    }

    case auth.LOGOUT: {
      return initialState
    }

    default: {
      return state;
    }
  }
}


/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
export const getToken = (state: State) => state.token;
