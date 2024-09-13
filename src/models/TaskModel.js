// Uma página inicial de apresentação
// Uma página exibindo todas as listas de tarefas
// Criação de novas listas de tarefas (cada lista agrupa suas próprias tarefas)
// Uma página para exibir as tarefas de uma lista específica
// Uma forma de adicionar uma nova tarefa a uma lista
// Formas de marcar como concluída e excluir uma tarefa (botão, checkbox, etc)

// database = [ taskList[] ]
// taskList = { id, name, tasks=[] }
// task = { id, content, done=Bool }

const Database = []

class Task {
  constructor(content) {
    this.id = new Date().getTime().toString()
    this.content = content
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

  addTask(content) {
    this.tasks.push(new Task(content))
  }
}

class TaskModel {
  getAlltasks() {
    return Database
  }

  getTaskById(id) {
    return Database.find(taskList => taskList.id === id)
  }

  createList(name){
   Database.push(new TaskList(name))
  }

  deleteList(id){
    Database.filter(taskList => taskList.id !== id)
  }
}

module.exports = TaskModel