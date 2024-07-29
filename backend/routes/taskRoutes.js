const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  markTaskComplete,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createTask).get(protect, getTasks);
router
  .route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);
router.route("/:id/complete").put(protect, markTaskComplete);
module.exports = router;
