import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import TaskItem from './Items';

export default function TaskCategory({ category, tasks, checked, handleToggle, handleDelete }) {
  const tasksByCategory = tasks.filter((task) => task.category === category);

  return (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        title={category}
        subheader={`${checked.filter((id) => tasks.find((task) => task.id === id && task.category === category)).length}/${tasksByCategory.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {tasksByCategory.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            description={task.description}
            checked={checked}
            handleToggle={handleToggle}
            handleDelete={handleDelete} 
          />
        ))}
      </List>
    </Card>
  );
}
