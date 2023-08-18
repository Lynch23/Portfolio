const router = require('express').Router();
let Exercise = require('../models/exercises');

router.get('/', (req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Exercise.findByIdAndDelete(id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    const exercise = await Exercise.findByIdAndUpdate(id, { ...req.body });
    res.json(exercise);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Exercise.findById(id)
        .then(exercise => {
            res.json(exercise);
        })
        .catch(err => res.status(400).json('Error : ' + err));
})

module.exports = router;