const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    priority: {
        default: 5,
        type: Number
    }
})

taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Task', taskSchema)