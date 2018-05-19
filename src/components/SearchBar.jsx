import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="search-bar">
      <form action="">
        <input type="text" placeholder="Enter a movie..." onChange={this.props.onChange} value={this.props.text}/>
        <button type="submit">Go!</button>
      </form>
      </div>
    );
  }
}

export default SearchBar;


