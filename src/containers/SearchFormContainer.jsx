import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { updateSearchBar, updateQueries, fetchMovieResults } from '../actions';
import { SearchForm } from '../components/SearchForm';

let SearchFormContainer = reduxForm({
  // a unique name for the form
  form: 'search'
})(SearchForm);

const mapStateToProps = state => ({
  genres: state.movieGenres
})

const mapDispatchToProps = dispatch => ({
  fetchMovieResults: params => dispatch(fetchMovieResults(params))
})

SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFormContainer)

export default SearchFormContainer;