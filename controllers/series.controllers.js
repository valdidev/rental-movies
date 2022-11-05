const SerieModel = require("../models/Serie");
const ArticleModel = require("../models/Article");
const moment = require('moment');
moment().format('s');
const { Op } = require("sequelize");

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

const getSeriesTopRatedController = async (req, res) => {
  try {
    let topSeries = await ArticleModel.findAll({
      where: {
        rated: {
          [Op.between]: [8, 10],
        },
        isMovie: 0,
      },
    });

    res.json(topSeries);
  } catch (error) {
    res.status(404).json({ message: "Movie Not Found" });
  }
};

const getDebutingSeries = async (req, res) => {
  const debutingSeries = await SerieModel.findAll({
    where: {
      toTheaterOrCinema: 1
    }
  });

  const debutingArticles = await ArticleModel.findAll({
    where: {
      id: debutingSeries.map((serie) => {
        return serie.articleId;
      }),
    },
  });
  res.json(debutingArticles);
};

const getPremiereSeries = async (req, res) => {
  const premiereSeries = await SerieModel.findAll({
    where: {
      premiereNewChapter: {
        [Op.between]: [new Date(), new Date().setDate(new Date().getDate() + 7)]
      }
    }
  });
  res.json(premiereSeries);
}

module.exports = {
  getSerieByIdController,
  getSerieByNameController,
  getSeriesTopRatedController,
  getDebutingSeries,
  getPremiereSeries
};
