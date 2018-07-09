import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { updateSearchBar, updateQueries, fetchMovieResults } from '../actions';

import { Results } from '../components/Results';

const mapStateToProps = state => ({
  results: state.movieResults.results,
  page: state.movieResults.page
})

export default connect(
  mapStateToProps
)(Results);
