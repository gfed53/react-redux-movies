import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { SearchForm } from '../components/SearchForm';

let SearchFormContainer = reduxForm({
  // a unique name for the form
  form: 'search'
})(SearchForm);

SearchFormContainer = connect(
  state => ({
    genres: state.movieGenres
  })
)(SearchFormContainer)

export default SearchFormContainer;