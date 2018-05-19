import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../components/SearchBar';

class SearchBarContainer extends Component {

  constructor(props){
    super(props);
  }

  handleChange(e) {
    console.log('e.target.value',e.target.value);
    
  }


  render() {
    return (
      <div className="search-bar-container">
        <SearchBar onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchBarContainer;


