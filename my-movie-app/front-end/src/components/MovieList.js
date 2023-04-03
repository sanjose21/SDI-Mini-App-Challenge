import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, onDeleteMovie }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} onDeleteMovie={onDeleteMovie} />
      ))}
      <button type="button" onClick={() => onDeleteMovie(movie.id)}>Delete</button>
    </div>
  );
};

export default MovieList;
