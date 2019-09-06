const express = require('express');
const cors = require('cors');
const {NODE_ENV} = require('./config');
const cats = require('./pets/cats.json');
const dogs = require('./pets/dogs.json');

const app = express();
app.use(cors());
app.use(express.json());

app
  .get('/api/cat', (req, res, next) => {
    res.json(cats);
  });

app
  .get('/api/dog', (req, res, next) => {
    res.json(dogs);
  });

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  let response;
  if(NODE_ENV === 'production') {
    response = {error: {message: 'server error'}};
  }
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(8080,()=>{
  console.log('Serving on 8080');
});