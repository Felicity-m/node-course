const getAllTasks = (req, res)=>{
  res.send("all items")

}

const createTasks = (req, res)=>{
  res.send("create task")

}

const getTask = (req, res)=>{
  res.send("get single task")

}

const updateTask = (req, res)=>{
  res.send("update task")

}

const deleteTask = (req, res)=>{
  res.send("Delete task")

}

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask


}