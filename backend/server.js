require('dotenv').config()
const express = require('express');

//express app created
const app = express()

//routes
app.get("/", (req,res)=>{
    res.json({msg: 'welcome to the app'})
})

app.get("/hello", (req,res)=>{
    res.json({msg: 'Hello world'})
})

//listen for requests on port 4000
app.listen(process.env.PORT, ()=>{
    console.log("listening on PORT");
});

