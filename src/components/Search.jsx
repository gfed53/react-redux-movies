import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/Search.css'

import SearchFormContainer from '../containers/SearchFormContainer';

class Search extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  submit = params => {
    // console.log('params',params);
    this.props.fetchMovieResults(params);
    this.props.setLastParams(params);

    // Vanilla DOM JS (temporary)
    // const resultsEl = document.getElementById('results');
    // console.log('resultsEl',resultsEl);
    // resultsEl.scrollIntoView();
  }

  render() {
    return (
      <section id="section-search">
        {/* <button className="btn btn-primary" onClick={this.props.testClick}>Test Button</button> */}
        <SearchFormContainer onSubmit={this.submit} />
      </section>
    );
  }
}

export default Search;


