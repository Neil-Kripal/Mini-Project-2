import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem({ task, checked, description, handleToggle, handleDelete }) {
  const labelId = `transfer-list-item-${task.id}-label`;

  const getBannerColor = (category) => {
    if (category === 'Completed') {
      return 'green';  
    } else if (category === 'Pending') {
      return 'orange'; 
    } else if (category === 'Action') {
      return 'blue'; 
    }
    return 'default'; 
  };

  const bannerColor = getBannerColor(task.category);

  const dotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: bannerColor,
    display: 'inline-block',
    marginRight: '8px',
  };

  return (
    <ListItem key={task.id} role="listitem" button onClick={() => handleToggle(task.id)}>
      <ListItemIcon>
        <Checkbox
          checked={checked.includes(task.id)}
          tabIndex={-1}
          disableRipple
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </ListItemIcon>
      <ListItemText
        id={labelId}
        primary={
          <div>
            <span style={dotStyle} />
            {task.title}
          </div>
        }
        secondary={description}
      />
      {checked.includes(task.id) && (
        <ListItemIcon sx={{ minWidth: 'unset', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleDelete}
            sx={{
              padding: '4px',
              borderRadius: '50%',
              minWidth: 'unset',
            }}
          >
            <DeleteIcon sx={{ fontSize: 'small' }} />
          </Button>
        </ListItemIcon>
      )}
    </ListItem>
  );
}
