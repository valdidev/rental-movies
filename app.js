const express = require('express');
const articlesRouter = require('./routes/articles.router');

const app = express();

app.use(express.json());

app.use('/articles', articlesRouter);

module.exports = app;