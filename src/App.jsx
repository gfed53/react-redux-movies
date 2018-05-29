import React, { Component } from 'react';
import './App.css';

import SearchContainer from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Find some movies!</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
