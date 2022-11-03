const express = require('express');
const seriesRouter = express.Router();

const { 
    getSerieByIdController,
    getSerieByNameController
      } = require('../controllers/series.controllers');

seriesRouter.get('/id/:id', getSerieByIdController);
seriesRouter.get('/title/:title', getSerieByNameController);


module.exports = seriesRouter;