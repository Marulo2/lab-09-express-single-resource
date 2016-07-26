'use strict';

const appError = require('./appError');
const uuid = require('node-uuid');

const User = module.exports = function(name){
  if(!name) return appError.error400();
  this.id = uuid.v1();
  this.name = name;
  this.date = Date.now();
};
