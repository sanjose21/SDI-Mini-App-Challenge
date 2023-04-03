const movies = [];

const getMovies = (req, res) => {
    const filteredMovies = movies.filter((movie) => {
        if (req.query.filter === 'watched') {
            return movie.watched;
        } else if (req.query.filter === 'toWatch') {
            return !movie.watched;
        } else {
            return true;
        }
    });

    res.json(filteredMovies);
};

const createMovie = (req, res) => {
    const movie = {
        id: Date.now(),
        title: req.body.title,
        year: req.body.year,
        watched: false
    };

    movies.push(movie);
    res.json(movie);
};

const deleteMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const index = movies.findIndex((movie) => movie.id === id);

    if (index !== -1) {
        movies.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
};

module.exports = {
    getMovies,
    createMovie,
    deleteMovie
};
