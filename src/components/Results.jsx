import React from 'react';
import moment from 'moment';

import './Results.css';

export const Results = props => {

  console.log('results props',props);

  const results = props.results.map(result => (
    <div key={result.id} className="result-main">
      <h4>{result.title}</h4>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <img className="result-image" src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="movie image"/>
        </div>
        <div className="col-sm-6 col-md-4">
          <p>{result.overview}</p>
        </div>
        <div className="col-sm-6 col-md-4 result-content-right">
          <p>{moment(result.release_date,'YYYY-MM-DD').format('MMMM Do, YYYY')}</p>
          <p>Rating: {result.vote_average}</p>
          <p>Votes: {result.vote_count}</p>
        </div>
      </div>
    </div>
    ))

  return (
    <div className="container results-container">
      {results}
    </div>
  )
}