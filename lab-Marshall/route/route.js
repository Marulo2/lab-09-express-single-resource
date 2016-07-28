'use strict';

const Router = require('express').Router;
const studentConstructor = require('../model/userConstruct');
const appError = require('../lib/appError');

const studentRegistry = {};
const router = Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.use(bodyParser.json());

router.get('/students/:id', (req, res) => {
  if(!studentRegistry[req.params.id]){
    return appError.error404('404 not found!!!').respond(res);
  }
  var students = studentRegistry[req.params.id];
  return res.status(200).json(students);
});

router.post('/students', jsonParser, (req, res) => {
  if(!req.body.name){
    return appError.error400('bad request').respond(res);
  }
  var students = new studentConstructor(req.body.name);
  studentRegistry[students.id] = students;
  res.status(200).json(students);
});

router.put('/students/:id', (req, res) => {
  if(!req.params.id){
    return appError.error404('404 not found!!!').respond(res);
  }
  var students = new studentConstructor(req.body.name);
  studentRegistry[req.params.id] = students;
  res.status(200).json(students);
});

module.exports = router;
