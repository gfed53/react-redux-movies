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
  console.log('params in action',params);
  // GET request (mock data)
  axios.post(`http://localhost:8000/api/get-movies/`, {
    params
  })
  .then((res) => res.data.tmdb_results.results)
  .then((movies) => dispatch({
    type: types.FETCH_MOVIE_RESULTS,
    payload: movies
  }));

  // dispatch({
  //   type: types.FETCH_MOVIE_RESULTS,
  //   payload: {'status': 'received', 'data': params}
  // });

}

export const fetchMovieGenres = () => dispatch => {
  // Mock (until we get polling)
  dispatch({
    type: types.FETCH_MOVIE_GENRES,
    payload: [
      {'id': 28, 'name': 'Action'}, {'id': 10749, 'name': 'Romance'}, {'id': 14, 'name': 'Fantasy'},
      // {'id': 28, 'name': 'Action'}, {'id': 10749, 'name': 'Romance'}, {'id': 14, 'name': 'Fantasy'},
      // {'id': 28, 'name': 'Action'}, {'id': 10749, 'name': 'Romance'}, {'id': 14, 'name': 'Fantasy'},
      // {'id': 28, 'name': 'Action'}, {'id': 10749, 'name': 'Romance'}, {'id': 14, 'name': 'Fantasy'}
    ]
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