import * as types from '../constants/ActionTypes';
import { KEYS } from '../temp-config';


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

