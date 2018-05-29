import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // console.log('this.props',this.props);
    const yearNow = new Date().getFullYear();
    console.log('yearNow',yearNow);
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.fetchMovieResults(this.props.text);
    this.props.updateQueries(this.props.text);
    this.props.updateSearchBar('');
  }

  renderGenreOptions(){
    return this.props.movieGenres.map(genre => (
      <div key={genre.id} className="genre-container">
        <label htmlFor="genre">{genre.name}</label>
        <input name="genre" value={genre.id} type="checkbox"/>
      </div>
    ))
  }


  render() {
    const yearNow = new Date().getFullYear();
    return (
      <div className="search-bar">
      <form action="" onSubmit={this.handleSubmit}>
        <h3>Filter By..</h3>
        <div className="dates-container">
          <p>Release Date</p>
          <div className="date-container">
            <label htmlFor="date-from">From</label>
            <input name="date-from" type="number" min="1900" max={yearNow}/>
          </div>
          <div className="date-container">
            <label htmlFor="date-to">To</label>
            <input name="date-to" type="number" min="1900" max={yearNow}/>
          </div>
        </div>
        <div className="genres-container">
          <p>Genre(s)</p>
          {this.renderGenreOptions()}
        </div>
        <button type="submit">Go!</button>
      </form>
      </div>
    );
  }
}

export default Search;


