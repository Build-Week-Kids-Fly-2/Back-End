const router = require('express').Router();

const Users = require('./users.model.js');

// Restricted MW

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            if(users) {
                users.map(u => {
                    const { id, username } = u;
                    res.status(200).json({ id, username })
                })
            } else {
                res.status(401).json({ message: "You shall not pass." })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "there was an issue with that request." })
        })
});

module.exports = router;
