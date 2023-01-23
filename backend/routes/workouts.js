const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getSingle,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts)

// GET a single workouts
router.get('/:id', getSingle)

// POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//PATCH a workout (Update a workout)
router.patch('/:id', updateWorkout)

module.exports = router