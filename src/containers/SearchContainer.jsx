import { connect } from 'react-redux'
import { updateSearchBar, updateQueries, fetchMovieResults, setLastParams } from '../actions';
import Search from '../components/Search';

const mapStateToProps = state => {
  console.log('state',state);
  return ({ 
    movieGenres: state.movieGenres
   })
}

const mapDispatchToProps = dispatch => ({
  fetchMovieResults: params => dispatch(fetchMovieResults(params)),
  setLastParams: params => dispatch(setLastParams(params)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)


