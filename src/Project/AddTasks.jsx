import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const categories = ['Pending', 'Action', 'Completed'];

export default function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskCategory, setTaskCategory] = useState('Pending');

  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      category: taskCategory,
    };

    addTask(newTask);
    setTaskTitle('');
    setTaskDescription('');
    setTaskCategory('Pending');
  };

  return (
    <form onSubmit={handleAddTask}>
      <TextField
        label="Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
        fullWidth
        multiline
        rows={4}
      />
      <TextField
      label="Category"
        select 
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
        required
        fullWidth
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" >
        Add Task
      </Button>
    </form>
  );
}