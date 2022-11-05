const express = require('express');
const moviesRouter = express.Router();

const {
     getMovieByIdController,
     getMovieByTitleController,
     getMoviesTopRatedController,
     getMoviesByGenreController
      } = require('../controllers/movies.controllers');

moviesRouter.get('/id/:id', getMovieByIdController);
moviesRouter.get('/title/:title', getMovieByTitleController);
moviesRouter.get('/top', getMoviesTopRatedController);
moviesRouter.get('/genre/:genre', getMoviesByGenreController);


module.exports = moviesRouter;