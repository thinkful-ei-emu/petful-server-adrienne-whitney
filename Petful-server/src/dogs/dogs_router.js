const express = require('express');
const dogQueue = require('./dogs_queue');

const dogsRouter = express.Router();

dogsRouter
  .route('/')
  .get((req, res, next) => {
    let dog = dogQueue.first ? dogQueue.first.value : null;
    if (dog !== null) {
      return res.status(200).json(dog);
    } else {
      return res.status(404).send('No more dogs in queue');
    }
  })
  .delete((req, res, next) => {
    dogQueue.dequeue();
    res.status(204).end();
  });

module.exports = dogsRouter;