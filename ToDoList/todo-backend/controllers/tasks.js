const taskRouter = require('express').Router()
const Task = require('../models/tasks')

taskRouter.get('/', async(request, response) => {
    let tasks = await Task.find({})
    response.json(tasks)
})

taskRouter.post('/', async (request, response) => {
    console.log(request.body)
    let task = new Task(request.body)
    const savedTask = await task.save()
    console.log(savedTask)
    response.status(201).json(savedTask)
})

taskRouter.delete('/:id', async (request, response) => {
    await Task.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

taskRouter.put('/:id', async (request, response) => {
    let content = request.body
    const task = {
        task: content.task,
        priority: content.priority
    }
    let newTask = await Task.findByIdAndUpdate(request.params.id, task, { new: true})
    response.status(201).json(newTask)
})

module.exports = taskRouter