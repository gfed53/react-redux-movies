import axios from 'axios';
import * as types from '../constants/ActionTypes';

import * as ApiActions from './ApiActions';

export const updateSearchBar = text => ({
  type: types.UPDATE_SEARCH_BAR,
  payload: text
});

export const updateQueries = text => ({
  type: types.UPDATE_QUERY_LIST,
  payload: text
});

export const fetchMovieResults = params => dispatch => {
  axios.post(`http://localhost:8000/api/get-movies/`, {
    params
  })
  // .then((res) => res.data.tmdb_results.results)
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