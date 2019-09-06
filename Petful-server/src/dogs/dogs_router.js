const express = require('express');
const dogQueue = require('./dogs_queue');

const dogsRouter = express.Router();

dogsRouter
  .route('/')
  .get((req, res, next) => {
    let dog = dogQueue.first.value;
    res.json(dog);
  });

module.exports = dogsRouter;