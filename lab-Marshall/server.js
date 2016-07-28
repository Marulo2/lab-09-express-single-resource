'use strict';

const express = require('express');
const app = express();
const router = require('./route/route');

app.use('/api', router);

module.exports = app;
