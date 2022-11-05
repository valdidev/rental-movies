const express = require('express');
const authBearerMiddleware = require('../middlewares/auth.middlewares');

const authRouter = express.Router();

const {
     authRegisterController,
     authFindUserByIdController,
     authModifyUserController,
     authDeleteUserController,
     authLoginController,
     
      } = require('../controllers/auth.controllers');

authRouter.post('/register', authRegisterController);
authRouter.post('/login', authLoginController);
authRouter.get('/id/:id', authFindUserByIdController);
authRouter.put('/id/:id', authModifyUserController);
// only admin
authRouter.delete('/id/:id', authBearerMiddleware, authDeleteUserController);

module.exports = authRouter;