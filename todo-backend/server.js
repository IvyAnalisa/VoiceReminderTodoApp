const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = [];
let nextId = 1; // To simulate auto-incrementing IDs

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { task, reminderTime } = req.body;
    const newTask = {
        _id: nextId++, // Unique ID for the task
        task,
        reminderTime,
        done: false // New tasks are initially not done
    };
    tasks.push(newTask);
    console.log(tasks); // Log tasks to see current tasks
    res.status(201).json(newTask);
});

// Mark a task as done
app.put('/tasks/:id/done', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t._id === taskId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    task.done = !task.done; // Toggle done status
    res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t._id !== taskId);
    res.status(204).send(); // No content to send back
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


