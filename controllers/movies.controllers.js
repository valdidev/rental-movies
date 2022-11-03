const MovieModel = require("../models/Movie");
const ArticleModel = require("../models/Article");

// TODO - separar los servicios
// const { findById } = require("../services/articles.services");

const getMovieByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const movieFounded = await MovieModel.findByPk(id);
    const { articleId } = movieFounded;
    const { title, rated, year, poster } = await ArticleModel.findByPk(articleId)
    res.json({title, year, rated, poster});
  } catch (error) {
    res.status(404).json({message: 'Movie Not Found'});
  }
};

const getMovieByTitleController = async (req, res) => {
  try {
    const { title } = req.params;
    const movieFounded = await ArticleModel.findOne({where: {title: title}});
    const { isMovie } = movieFounded;
    if (isMovie == 1){
      res.json(movieFounded);
    }else {
      // TODO - ¿Cómo hago que vaya al catch si falla?
      res.send('That is a serie')
    }
    
  } catch (error) {
    res.status(404).json({message: 'Movie Not Found'});
  }
}


module.exports = {
  getMovieByIdController,
  getMovieByTitleController
};
