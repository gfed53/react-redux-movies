import React, { Component } from 'react';
import './App.css';

import SearchContainer from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Home
        <SearchContainer />
      </div>
    );
  }
}

export default App;
