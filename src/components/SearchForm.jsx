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
      <div className="dates-container">
        <h3>By Date:</h3>
        <div className="date">
          <label htmlFor="dateFrom">From:</label>
          <Field name="dateFrom" component="input" type="number" min="1900" max={yearNow} />
        </div>
        <div className="date">
          <label htmlFor="dateTo">To:</label>
          <Field name="dateTo" component="input" type="number" min="1900" max={yearNow} />
        </div>
      </div>
      <div className="genres-container">
        <h3>By Genre:</h3>
        <CheckboxGroup name="genres" options={genreOptions} />
      </div>
      <button className="btn btn-submit" type="submit">Go!</button>
    </form>
  )
}