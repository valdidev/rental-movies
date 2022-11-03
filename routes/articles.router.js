const express = require('express');
const articlesRouter = express.Router();

const { getMovieByIdController } = require('../controllers/articles.controllers');

articlesRouter.get('/', getMovieByIdController);


module.exports = articlesRouter;