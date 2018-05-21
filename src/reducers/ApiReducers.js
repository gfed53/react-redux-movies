import * as types from '../constants/ActionTypes';

const initialState = {
  movies: []
}

export const movieResults = (state = initialState.movies, action) => {
  switch (action.type){
    // Just overwriting list of results for now, so we return completely new array of results.
    case types.FETCH_MOVIE_RESULTS:
      return action.payload;
    default:
      return state;
  }
}