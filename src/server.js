const express = require('express');
const cors = require('cors');
const {NODE_ENV, CLIENT_ORIGIN} = require('./config');
const morgan = require('morgan');
const helmet = require('helmet');
const dogsRouter = require('./dogs/dogs_router');
const catsRouter = require('./cats/cats_router');
const peopleRouter = require('./people/people_router');

const morganOption = (NODE_ENV === 'production')
  ? 'common'
  : 'dev';

const app = express();
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors({
  origin: CLIENT_ORIGIN
}));
app.use(express.json());

app.use('/api/dog', dogsRouter);
app.use('/api/cat', catsRouter);
app.use('/api/users', peopleRouter);

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