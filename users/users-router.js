const router = require('express').Router();

const Users = require('./users.model.js');

// Import Restricted MW

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
        // .then(users => {
        //     if(users) {
        //         users.map(u => {
        //             const { id, email } = u;
        //             res.status(200).json({ id, email })
        //         })
        //     } else {
        //         res.status(401).json({ message: "You shall not pass." })
        //     }
        // })
        .catch(err => {
            res.status(500).json({ message: "there was an issue with that request.", err })
        })
});

module.exports = router;
