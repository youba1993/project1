const Workout = require('../models/workoutModel')

// get all workout
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
}

//get a single workout
const getSingle = async (req, res) => {
    const {id} = req.params;
    const workout = await Workout.findById(id);
    if (!workout){
        return res.status(404).json({error: "No such workout"})
    }
    
    res.status(200).json(workout)
}

//create a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    //add doc to db
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({ error: error.message })
        return;
    }
}

//delete a workout 



//update a workout 


module.exports = {
    createWorkout,
    getWorkouts,
    getSingle
}