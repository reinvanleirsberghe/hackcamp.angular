import * as data from './actions';
import {Category, Genre, Movie} from '../../../../shared/types';
import {Comment, CommentsByMovie} from '../../../type';

export interface State {
  movies: Movie[];
  categories: Category[];
  genres: Genre[];
  movieComments: CommentsByMovie
}

// Add initial State
export const initialState: State = {};

export function reducer(state = initialState, action: data.Actions): State {
  switch (action && action.type) {
    // Add movies (action.payload) in the state
    case data.GET_MOVIES: {
      return state;
    }

    // Add categories (action.payload) in the state
    case data.GET_CATEGORIES: {
      return state
    }

    // Add genres (action.payload) in the state
    case data.GET_GENRES: {
      return state
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

export const getMovies = () => {
}; // Get movies from state
export const getCategories = () => {
}; // Get categories from state
export const getGenres = () => {
}; // Get Genres from state


