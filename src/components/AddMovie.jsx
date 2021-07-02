import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import TextAreaInput from './TextAreaInput';
import RatingInput from './RatingInput';
import SelectInput from './SelectInput';
import ButtonForm from './ButtonForm';

import '../styles/addMovie.css';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div className="form-container">
        <form data-testid="add-movie-form">
            <h2>Adicionar um filme</h2>
            <div className='first-info'>
              <TitleInput valueTitleInput={ title } handleChangeTitle={ this.handleChange } />
              <SubtitleInput
                valueSubtitleInput={ subtitle }
                handleChangeSubtitle={ this.handleChange }
              />
              <ImagePathInput
                valueImageInput={ imagePath }
                handleChangeImage={ this.handleChange }
              />
            </div>
            <div className='first-info'>
            <TextAreaInput
              valueTextAreaInput={ storyline }
              handleChangeTextArea={ this.handleChange }
              />
              <RatingInput
                valueRatingInput={ rating }
                handleChangeRating={ this.handleChange }
              />
            <SelectInput
              valueSelectInput={ genre }
              handleChangeSelect={ this.handleChange }
            />
            </div>
            <div class-name="button">
              <ButtonForm
              onClick={ this.handleSubmit }
            />
            </div>
          
       </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
