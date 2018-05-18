import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {


  render() {
    return (
      <div className="search-bar-container">
         <input type="text" placeholder="Search..."/>
      </div>
    );
  }
}

export default SearchBar;


