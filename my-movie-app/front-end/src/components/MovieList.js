import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, onDeleteMovie }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} onDeleteMovie={onDeleteMovie} />
      ))}
    </div>
  );
};

export default MovieList;
