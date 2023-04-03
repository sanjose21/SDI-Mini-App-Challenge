import knex from '../db';

const Movie = () => knex('movies');

export default Movie;
