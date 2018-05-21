import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const initialState = {
  searchBarText: ''
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
  pastQueries
})