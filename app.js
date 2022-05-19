const express = require('express');

const app = express();
const morgan = require('morgan');

const ToursRouter = require('./routes/toursRouter');
const UsersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/v1/auth');

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/tours', ToursRouter);
app.use('/api/v1/users', UsersRouter);
app.use('/api/v1', authRouter);

// handle Previous URL (/api/v1/tours,/api/v1/users)  middleware
app.all('*', (req, res) => {
  res.json({
    status: 'Failure',
    message: 'wrong url',
  });
});

// global error Handler
app.use((err, req, res, next) => {
  console.log('global error handler');
  res.json(JSON.parse(err));
});

module.exports = app;
