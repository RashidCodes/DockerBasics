const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

let databaseConnection = "Waiting for Database response..."

// connecting to mongodb\
mongoose.connect('mongodb://mongodb:27017/api', { useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to db")
    databaseConnection = "Connected to database"
})
.catch(err => console.log("unable to connect to mongo: ", err))

router.get('/', (req, res, next) => {
    res.send(databaseConnection)
})

module.exports = router;