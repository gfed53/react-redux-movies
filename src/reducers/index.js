import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

import * as ApiReducers from './ApiReducers';

const initialState = {
  searchBarText: '',
  
  searchParams: {
    dateFrom: null,
    dateTo: null,
    selectedGenres: []
  }
}

// Controls text within search bar.
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

// Keeps track of previous searches.
export const pastQueries = (state = [], action) => {
  switch (action.type){
    case types.UPDATE_QUERY_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}



export default combineReducers({
  searchBarText,
  pastQueries,
  ...ApiReducers
});