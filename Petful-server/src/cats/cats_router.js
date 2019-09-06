const express = require('express');
const catQueue = require('./cats_queue');

const catsRouter = express.Router();

catsRouter
  .route('/')
  .get((req, res, next) => {
    let cat = catQueue.first ? catQueue.first.value : null;
    if (cat !== null) {
      return res.status(200).json(cat);
    } else {
      return res.status(404).send('No more cats in queue');
    }
  })
  .delete((req, res, next) => {
    catQueue.dequeue();
    res.status(204).end();
  });

module.exports = catsRouter;