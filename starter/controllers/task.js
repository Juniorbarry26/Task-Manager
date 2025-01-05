const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: 'Error while fetching tasks ', error});
  }

}

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if(!task) {
      return res.status(404).json({msg: 'Task not found'})
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: 'Error while fetching task ', error});
  }
}

const createTask = async (req, res) => {

  // try {
  //   const task = await Task.create(req.body)
  //   res.status(201).json({task})
  // }catch(err) {
  //   return res.status(500).json({error: err.message})
  // }
  
  try {
    const task  = new Task(req.body);
    const newTask = task.save();
    res.status(201).json(newTask);  
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
}

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!task) {
      return res.status(404).json({msg: 'Task not found'})
    }
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: 'Error while updating task ', error});
  }
}

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) {
      return res.status(404).json({msg: 'Task not found'})
    }
    res.status(200).json({msg: 'Task deleted'})
  } catch (error) {
    res.status(500).json({ msg: 'Error while deleting task ', error});
  }
 
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}