require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//express app created
const app = express()

//middleware
// access the req data
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listen for requests on port 4000
        app.listen(process.env.PORT, () => {
            console.log("Connected to db & listening on PORT");
        });

    })
    .catch((error) => {
        console.log(error)
    })


