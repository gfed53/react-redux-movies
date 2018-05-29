import * as types from '../constants/ActionTypes';

const initialState = {
  movieResults: [],
  movieGenres: []
}

export const movieResults = (state = initialState.movieResults, action) => {
  switch (action.type){
    // Just overwriting list of results for now, so we return completely new array of results.
    case types.FETCH_MOVIE_RESULTS:
      return action.payload;
    default:
      return state;
  }
}

export const movieGenres = (state = initialState.movieGenres, action) => {
  switch(action.type){
    case types.FETCH_MOVIE_GENRES:
      return action.payload;
    default:
      return state;
  }
}