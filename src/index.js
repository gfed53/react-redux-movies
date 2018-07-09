import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { fetchMovieGenres } from './actions';


import {store} from './store/store';

// Grab list of genres from API on startup.
store.dispatch(fetchMovieGenres());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
