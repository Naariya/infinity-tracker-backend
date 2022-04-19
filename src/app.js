const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');


const recordRouter = require('./routes/record');

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200, 
  })
);

app.use('/records', recordRouter);

const boot = async () => {
  // Connect to mongodb
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(4000, () => {
    console.log('Server is running');
  });
};

boot();
