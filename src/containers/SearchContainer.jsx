// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateSearchBar, updateQueries, fetchMovieResults } from '../actions';
import Search from '../components/Search';


const mapStateToProps = state => {
  // console.log('state',state);
  console.log('movie results',state.movieResults);
  return ({ 
    movieGenres: state.movieGenres
   })
}

const mapDispatchToProps = dispatch => ({
  fetchMovieResults: params => dispatch(fetchMovieResults(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)


