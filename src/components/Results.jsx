import React from 'react';
// import { Field, reduxForm } from 'redux-form';

import './Results.css';

export const Results = props => {

  console.log('results props',props);

  const results = () => {
    return props.results.map(result => (
      <div className="result-main">
        <h4>{result.title}</h4>
        <div className="row">
          <div className="col-6">
            <p>{result.overview}</p>
          </div>
          <div className="col-6">
            <p>{result.release_date}</p>
            <p>Rating: {result.vote_average}</p>
            <p>Votes: {result.vote_count}</p>
          </div>
        </div>
      </div>
    ))
  }
  

  return (
    <div className="container results-container">
      {/* <h1>Results!</h1> */}
      {props.results.map(result => (
      <div className="result-main">
        <h4>{result.title}</h4>
        <div className="row">
          <div className="col-6">
            <p>{result.overview}</p>
          </div>
          <div className="col-6 result-content-right">
            <p>{result.release_date}</p>
            <p>Rating: {result.vote_average}</p>
            <p>Votes: {result.vote_count}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}