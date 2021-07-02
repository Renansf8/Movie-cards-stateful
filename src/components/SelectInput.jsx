import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/select.css';

class SelectInput extends Component {
  render() {
    const { valueSelectInput, handleChangeSelect } = this.props;

    return (
      <label className='select' htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ valueSelectInput }
          onChange={ handleChangeSelect }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  valueSelectInput: PropTypes.string.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
};

export default SelectInput;
