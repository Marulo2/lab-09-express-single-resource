'use strict';

const express = require('express');
const Router = express.Router;

let app = express();
let primaryRouter = require('./route/route.js');

app.get('/hello', (req, res) => {
  res.json({msg : 'from app'});
});

app.use('/api', primaryRouter);
app.get('*', (req, res) => {
  res.status(404).json({msg: '404 not found!!!'});
});

app.listen(3000, () => console.log('Server up on 3000!! '));
