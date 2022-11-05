const express = require('express');
const authRouter = express.Router();

const {
     authRegisterController,
     authFindUserByIdController,
     authModifyUserController,
     authDeleteUserController,
      } = require('../controllers/auth.controllers');

authRouter.post('/register', authRegisterController);
authRouter.get('/id/:id', authFindUserByIdController);
authRouter.put('/id/:id', authModifyUserController);
authRouter.delete('/id/:id', authDeleteUserController);

module.exports = authRouter;