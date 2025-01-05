const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [
      true,
      'The task name is required.'
    ],
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  completed:{
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema);