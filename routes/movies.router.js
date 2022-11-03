const express = require('express');
const moviesRouter = express.Router();

const {
     getMovieByIdController,
     getMovieByTitleController 
      } = require('../controllers/movies.controllers');

moviesRouter.get('/id/:id', getMovieByIdController);
moviesRouter.get('/title/:title', getMovieByTitleController);


module.exports = moviesRouter;