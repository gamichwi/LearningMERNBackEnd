const express = require('express');

const HttpError = require('../models/http-error')

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Scary castle',
        description: 'sah scary',
        location: {
            lat: -37.8060085,
            lng: 145.0614546
        },
        address: 'Burg Frankenstein, 64367 Mühltal, Germany',
        creator: 'u1'
    }
]

router.get('/:pid', (req, res, next)=> {
    const placeId = req.params.pid // {pid:'p1'}
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    })

    if (!place) {
        return next(
            new HttpError('Could not find a place for the provided id.', 404)
        );
    }
    res.json({ place }); // => {place:place}
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    })
    if (!place) {
        return next(
            new HttpError('Could not find a place for the provided user id.', 404)
        );
    }
    res.json({ place })
})

module.exports = router;