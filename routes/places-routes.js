const express = require('express');

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
    res.json({ place }); // => {place:place}
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    })
    res.json({ place })
})

module.exports = router;