import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
