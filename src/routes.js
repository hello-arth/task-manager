const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()

router.get('/', tasksController.index)
router.get('/app', tasksController.app)
router.get('/app/new-list', tasksController.newList)
router.get('/app/:id', tasksController.taskList)

router.post('/app/new-list/register', tasksController.createTaskList)
router.post('/app/delete/:id', tasksController.deleteTaskList)
router.post('/app/:id/createTask', tasksController.createTask)
router.post('/app/:id/completeTask', tasksController.completeTask)

module.exports = router