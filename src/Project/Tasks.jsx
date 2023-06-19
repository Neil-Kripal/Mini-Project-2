import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TaskCategory from './Categories';

import tasksData from './tasksData.json';

export default function Tasks() {
  const [checked, setChecked] = useState([]);
  const [taskList, setTaskList] = useState(tasksData);
  const [isSaved, setIsSaved] = useState(true);

  const LoadedData = useRef(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    } else {
      setTaskList(tasksData);
    }
  }, []);

  useEffect(() => {
    if (LoadedData.current) {
      setIsSaved(false);
    } else {
      LoadedData.current = true;
    }
  }, [taskList]);

  const saveData = () => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
    setIsSaved(true);
  };

  const revertToJSONData = () => {
    setTaskList(tasksData);
    setIsSaved(true);
  };

  const categories = ['Pending', 'Action', 'Completed'];

  const handleToggle = (taskId) => {
    setChecked((prevChecked) => {
      const currentIndex = prevChecked.indexOf(taskId);
      const newChecked = [...prevChecked];

      if (currentIndex === -1) {
        newChecked.push(taskId);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      return newChecked;
    });
  };

  const handleDeleteTasks = () => {
    const updatedTasks = taskList.filter((task) => !checked.includes(task.id));

    setTaskList(updatedTasks);
    setChecked([]);
  };

  const handleMoveTasks = (category) => {
    const updatedTasks = taskList.map((task) => {
      if (checked.includes(task.id)) {
        return { ...task, category };
      }
      return task;
    });

    setTaskList(updatedTasks);
    setChecked([]);
  };

  const handleAddTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <div>
      {isSaved ? (
        <Button variant="outlined" onClick={revertToJSONData}>
          Revert back to Data Base
        </Button>
      ) : (
        <Button variant="contained" onClick={saveData}>
          Save Data
        </Button>
      )}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {categories.map((category) => (
          <Grid item key={category}>
            <TaskCategory
              category={category}
              tasks={taskList}
              checked={checked}
              handleToggle={handleToggle}
              handleDelete={handleDeleteTasks}
            />
            <Grid container direction="column" alignItems="center">
              {checked.length > 0 && (
                <Button
                  variant="contained"
                  color="info"
                  onClick={() => handleMoveTasks(category)}
                >
                  Move to {category}
                </Button>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}