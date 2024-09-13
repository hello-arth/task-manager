const tasksController = {
  index: (req, res) => {
    res.render('index')
  },
  app: (req, res) => {
    const tasks = 
    res.render('app', tasks)
  }
}

module.exports = tasksController