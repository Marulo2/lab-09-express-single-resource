'use strict';

const Router = require('express').Router;

let someOtherRouter = Router();
let primaryRouter = module.exports = exports = Router();

someOtherRouter.get('/someroute', (req, res) => {
  res.json({msg: 'hello from some route'});
});

primaryRouter.get('/hello', (req, res) => {
  res.status(202).json({msg: 'hello world!!!'});
});

primaryRouter.get('/hello/:first/:last', (req, res) => {
  res.json({msg: 'hello ' + req.params.last + ', ' + req.params.first});
});

primaryRouter.use('/something', someOtherRouter);
