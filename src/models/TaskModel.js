// Uma página inicial de apresentação
// Uma página exibindo todas as listas de tarefas
// Criação de novas listas de tarefas (cada lista agrupa suas próprias tarefas)
// Uma página para exibir as tarefas de uma lista específica
// Uma forma de adicionar uma nova tarefa a uma lista
// Formas de marcar como concluída e excluir uma tarefa (botão, checkbox, etc)

let Database = require("../database/Database")

// database = [ taskList[] ]
// taskList = { id, name, tasks=[] }
// task = { id, description, done=Bool }

class Task {
  constructor(description) {
    this.id = new Date().getTime().toString()
    this.description = description
    this.done = false
  }

  complete() {
    this.done = true
  }
}

class TaskList {
  constructor(name) {
    this.id = new Date().getTime().toString()
    this.name = name
    this.tasks = []
  }

  getTaskById(id) {
    const index = this.tasks.findIndex(task => task.id === id)
    return this.tasks[index]
  }

  addTask(description) {
    this.tasks.push(new Task(description))
  }
}

class TaskModel {
  getAlltaskLists() {
    return Database.storage
  }

  getTaskListById(id) {
    const index = Database.storage.findIndex(taskList => taskList.id === id)
    return Database.storage[index]
  }

  createList(name){
   Database.storage.push(new TaskList(name))
  }

  deleteList(id){
    Database.storage = Database.storage.filter(taskList => taskList.id !== id)
  }
}

module.exports = TaskModel