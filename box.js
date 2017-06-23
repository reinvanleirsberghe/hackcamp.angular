const { createStore, combineReducers } = require('redux');
const ADD_COURSE = 'ADD_COURSE';
const ADD_BOOK = 'ADD_BOOK';

// reducers
const coursesManager = (state = [], action) => {
  if(action.type === ADD_COURSE)
      return [...state, action.payload];
  return state;
};
const booksManager = (state = [], action) => {
  if(action.type === ADD_BOOK)
      return [...state, action.payload];
  return state;
};


const reducers = combineReducers({
  books: booksManager,
  courses: coursesManager
})

// Store
const store = createStore(reducers);


// UI
store.subscribe(() => {
  console.log('State...:', store.getState());
});
const addCourse = {
  type: ADD_COURSE,
  payload: {
    id: 1,
    title: 'JavaScript',
  }
}
const addBook = {
  type: ADD_BOOK,
  payload: {
    id: 2,
    title: 'Angular rocks!',
  }
};

store.dispatch(addCourse);
store.dispatch(addBook);
