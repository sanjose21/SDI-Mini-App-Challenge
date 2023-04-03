import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieInfoPanel from './components/MovieInfoPanel';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseMovieInfo = () => {
    setSelectedMovieId(null);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <SearchBar onSearchResults={setSearchResults} />
      <MovieList movies={searchResults} onMovieClick={handleMovieClick} />
      {selectedMovieId && (
        <MovieInfoPanel movieId={selectedMovieId} onClose={handleCloseMovieInfo} />
      )}
    </div>
  );
}

export default App;
