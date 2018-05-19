import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateSearchBar } from '../actions';
import SearchBar from '../components/SearchBar';



// class SearchBarContainer extends Component {

//   constructor(props){
//     super(props);
//   }

//   handleChange(e) {
//     console.log('e.target.value',e.target.value);
//   }


//   render() {
//     return (
//       <div className="search-bar-container">
//         <SearchBar onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

const mapStateToProps = state => {
  console.log('state',state);
  return ({ text: state.searchBarText })
}

const mapDispatchToProps = dispatch => ({
  updateSearchBar: text => dispatch(updateSearchBar(text))
})

// export default SearchBarContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)


