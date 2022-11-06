const express = require('express');
const seriesRouter = express.Router();

const { 
    getSerieByIdController,
    getSerieByNameController,
    getSeriesTopRatedController,
    getDebutingSeries,
    getPremiereSeries
      } = require('../controllers/series.controllers');

seriesRouter.get('/id/:id', getSerieByIdController);
seriesRouter.get('/title/:title', getSerieByNameController);
seriesRouter.get('/top', getSeriesTopRatedController);
seriesRouter.get('/debut', getDebutingSeries);
seriesRouter.get('/premiere', getPremiereSeries);

seriesRouter.all('/*', (req, res) => res.status(404).json({message: "404 - Resource Not Found"}));



module.exports = seriesRouter;