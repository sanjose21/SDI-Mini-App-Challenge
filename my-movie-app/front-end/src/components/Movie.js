import React from "react";

const Movie = ({ movie, onDeleteMovie }) => {
  const handleDelete = () => {
    onDeleteMovie(movie.title);
  };

  const handleToggleWatched = () => {
    onToggleWatched(movie.title);
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <button onClick={handleToggleWatched}>
        {movie.watched ? "Watched" : "To Watch"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Movie;

