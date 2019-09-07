const express = require('express');
const peopleQueue = require('./people_queue');
const peopleServices = require('./people_services');

const peopleRouter = express.Router();
const jsonBodyParser = express.json();

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
  .post(jsonBodyParser, (req, res, next) => {
    let { name } = req.body;
    peopleQueue.enqueue(name);
    res.status(201).end();
  })
  .delete((req, res, next) => {
    peopleQueue.dequeue();
    res.status(204).end();
  });

module.exports = peopleRouter;