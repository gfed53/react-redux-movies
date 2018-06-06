import React, { Component } from 'react';
import './App.css';

import SearchContainer from './containers/SearchContainer';
import SearchFormContainer from './containers/SearchFormContainer';

class App extends Component {

  // submit = values => {
  //   console.log('values',values);
  // }

  render() {
    return (
      <div className="container App">
        <header className="App-header">
          <h1>Search for movies!</h1>
        </header>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
