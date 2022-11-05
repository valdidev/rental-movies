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


module.exports = seriesRouter;