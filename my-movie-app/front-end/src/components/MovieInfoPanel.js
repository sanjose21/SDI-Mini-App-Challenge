import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../api';

const MovieInfoPanel = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovieDetails(details);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-info-panel">
      <h3>{movieDetails.title}</h3>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Runtime: {movieDetails.runtime} minutes</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MovieInfoPanel;
