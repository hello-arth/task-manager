const TaskModel = require("../models/TaskModel")

const TaskManager = new TaskModel()

const tasksController = {
  // GET /
  index: (req, res) => {
    res.render('index')
  },

  // GET /app
  app: (req, res) => {
    const allTaskLists = TaskManager.getAlltaskLists()
    res.render('app', { allTaskLists })
  },

  // GET /app/new-list
  newList: (req, res) => {
    res.render('newList')
  },

  taskList: (req, res) => {
    const id = req.params.id
    const taskList = TaskManager.getTaskListById(id)
    res.render('taskList', { taskList })
  },

  // POST /app/new-list/register
  createTaskList: (req, res) => {
    const { name } = req.body
    TaskManager.createList(name)

    res.redirect('/app')
  },

  // POST /app/:id/create
  deleteTaskList: (req, res) => {
    const id = req.params.id
    TaskManager.deleteList(id)
    res.redirect('/app')
  },

  createTask: (req, res) => {
    const taskListId = req.params.id
    const { description } = (req.body)
    const taskList = TaskManager.getTaskListById(taskListId)
    taskList.addTask(description)
    res.redirect(`/app/${taskListId}`)
  },

  completeTask: (req, res) => {
    const taskListId = req.params.id
    const { taskId } = req.body
    const taskList = TaskManager.getTaskListById(taskListId)
    const task = taskList.getTaskById(taskId)
    task.complete()
    res.redirect(`/app/${taskListId}`)
  }
}

module.exports = tasksController