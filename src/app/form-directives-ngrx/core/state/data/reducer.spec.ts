import {initialState, reducer as moviesReducer} from './reducer';
import {GET_CATEGORIES, GET_GENRES, GET_MOVIES, GetCategoriesAction, GetGenresAction, GetMoviesAction} from './actions';
import {movies} from '../../../../shared/mocks/movies';
import {genres} from '../../../../shared/mocks/genres';
import {categories} from '../../../../shared/mocks/categories';

describe('Data Reducer', () => {
  it('should be a function', () => {
    expect(typeof moviesReducer).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(moviesReducer(undefined,
      {
        type: GET_MOVIES,
        payload: []
      }
    )).toEqual(initialState);
  });

  it('should be able to store all the movies', () => {
    const action: GetMoviesAction = {
      type: GET_MOVIES,
      payload: movies
    };

    const expected = { movies, categories: [], genres: [] };

    expect(moviesReducer(undefined, action)).toEqual(expected);
  });

  it('should be able to store all the genres', () => {
    const action: GetGenresAction = {
      type: GET_GENRES,
      payload: genres
    };

    const expected = { movies: [], categories: [], genres: genres };

    expect(moviesReducer(undefined, action)).toEqual(expected);
  });

  it('should be able to store all the categories', () => {
    const action: GetCategoriesAction = {
      type: GET_CATEGORIES,
      payload: categories
    };

    const expected = { movies: [], categories: categories, genres: [] };

    expect(moviesReducer(undefined, action)).toEqual(expected);
  });
});
