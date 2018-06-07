import React from 'react';
import { Field, reduxForm } from 'redux-form';

import CheckboxGroup from './CheckboxGroup.jsx';

import './SearchForm.css';

export const SearchForm = props => {
  const { handleSubmit, genres } = props;
  const yearNow = new Date().getFullYear();
  const genreOptions = genres.map(genre => ({
    value: genre.id,
    label: genre.name
  }));

  return (
    <form onSubmit={handleSubmit}>
      <div className="row align-items-center justify-content-center dates-container">
        <div className="col-4">
          <h3>By Date:</h3>
        </div>
        <div className="col-8">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-3 date">
              <label htmlFor="dateFrom">From:</label>
              <Field name="dateFrom" component="input" type="number" min="1900" max={yearNow} />
            </div>
            <div className="col-sm-12 col-md-3 date">
              <label htmlFor="dateTo">To:</label>
              <Field name="dateTo" component="input" type="number" min="1900" max={yearNow} />
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-between genres-container">
        <div className="col-4">
          <h3>By Genre:</h3>
        </div>
        <div className="col-8">
          <CheckboxGroup name="genres" options={genreOptions} />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-submit" type="submit">Go!</button>
      </div>
      
    </form>
  )
}