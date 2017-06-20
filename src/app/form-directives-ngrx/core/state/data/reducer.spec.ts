import {initialState, reducer as dataReducer} from './reducer';
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  AddCommentStartAction,
  AddCommentSuccessAction,
  GET_CATEGORIES,
  GET_GENRES,
  GET_MOVIES,
  GetCategoriesAction,
  GetGenresAction,
  GetMoviesAction
} from './actions';
import {movies} from '../../../../shared/mocks/movies';
import {genres} from '../../../../shared/mocks/genres';
import {categories} from '../../../../shared/mocks/categories';

describe('Data Reducer', () => {
  it('should be a function', () => {
    expect(typeof dataReducer).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(dataReducer(undefined,
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

    const expected = { movies, categories: [], genres: [], movieComments: {} };

    expect(dataReducer(undefined, action)).toEqual(expected);
  });

  it('should be able to store all the genres', () => {
    const action: GetGenresAction = {
      type: GET_GENRES,
      payload: genres
    };

    const expected = { movies: [], categories: [], genres: genres, movieComments: {} };

    expect(dataReducer(undefined, action)).toEqual(expected);
  });

  it('should be able to store all the categories', () => {
    const action: GetCategoriesAction = {
      type: GET_CATEGORIES,
      payload: categories
    };

    const expected = { movies: [], categories: categories, genres: [], movieComments: {} };

    expect(dataReducer(undefined, action)).toEqual(expected);
  });

  it('should be able to add a comment for a movie', () => {
    const actionStart: AddCommentStartAction = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve One',
        content: 'Great movie Steve One',
        id: 123456789
      }
    };

    const actionSuccess: AddCommentSuccessAction = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve ----',
        content: 'Great movie ---',
        oldId: 123456789,
        id: 1
      }
    };
    const expectedStart = {
      movies: [],
      categories: [],
      genres: [],
      movieComments: {
        [285]: [
          {
            movie_id: 285,
            author: 'Steve One',
            content: 'Great movie Steve One',
            id: 123456789
          }
        ]
      }
    };
    const expectedSuccess = {
      movies: [], categories: [],
      genres: [],
      movieComments: {
        [285]: [
          {
            movie_id: 285,
            author: 'Steve ----',
            content: 'Great movie ---',
            oldId: 123456789,
            id: 1
          }
        ]
      }
    };

    const prevState = dataReducer(undefined, actionStart);
    expect(prevState).toEqual(expectedStart);
    expect(dataReducer(prevState, actionSuccess)).toEqual(expectedSuccess);
  });

  it('should be able to add a comment for a movie when there are other movies', () => {
    const actionStart1: AddCommentStartAction = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        id: 123456789
      }
    };

    const actionSuccess1: AddCommentSuccessAction = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        oldId: 123456789,
        id: 1
      }
    };

    const actionStart2: AddCommentStartAction = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 302,
        author: 'Steve 2',
        content: 'Great movie 2',
        id: 1234567891
      }
    };

    const actionSuccess2: AddCommentSuccessAction = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 302,
        author: 'Steve 2',
        content: 'Great movie 2',
        oldId: 1234567891,
        id: 2
      }
    };
    const expectedSuccess = {
      movies: [],
      categories: [],
      genres: [],
      movieComments: {
        [285]: [
          {
            movie_id: 285,
            author: 'Steve',
            content: 'Great movie',
            id: 1,
            oldId: 123456789
          }
        ],
        [302]: [
          {
            movie_id: 302,
            author: 'Steve 2',
            content: 'Great movie 2',
            oldId: 1234567891,
            id: 2
          }
        ]
      }
    };

    let prevState = dataReducer(undefined, actionStart1);
    console.log('prevState1', JSON.stringify(prevState.movieComments, null, 1));
    prevState = dataReducer(prevState, actionSuccess1);
    console.log('prevState', JSON.stringify(prevState.movieComments, null, 1));
    prevState = dataReducer(prevState, actionStart2);
    console.log('prevState', JSON.stringify(prevState.movieComments, null, 1));
    prevState = dataReducer(prevState, actionSuccess2);
    console.log('prevState', JSON.stringify(prevState.movieComments, null, 1));
    expect(prevState).toEqual(expectedSuccess);
  });

  it('should be able to add multiple comment for a movie ', () => {
    const actionStart1: AddCommentStartAction = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        id: 123456789
      }
    };

    const actionSuccess1: AddCommentSuccessAction = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve',
        content: 'Great movie',
        oldId: 123456789,
        id: 1
      }
    };

    const actionStart2: AddCommentStartAction = {
      type: ADD_COMMENT_START,
      payload: {
        movie_id: 285,
        author: 'Steve 2',
        content: 'Great movie 2',
        id: 1234567891
      }
    };

    const actionSuccess2: AddCommentSuccessAction = {
      type: ADD_COMMENT_SUCCESS,
      payload: {
        movie_id: 285,
        author: 'Steve 2',
        content: 'Great movie 2',
        oldId: 1234567891,
        id: 2
      }
    };
    const expectedSuccess = {
      movies: [], categories: [],
      genres: [],
      movieComments: {
        [285]: [
          {
            movie_id: 285,
            author: 'Steve',
            content: 'Great movie',
            id: 1,
            oldId: 123456789
          },
          {
            movie_id: 285,
            author: 'Steve 2',
            content: 'Great movie 2',
            oldId: 1234567891,
            id: 2
          }
        ]
      }
    };

    let prevState = dataReducer(undefined, actionStart1);
    prevState = dataReducer(prevState, actionSuccess1);
    prevState = dataReducer(prevState, actionStart2);
    prevState = dataReducer(prevState, actionSuccess2);
    expect(prevState).toEqual(expectedSuccess);
  });
  //
  it('should be able to store all the comments by movie', () => {
    // to implement
  });


});
