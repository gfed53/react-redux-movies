import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as types from '../constants/ActionTypes';

import * as ApiReducers from './ApiReducers';

const initialState = {
  searchBarText: '', // Only used in initial phase of app, keeping for reference
  searchParams: {
    dateFrom: null,
    dateTo: null,
    selectedGenres: []
  },
  lastSearchParamsUsed: {
    dateFrom: null,
    dateTo: null,
    selectedGenres: []
  },
  page: 1
}

// Controls text within search bar.
// Only used in initial phase of app, keeping for reference
export const searchBarText = (state = '',action) => {
  switch (action.type){
    case types.UPDATE_SEARCH_BAR:
      return action.payload;
    default:
      return state;
  }
}

export const searchParams = (state = initialState.searchParams, action) => {
  switch (action.type){
    case types.UPDATE_DATE_FROM:
      return {...state, dateFrom: action.payload};
    case types.UPDATE_DATE_TO:
      return {...state, dateTo: action.payload};
    case types.UPDATE_GENRES:
      return {...state, selectedGenres: action.payload};
  }
}

export const lastSearchParamsUsed = (state = initialState.lastSearchParamsUsed, action) => {
  switch (action.type){
    case types.SET_LAST_PARAMS:
      return action.payload;
    default:
      return state;
  }
}

// Can we create a reducer that updates only a part of an object that's being handled by another reducer?
// For now, separating this variable as another prop in the state tree. 
// export const page = (state = initialState.page, action) => {
//   switch (action.type){
//     case types.INC_PAGE:
//       return state++;
//     case types.DEC_PAGE:
//       return state--;
//     default:
//       return state;
//   }
// }

// Keeps track of previous searches.
// Only used in initial phase of app, keeping for reference
export const pastQueries = (state = [], action) => {
  switch (action.type){
    case types.UPDATE_QUERY_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  form: formReducer,
  searchBarText,
  pastQueries,
  lastSearchParamsUsed,
  ...ApiReducers
});