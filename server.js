'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./api/app');
const config = require('./config/config');

const app = express();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/pdp/api/', appRouter);

app.listen(PORT, () => {
  logger.info(`listening on port ${PORT}..`)
});