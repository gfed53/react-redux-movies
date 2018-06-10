import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css'

import SearchFormContainer from '../containers/SearchFormContainer';

class Search extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  submit = values => {
    console.log('values',values);
    this.props.fetchMovieResults(values);
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


