import * as types from '../constants/ActionTypes';
import { KEYS } from '../temp-config';

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
  // Mock (until we have polling)
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

// Old...

// export const updateMovieResults = results => ({
//   type: types.UPDATE_SEARCH_BAR,
//   payload: text
// });

// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': 'true'
// })

// export const fetchMovieResults = () => dispatch => {
//   // Mock GET request
//   fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${KEYS.tmdbv3}&with_genres=&primary_release_date.gte=1999-05-20&primary_release_date.lte=2005-05-20&page=2`, {
//     mode: 'no-cors'
//   })
//   .then((res) => res.json())
//   .then((movies) => dispatch({
//     type: types.FETCH_MOVIE_RESULTS,
//     payload: movies
//   }))
// }

