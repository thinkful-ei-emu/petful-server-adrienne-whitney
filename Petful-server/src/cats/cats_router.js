const express = require('express');
const catQueue = require('./cats_queue');

const catsRouter = express.Router();

catsRouter
  .route('/')
  .get((req, res, next) => {
    let cat = catQueue.first.value;
    res.json(cat);
  });

module.exports = catsRouter;