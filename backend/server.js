require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts')

//express app created
const app = express()

//middleware
// access the req data
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//listen for requests on port 4000
app.listen(process.env.PORT, ()=>{
    console.log("listening on PORT");
});

