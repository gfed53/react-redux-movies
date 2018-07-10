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
  }

  render() {
    return (
      <section id="section-search">
        <SearchFormContainer onSubmit={this.submit} />
      </section>
    );
  }
}

export default Search;


