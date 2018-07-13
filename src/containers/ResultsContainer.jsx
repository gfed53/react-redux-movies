// import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieResults } from '../actions';

import Results from '../components/Results';

const mapStateToProps = (state, props) => ({
  results: state.movieResults.results,
  page: state.movieResults.page,
  totalPages: state.movieResults.totalPages,
  lastSearchParamsUsed: state.lastSearchParamsUsed,
  scrollToResultsTop: props.scrollToResultsTop,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchMovieResults: params => dispatch(fetchMovieResults(params)),
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);
