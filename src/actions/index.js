import axios from 'axios';
import * as types from '../constants/ActionTypes';

import * as ApiActions from './ApiActions';

// Only used in initial phase of app, keeping for reference
export const updateSearchBar = text => ({
  type: types.UPDATE_SEARCH_BAR,
  payload: text
});

// Only used in initial phase of app, keeping for reference
export const updateQueries = text => ({
  type: types.UPDATE_QUERY_LIST,
  payload: text
});

export const fetchMovieResults = params => dispatch => {
  axios.post(`http://localhost:8000/api/get-movies/`, {
    params
  })
  .then((res) => res.data.tmdb_results)
  .then((data) => dispatch({
    type: types.FETCH_MOVIE_RESULTS,
    payload: data
  }));

}

export const fetchMovieGenres = () => dispatch => {

  // Working locally.
  axios.get('http://localhost:8000/api/get-movie-genres')
  .then((res) => {
    return res.data.genres;
  })
  .then((genres) => dispatch({
    type: types.FETCH_MOVIE_GENRES,
    payload: genres
  }));

}

// The idea here is to, after a query, store the params object used in that query in a separate variable in our Redux store. This separate object (called lastSearchParamsUsed?) will be used when we want to toggle pages. We want to be completely isolated from any changes in the actual searchParams object. Hence, it will only be updated when we make a new original query (aka not switching between pages)
export const setLastParams = params => dispatch => {
  // TODO
}