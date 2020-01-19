const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes')
const httpError = require('./models/http-error')

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes); // => /api/places/...

app.use((req, res, next) => {
    return new httpError('Could not find this route', 404);
}); //Only reached if we have a request that hasn't had a response before

//error handling middleware
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occured!'});
})

app.listen(5000);
