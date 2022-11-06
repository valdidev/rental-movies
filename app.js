const express = require('express');
const morgan = require('morgan');
const winston = require('./config/winston');

const authRouter = require('./routes/auth.router');
const moviesRouter = require('./routes/movies.router');
const seriesRouter = require('./routes/series.router');
const rentalsRouter = require('./routes/rentals.router');


const app = express();

// logger
app.use(morgan('dev', { stream: winston.stream }));

app.use(express.json());

app.use('/auth', authRouter);
app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);
app.use('/rentals', rentalsRouter);
app.use('/*', (req, res) => res.status(404).json({ message: '404 - Resource Not Found' }));

module.exports = app;