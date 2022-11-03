const express = require('express');
const moviesRouter = require('./routes/movies.router');
const seriesRouter = require('./routes/series.router');


const app = express();

app.use(express.json());

app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);

module.exports = app;