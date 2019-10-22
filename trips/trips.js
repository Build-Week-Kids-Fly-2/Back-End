// Imports needed - express.Router() + trips model

const router = require('express').Router();

const Trips = require('./trips.model.js');

router.get('/', (req, res) => {
    Trips.find()
        .then(trips => {
            res.status(200).json(trips)
        })
        .catch(err => {
            res.status(500).json({ message: "There was an issue retrieving the list of trips." })
        })
});

module.exports = router;