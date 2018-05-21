import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateSearchBar, updateQueries } from '../actions';
import SearchBar from '../components/SearchBar';


const mapStateToProps = state => {
  console.log('state',state);
  return ({ text: state.searchBarText })
}

const mapDispatchToProps = dispatch => ({
  updateSearchBar: text => dispatch(updateSearchBar(text)),
  updateQueries: text => dispatch(updateQueries(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)


