const { Router } = require('express');

const { login } = require('../../controller/auth');

const authRouter = Router();

authRouter.post('/login', login);

module.exports = authRouter;
