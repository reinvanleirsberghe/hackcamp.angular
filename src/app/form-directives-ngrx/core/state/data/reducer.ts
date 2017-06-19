import * as data from './actions';
import {Category, Genre, Movie} from '../../../../shared/types';


export interface State {
  movies: Movie[];
  categories: Category[];
  genres: Genre[];
}


export const initialState: State = {
  movies: [],
  categories: [],
  genres: []
};

export function reducer(state = initialState, action: data.Actions): State {
  switch (action && action.type) {
    case data.GET_MOVIES: {
      return Object.assign({}, state, {
        movies: action.payload
      });
    }

    case data.GET_CATEGORIES: {
      return Object.assign({}, state, {
        categories: action.payload
      });
    }

    case data.GET_GENRES: {
      return Object.assign({}, state, {
        genres: action.payload
      });
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

export const getMovies = (state: State) => state.movies;
export const getCategories = (state: State) => state.categories;
export const getGenres = (state: State) => state.genres;


