import React, { useState } from 'react';
import { searchMovies } from '../api';

const SearchBar = ({ onSearchResults }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchText.trim() === '') {
      return;
    }

    const results = await searchMovies(searchText);
    onSearchResults(results);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
