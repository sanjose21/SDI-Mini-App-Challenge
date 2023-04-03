import React, { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddMovie(movieTitle);
    setMovieTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a movie..."
        value={movieTitle}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovie;
