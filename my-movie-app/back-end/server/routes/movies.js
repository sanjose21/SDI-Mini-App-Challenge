import express from 'express';
import { Movie } from '../models/movie.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const filter = req.query.filter || 'all';
        const movies = await Movie.findAll(filter);
        res.status(200).json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await Movie.findByPk(id);
        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, year, watched } = req.body;
        const movie = await Movie.create({ title, year, watched });
        res.status(201).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, year, watched } = req.body;
        const movie = await Movie.findByPk(id);
        if (movie) {
            await movie.update({ title, year, watched });
            res.status(200).json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await Movie.findByPk(id);
        if (movie) {
            await movie.destroy();
            res.sendStatus(204);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
