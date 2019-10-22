const router = require('express').Router();

const UserTrips = require('./user_trips.model.js');

router.get('/', (req, res) => {
    UserTrips.find()
        .then(trips => {
            res.status(200).json(trips)
        })
})

router.post('/user_trips', (req, res) => {

    let newTrip = req.body;

    UserTrips.add(newTrip)
        .then(t => {
            res.status(201).json(t)
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error adding that trip."
        })
        })
})


module.exports = router;
