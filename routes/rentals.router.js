const express = require('express');
const rentalsRouter = express.Router();

const {
    newLoanController,
    modifyLoanController,
    getAllUserLoansController,
    getAllLoansController,
      } = require('../controllers/rentals.controllers');

rentalsRouter.post('/loan', newLoanController);
rentalsRouter.patch('/loan/:loanId', modifyLoanController)
rentalsRouter.get('/loan/:userId', getAllUserLoansController)
rentalsRouter.get('/loans', getAllLoansController)

module.exports = rentalsRouter;