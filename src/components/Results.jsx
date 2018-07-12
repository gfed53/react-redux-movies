import React, { Component } from 'react';
import moment from 'moment';

import '../css/Results.css';

export default class Results extends Component {

  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    // Only if we end up having results
    if(nextProps.results.length){
      // Trigger a higher-level component method that will autoscroll to top of results container.
      console.log('should scroll to element');
    }
  }


  render(){

    const props = this.props;

    const getPrevPage = () => {
      console.log('getPrevPage');
      const updatedParams = {...props.lastSearchParamsUsed, page: props.page - 1}
      props.fetchMovieResults(updatedParams);
    }

    const getNextPage = () => {
      console.log('getNextPage');
      const updatedParams = {...props.lastSearchParamsUsed, page: props.page + 1}
      props.fetchMovieResults(updatedParams);
    }

    const results = props.results.map(result => (
      <div key={result.id} className="result-main">
        <h4>{result.title}</h4>
        <div className="row">
          <div className="col-6 col-md-3 order-1 order-md-1">
            <img className="result-image" src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="movie image"/>
          </div>
          <div className="col-12 col-md-6 order-3 order-md-2 result-overview">
            <p>{result.overview}</p>
          </div>
          <div className="col-6 col-md-3 order-2 order-md-3 result-content-right">
            <p>{moment(result.release_date,'YYYY-MM-DD').format('MMMM Do, YYYY')}</p>
            <p>Rating: {result.vote_average}</p>
            <p>Votes: {result.vote_count}</p>
          </div>
        </div>
      </div>
      ));

    const buttonPrevPage = props.page > 1 ? (
      <button className="btn btn-secondary" onClick={getPrevPage}><i className="material-icons btn--icon">navigate_before</i><span>Previous</span></button>
    ) : null;

    const buttonNextPage = props.page < props.totalPages ? (
      <button className="btn btn-secondary" onClick={getNextPage}><span>Next</span><i className="material-icons btn--icon">navigate_next</i></button>
    ) : null;

    const paginationSection = (
      <div className="results--pagination">
        <div className="container-button--page">
          {buttonPrevPage}
        </div>
        <div className="container-button--page">
          {buttonNextPage}
        </div>
      </div>
    )

    const resultsView = props.results.length ? (
      <div className="container results--container">
        <div className="results--page-display">
          <p>Page {props.page}</p>
        </div>
        {paginationSection}
        <div>
          {results}
        </div>
        {paginationSection}
      </div> 
    ) : null;

    return (
      <div id="results">
        {resultsView} 
      </div>
    )

  }
}