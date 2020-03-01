import React from 'react';

import classes from './AddTasks.module.scss'

function AddTasks(props) {
  return (
    <div className={classes.AddTasks} onClick={() => props.addTask(props.userID)}>
    <span>+</span>
    <span>Add a task!</span>
    </div>
  )
}

export default AddTasks;
