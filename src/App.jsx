import React, { Component } from 'react';
import './css/App.css';

import scrollToComponent from 'react-scroll-to-component';

import SearchContainer from './containers/SearchContainer';
import ResultsContainer from './containers/ResultsContainer';


class App extends Component {

  constructor(props){
    super(props);
    this.scrollToResultsTop = this.scrollToResultsTop.bind(this);
  }

  scrollToResultsTop() {
    console.log('test from app');
    setTimeout(() => { scrollToComponent(this.Results, { offset: 0, align: 'top', duration: 500}); },0); 
  }

  render() {
    return (
      <div className="container App">
        <header className="App-header">
          <h1>Search for movies!</h1>
        </header>
        <SearchContainer />
        <ResultsContainer ref={(component) => { this.Results = component; }} scrollToResultsTop={this.scrollToResultsTop} />
      </div>
    );
  }
}

export default App;
