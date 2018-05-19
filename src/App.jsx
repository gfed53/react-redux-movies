import React, { Component } from 'react';
import './App.css';

import SearchBarContainer from './containers/SearchBarContainer';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        Home
        <SearchBarContainer text="foo"  />
      </div>
    );
  }
}

export default App;
