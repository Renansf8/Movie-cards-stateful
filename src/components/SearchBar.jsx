import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/searchBar.css'

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <>
        <div className="filter-container">
          <form data-testid="search-bar-form">
            <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto:
              <input
                className="text-input"
                type="text"
                value={ searchText }
                onChange={ onSearchTextChange }
                data-testid="text-input"
              />
            </label>
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                className="check"
                type="checkbox"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
                data-testid="checkbox-input"
              />
            </label>
            <label htmlFor="select-input" data-testid="select-input-label">
              Filtrar por gênero
              <select
                className="select"
                value={ selectedGenre }
                onChange={ onSelectedGenreChange }
                data-testid="select-input"
              >
                <option value="" data-testid="select-option">Todos</option>
                <option value="action" data-testid="select-option">Ação</option>
                <option value="comedy" data-testid="select-option">Comédia</option>
                <option value="thriller" data-testid="select-option">Suspense</option>
              </select>
            </label>
          </form>
        </div>
        <hr />
      </>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
