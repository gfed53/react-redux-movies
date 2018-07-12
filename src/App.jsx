import React, { Component } from 'react';
import './css/App.css';

import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';


class App extends Component {

  constructor(props){
    super(props);
    this.testMethod = this.testMethod.bind(this);
  }

  testMethod() {
    console.log('test from app');
  }

  render() {
    return (
      <div className="container App">
        <header className="App-header">
          <h1>Search for movies!</h1>
        </header>
        <SearchContainer testClick={this.testMethod} />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
