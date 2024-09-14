const Database = require("../database/Database")

const TaskModel = require("../models/TaskModel")

const TaskManager = new TaskModel()

const tasksController = {
  // GET /
  index: (req, res) => {
    res.render('index')
  },

  // GET /app
  app: (req, res) => {
    const allTaskLists = Database.storage
    res.render('app', { allTaskLists })
  },

  // GET /app/new-list
  newList: (req, res) => {
    res.render('newList')
  },

  taskList: (req, res) => {
    const id = req.params.id
    const taskList = TaskManager.getTaskById(id)
    res.render('taskList', { taskList })
  },

  // POST /app/new-list/register
  createTaskList: (req, res) => {
    const { name } = req.body
    TaskManager.createList(name)

    res.redirect('/app')
  },

  deleteTaskList: (req, res) => {
    const id = req.params.id
    TaskManager.deleteList(id)
    res.redirect('/app')
  },
}

module.exports = tasksController