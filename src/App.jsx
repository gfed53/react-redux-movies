import React, { Component } from 'react';
import './App.css';

import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';
// import SearchFormContainer from './containers/SearchFormContainer';

// import { Results } from './components/Results';

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
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
