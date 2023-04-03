import express from 'express';
import moviesRouter from './movies.js';
// import other routers here if needed

const router = express.Router();

router.use('/movies', moviesRouter);
// add other routes here if needed

export default router;
