import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.fetchMovieResults(this.props.text);
    this.props.updateQueries(this.props.text);
    this.props.updateSearchBar('');
  }


  render() {
    return (
      <div className="search-bar">
      <form action="" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter a movie..." onChange={(e) => this.props.updateSearchBar(e.target.value)} value={this.props.text}/>
        <button type="submit">Go!</button>
      </form>
      </div>
    );
  }
}

export default SearchBar;


