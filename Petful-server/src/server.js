const express = require('express');
const cors = require('cors');
const {NODE_ENV} = require('./config');

const app = express();
app.use(cors());
app.use(express.json());


const serializeCat = cat => ({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

// const serializeDog = dog => ({
//   imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
//   imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
//   name: 'Zeus',
//   sex: 'Male',
//   age: 3,
//   breed: 'Golden Retriever',
//   story: 'Owner Passed away'
// });

app
  .get('/api/cat', (req, res, next) => {
    res.json(serializeCat);
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