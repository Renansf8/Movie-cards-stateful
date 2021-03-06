import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/title.css'

class TitleInput extends Component {
  render() {
    const { valueTitleInput, handleChangeTitle } = this.props;

    return (
        <label className="title" htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          type="text"
          name="title"
          value={ valueTitleInput }
          data-testid="title-input"
          onChange={ handleChangeTitle }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  valueTitleInput: PropTypes.func.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
};

export default TitleInput;
