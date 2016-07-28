'use strict';

const express = require('express');
const app = express();

const debug = require('debug');
const serverLog = debug('cfdemo:serverLog');
const serverErrLog = debug('cfdemo:serverError');

const jsonParser = require('./lib/jsonParser');
const bodyParser = require('body-parser');
const appError = require('./lib/appError');

const morgan = require('morgan');

const router = require('./route/route');
app.use('/api', router);

// app.post('/somejson', jsonParser, (req, res) => {
//   res.send(req.body);
// });
//
// app.use((err, req, res, next) => {
//   res.status(err.statusCode || 500).send(err.message);
// });


// app.use(morgan('combined', {
//   skip: function(req, res) { return res.statusCode < 600})
// });


app.post('/api/students', jsonParser(401, 'crappy json'), (req, res, next) => {
  serverLog(req.body);
  res.send(':thumbsup:\n');
});


app.post('/bodyparser', bodyParser.json(), (req, res) => {
  serverLog(req.body);
  res.send('from body parser\n');
});


app.use((err, req, res, next) => {
  if (err.type === 'appError') return next(err);
  appError(500, '500: internal server error.', next)(err);
});


app.use((err, req, res, next) => {
  serverErrLog(err.error.message);
  res.status(err.statusCode).json({msg: err.message});
});




module.exports = app;
