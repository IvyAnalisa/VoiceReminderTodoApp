import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [reminderTime, setReminderTime] = useState('');

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const saveTasksToLocalStorage = (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const addTask = async () => {
        if (!task || !reminderTime) return;

        const newTask = { 
            id: Date.now(), // Generate a unique ID based on current timestamp
            task, 
            reminderTime, 
            done: false // New tasks are initially not done
        };
        
        // Here you can either store it in local storage or through an API call
        // Assuming you want to store in local storage directly
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
        
        // Optionally, you can also send it to your backend
         await axios.post('http://localhost:5000/tasks', newTask);
        
        setTask(''); // Clear input field
        setReminderTime(''); // Clear input field
        setVoiceReminder(reminderTime, task);
    };

    const markTaskAsDone = (id) => {
        const updatedTasks = tasks.map((t) => 
            t.id === id ? { ...t, done: !t.done } : t
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((t) => t.id !== id);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const setVoiceReminder = (time, task) => {
        const reminderTime = new Date(time).getTime() - new Date().getTime();
        if (reminderTime > 0) {
            setTimeout(() => {
                const utterance = new SpeechSynthesisUtterance(`Time to ${task}`);
                window.speechSynthesis.speak(utterance);
            }, reminderTime);
        }
    };

    return (
        <div>
            <h1>TODO App with Voice Reminder</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />
            <input
                type="datetime-local"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t) => (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.done}
                            onChange={() => markTaskAsDone(t.id)}
                        />
                        <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
                            {t.task} - Reminder: {new Date(t.reminderTime).toLocaleString()}
                        </span>
                        <button onClick={() => deleteTask(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
