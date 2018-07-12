// import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieResults } from '../actions';

import Results from '../components/Results';

const mapStateToProps = state => ({
  results: state.movieResults.results,
  page: state.movieResults.page,
  totalPages: state.movieResults.totalPages,
  lastSearchParamsUsed: state.lastSearchParamsUsed,
})

const mapDispatchToProps = dispatch => ({
  fetchMovieResults: params => dispatch(fetchMovieResults(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);
