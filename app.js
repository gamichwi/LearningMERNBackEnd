const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes')

const app = express();

app.listen(5000);