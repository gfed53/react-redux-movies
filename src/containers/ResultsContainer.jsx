import React from 'react';
import { connect } from 'react-redux';

import { Results } from '../components/Results';

const mapStateToProps = state => ({
  results: state.movieResults.results,
  page: state.movieResults.page,
  lastSearchParamsUsed: state.lastSearchParamsUsed
})

export default connect(
  mapStateToProps
)(Results);
