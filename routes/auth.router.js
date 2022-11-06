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

authRouter.all('/*', (req, res) => res.status(404).json({message: "404 - Resource Not Found"}));

module.exports = authRouter;