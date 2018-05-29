// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateSearchBar, updateQueries, fetchMovieResults } from '../actions';
import Search from '../components/Search';


const mapStateToProps = state => {
  console.log('state',state);
  return ({ text: state.searchBarText })
}

const mapDispatchToProps = dispatch => ({
  updateSearchBar: text => dispatch(updateSearchBar(text)),
  updateQueries: text => dispatch(updateQueries(text)),
  fetchMovieResults: text => dispatch(fetchMovieResults(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)


