const express = require('express');
const authBearerMiddleware = require('../middlewares/auth.middlewares');

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
// only admin
rentalsRouter.get('/loans', authBearerMiddleware, getAllLoansController)

module.exports = rentalsRouter;