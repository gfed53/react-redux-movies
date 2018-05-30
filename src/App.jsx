import React, { Component } from 'react';
import './App.css';

import SearchContainer from './containers/SearchContainer';
import SearchFormContainer from './containers/SearchFormContainer';

class App extends Component {

  submit = values => {
    console.log('values',values);
  }

  render() {
    return (
      <div className="App">
        <h1>Find some movies!</h1>
        <SearchFormContainer onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
