const express = require('express');
const rentRouter = express.Router();

const {
    newLoanController,
      } = require('../controllers/rentals.controllers');

rentRouter.post('/loan', newLoanController);

module.exports = rentRouter;