const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    priority: {
      type: String,
      required: true,
      enum: ['low', 'medium', 'high'] 
    },
    dueDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['incomplete', 'complete'],
      default: 'incomplete'  // Set default value for status
    },
    category: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
