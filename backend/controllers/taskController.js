const Task = require("../models/Task");

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = async (req, res) => {
  const { title, description, category, priority, dueDate } = req.body;

  const task = new Task({
    user: req.user._id,
    title,
    description,
    category,
    priority,
    dueDate,
  });

  const createdTask = await task.save();

  res.status(201).json(createdTask);
};

// @desc    Get task by filter
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
  const { category, startDate, endDate, priority, status } = req.query;

  // Build query object
  const query = {};

  if (category) {
    query.category = category;
  }

  if (startDate || endDate) {
    query.dueDate = {};
    if (startDate) {
      query.dueDate.$gte = new Date(startDate);
    }
    if (endDate) {
      query.dueDate.$lte = new Date(endDate);
    }
  }

  if (priority) {
    query.priority = priority;
  }

  if (status) {
    query.status = status;
  }

  const tasks = await Task.find(query);

  res.json(tasks);
};

// @desc    Get a task by ID
// @route   GET /api/tasks/:id
// @access  Private
const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    res.json(task);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
};

// @desc    Mark a task as complete
// @route   PUT /api/tasks/:id/complete
// @access  Private
const markTaskComplete = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    task.status = "complete";
    await task.save();
    res.json({ message: "Task marked as complete", task });
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
};

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
  const { title, description, category, priority, status, dueDate } = req.body;

  const task = await Task.findById(req.params.id);

  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.category = category || task.category;
    task.priority = priority || task.priority;
    task.status = status || task.status;
    task.dueDate = dueDate || task.dueDate;

    const updatedTask = await task.save();

    res.json(updatedTask);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await Task.deleteOne({ _id: req.params.id });
    res.json({ message: "Task removed" });
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  markTaskComplete,
  updateTask,
  deleteTask,
};
