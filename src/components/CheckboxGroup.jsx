// based on: https://github.com/erikras/redux-form/issues/1037, user:kmsheng

import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';

import '../css/CheckboxGroup.css';

export default class CheckboxGroup extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })).isRequired
  };

  field = ({input, meta, options}) => {

    const {name, onChange} = input;
    const {touched, error} = meta;
    const inputValue = input.value;

    const checkboxes = options.map(({label, value}, index) => {

      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        return onChange(arr);
      };
      const checked = inputValue.includes(value);
      return (
        <label className="checkbox-group-item" key={`checkbox-${index}`}>
          <input type="checkbox" name={`${name}[${index}]`} value={value} checked={checked} onChange={handleChange} />
          <span>{label}</span>
        </label>
      );
    });

    return (
      <div>
        <div className="checkbox-group-container">{checkboxes}</div>
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };

  render() {
    return <Field {...this.props} type="checkbox" component={this.field} />;
  }
}