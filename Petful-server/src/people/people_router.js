const express = require('express');
const peopleQueue = require('./people_queue');
const peopleServices = require('./people_services');

const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res, next) => {
    let people = peopleQueue.first ? 
      peopleServices.prepareData(peopleQueue)
      : null;
    if (people !== null) {
      return res.status(200).json(people);
    } else {
      return res.status(404).send('No more people in queue');
    }
  })
  .delete((req, res, next) => {
    peopleQueue.dequeue();
    res.status(204).end();
  });

module.exports = peopleRouter;