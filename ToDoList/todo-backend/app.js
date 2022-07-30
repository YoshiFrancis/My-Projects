const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const taskRouter = require('./controllers/tasks')
const mongoose = require('mongoose')

console.log("Attempmting to connect to ", config.MONGODB_URI)

try {
    mongoose.connect(config.MONGODB_URI)
} catch(error) {
    console.log("Was not able to connect to ", config.MONGODB_URI)
}

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/tasks', taskRouter)

module.exports = app