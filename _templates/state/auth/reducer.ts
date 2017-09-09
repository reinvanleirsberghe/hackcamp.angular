import * as auth from './actions';

export interface State {
  isAuthenticated: boolean;
  token: string
}

// TODO:Create the initial state based on the interface above
export const initialState: State = {};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action && action.type) {
    // TODO: Handle the LoginAction
    // TODO: You should make the user authenticated and store the token (action.payload)

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
export const getToken = () => { // TODO: Get Token from state
}
