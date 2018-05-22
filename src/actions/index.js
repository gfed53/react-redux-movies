import axios from 'axios';
import * as types from '../constants/ActionTypes';
import { KEYS } from '../temp-config';
// import { updateMovieResults } from './ApiActions';

export const updateSearchBar = text => ({
  type: types.UPDATE_SEARCH_BAR,
  payload: text
});

export const updateQueries = text => ({
  type: types.UPDATE_QUERY_LIST,
  payload: text
});

export const fetchMovieResults = () => dispatch => {
  // Mock GET request
  axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${KEYS.tmdbv3}`)
  .then((res) => res.data)
  .then((movies) => dispatch({
    type: types.FETCH_MOVIE_RESULTS,
    payload: movies
  }));
}