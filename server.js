const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config('.env');

const { DB_URL, PORT } = process.env;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => {
    console.log('error', err);
  });

app.listen(PORT, () => {
  console.log('Server is Listen....');
});
