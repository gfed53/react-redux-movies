import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchFormContainer from '../containers/SearchFormContainer';

class Search extends Component {

  constructor(props){
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // console.log('this.props',this.props);
  }

  // handleSubmit(e){
  //   e.preventDefault();

  //   this.props.fetchMovieResults(this.props.text);
  //   this.props.updateQueries(this.props.text);
  //   this.props.updateSearchBar('');
  // }

  submit = values => {
    console.log('values',values);
    this.props.fetchMovieResults(values);
  }

  // renderGenreOptions(){
  //   return this.props.movieGenres.map(genre => (
  //     <div key={genre.id} className="genre-container">
  //       <label htmlFor="genre">{genre.name}</label>
  //       <input name="genre" value={genre.id} type="checkbox"/>
  //     </div>
  //   ))
  // }


  render() {
    return (
      <section id="section-search">
        <SearchFormContainer onSubmit={this.submit} />
      </section>
    );
  }
}

export default Search;


