'use strict';

const uuid = require('node-uuid');

const cfStudents = function(name, age, gender){
  this.id = uuid.v1();
  this.name = name;
  this.age = age;
  this.gender = gender;
};

module.exports = cfStudents;
