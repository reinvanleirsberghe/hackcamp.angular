import * as data from './actions';
import {Category, Genre, Movie} from '../../../../shared/types';
import {Comment} from '../../../type';

export interface State {
  movies: Movie[];
  categories: Category[];
  genres: Genre[];
  movieComments: { [key: number]: Comment[]; }
}


export const initialState: State = {
  movies: [],
  categories: [],
  genres: [],
  movieComments: {}
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

    case data.ADD_COMMENT_START: {

      const { movieComments } = state;
      const newMovieComments = { ...movieComments };
      const { movie_id } = action.payload as Comment;
      if (newMovieComments[movie_id]) {
        console.log('newMovieComments[movie_id]', newMovieComments[movie_id])
        let comments = newMovieComments[movie_id];
        comments = [...comments, action.payload as Comment];
        newMovieComments[movie_id] = comments;
      } else {
        newMovieComments[movie_id] = [action.payload as Comment];
      }
      return Object.assign({},
        state,
        {
          movieComments: newMovieComments
        });
    }

    case data.ADD_COMMENT_SUCCESS: {
      const { movieComments } = state;
      const newMovieComments = { ...movieComments };
      const { movie_id, oldId } = action.payload as Comment;
      if (newMovieComments[movie_id]) {
        let comments = newMovieComments[movie_id]
          .filter(comment => comment.id !== oldId);
        comments = [...comments, action.payload as Comment];
        newMovieComments[movie_id] = comments;
      }

      return Object.assign({},
        state,
        {
          movieComments: newMovieComments
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
export const getMovieComment = (state: State) => state.movieComments;


