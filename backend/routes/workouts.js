const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getSingle
} = require("../controllers/workoutController")

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts)

// GET a single workouts
router.get('/:id', getSingle)

// POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workout' })
})

//PATCH a workout (Update a workout)
router.patch('/:id', (req, res) => {
    res.json({ msg: 'PATCH a workout' })
})

module.exports = router