import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { updateSearchBar, updateQueries, fetchMovieResults } from '../actions';

import { Results } from '../components/Results';

const mapStateToProps = state => ({
  results: state.movieResults
})

// const mapDispatchToProps = dispatch => ({
//   fetchMovieResults: params => dispatch(fetchMovieResults(params))
// })

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Results);
