import React from 'react';

import classes from './RemoveTasks.module.scss'

function RemoveTasks(props) {
  return (
    <span className={classes.RemoveTasks} onClick={() => props.removeTask(props.userID, props.taskIndex)}>X</span>
  )
}

export default RemoveTasks;
