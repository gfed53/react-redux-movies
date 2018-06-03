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

export const fetchMovieResults = params => dispatch => {
  console.log('params in action',params);
  // GET request (mock data)
  // axios.get(`http://localhost:8000/api/get-movie/`)
  // .then((res) => res.data)
  // .then((movies) => dispatch({
  //   type: types.FETCH_MOVIE_RESULTS,
  //   payload: movies
  // }));

  dispatch({
    type: types.FETCH_MOVIE_RESULTS,
    payload: {'status': 'params received', 'params': params}
  });

}

export const fetchMovieGenres = () => dispatch => {
  // Mock (until we get polling)
  dispatch({
    type: types.FETCH_MOVIE_GENRES,
    payload: [{'id': 28, 'name': 'Action'}, {'id': 10749, 'name': 'Romance'}, {'id': 14, 'name': 'Fantasy'}]
  });

  // Works!
  // axios.get('http://localhost:8000/api/get-movie-genres')
  // .then((res) => {
  //   console.log('res',res);
  //   return res.data.genres;
  // })
  // .then((genres) => dispatch({
  //   type: types.FETCH_MOVIE_GENRES,
  //   payload: genres
  // }));

}