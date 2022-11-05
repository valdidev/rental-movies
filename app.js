const express = require('express');

const authRouter = require('./routes/auth.router');
const moviesRouter = require('./routes/movies.router');
const seriesRouter = require('./routes/series.router');
const rentalsRouter = require('./routes/rentals.router');


const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);
app.use('/rentals', rentalsRouter);

module.exports = app;