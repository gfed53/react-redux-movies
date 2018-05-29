import axios from 'axios';
import * as types from '../constants/ActionTypes';
// import { KEYS } from '../temp-config';
// import { updateMovieResults } from './ApiActions';

export const updateSearchBar = text => ({
  type: types.UPDATE_SEARCH_BAR,
  payload: text
});

export const updateQueries = text => ({
  type: types.UPDATE_QUERY_LIST,
  payload: text
});

export const fetchMovieResults = text => dispatch => {
  // GET request (mock data)
  axios.get(`http://localhost:8000/api/get-movie/`)
  .then((res) => res.data)
  .then((movies) => dispatch({
    type: types.FETCH_MOVIE_RESULTS,
    payload: movies
  }));

  // dispatch({
  //   type: types.FETCH_MOVIE_RESULTS,
  //   payload: {'name': 'Goodfellas', 'year': 1990}
  // });

}

export const fetchMovieGenres = () => dispatch => {
  // Need to get back genres from the API. Mock for now
  dispatch({
    type: types.FETCH_MOVIE_GENRES,
    payload: [{'id': 28, 'name': 'Action'}, {'id': 1, 'name': 'Romance'}, {'id': 3, 'name': 'Fantasy'}]
  });
}