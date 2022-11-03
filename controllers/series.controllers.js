const SerieModel = require("../models/Serie");
const ArticleModel = require("../models/Article");

const getSerieByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const serieFounded = await SerieModel.findByPk(id);
    const { articleId } = serieFounded;
    const { title, rated, year, poster } = await ArticleModel.findByPk(
      articleId
    );
    res.json({ title, year, rated, poster });
  } catch (error) {
    res.status(404).json({ message: "Serie Not Found" });
  }
};

const getSerieByNameController = async (req, res) => {
  try {
    const { title } = req.params;
    const movieFounded = await ArticleModel.findOne({
      where: { title: title },
    });
    const { isMovie } = movieFounded;
    if (isMovie == 0) {
      res.json(movieFounded);
    } else {
      // TODO - ¿Cómo hago que vaya al catch si falla?
      res.send("That is a movie");
    }
  } catch (error) {
    res.status(404).json({ message: "Movie Not Found" });
  }
};

module.exports = {
  getSerieByIdController,
  getSerieByNameController
};
