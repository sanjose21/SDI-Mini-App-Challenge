import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieInfoPanel from './components/MovieInfoPanel';

function App() {
  const [userMovies, setUserMovies] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const filteredMovies = userMovies.filter((movie) => {
    if (filter === 'watched') {
      return movie.watched;
    } else if (filter === 'toWatch') {
      return !movie.watched;
    } else {
      return true;
    }
  });

  const handleCloseMovieInfo = () => {
    setSelectedMovieId(null);
  };

  const handleAddMovie = (movie) => {
    setUserMovies([...userMovies, movie]);
  };

  const handleDeleteMovie = (movieId) => {
    setUserMovies(userMovies.filter((movie) => movie.id !== movieId));
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <SearchBar onSearchResults={setSearchResults} onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} onDeleteMovie={handleDeleteMovie} />
      {selectedMovieId && (
        <MovieInfoPanel movieId={selectedMovieId} onClose={handleCloseMovieInfo} />
      )}
      <button onClick={() => setFilter('all')}>All Movies</button>
      <button onClick={() => setFilter('watched')}>Watched Movies</button>
      <button onClick={() => setFilter('toWatch')}>To Watch Movies</button>
    </div>
  );
}

export default App;
