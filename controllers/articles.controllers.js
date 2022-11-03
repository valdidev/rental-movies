const ArticleModel = require('../models/Article');
const { findById } = require('../services/articles.services');

const getMovieByIdController = () => {
    findById()
}

module.exports = {
    getMovieByIdController,
}