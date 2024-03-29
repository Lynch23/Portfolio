const router = require('express').Router();
let User = require('../models/users')

router.get('/', (req, res) => {
    User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.post('/add', (req, res) => {
    console.log(req.body);
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
}); //need to pay attention here

module.exports = router;