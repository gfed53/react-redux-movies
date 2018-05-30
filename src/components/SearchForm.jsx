import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const SearchForm = props => {
  const { handleSubmit, genres } = props;

  console.log('genres',genres);

  const yearNow = new Date().getFullYear();

  return (
    <form onSubmit={handleSubmit}>
      <div className="date-container">
        <label htmlFor="dateFrom">From</label>
        <Field name="dateFrom" component="input" type="number" min="1900" max={yearNow} />
      </div>
      <div className="date-container">
        <label htmlFor="dateTo">To</label>
        <Field name="dateTo" component="input" type="number" min="1900" max={yearNow} />
      </div>
      <button type="submit">Go!</button>
    </form>
  )
}