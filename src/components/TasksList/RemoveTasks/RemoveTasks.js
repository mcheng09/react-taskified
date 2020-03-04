import React from 'react';

import classes from './RemoveTasks.module.scss'

function RemoveTasks(props) {
  return (
    <div className={classes.RemoveTasks} onClick={() => props.removeTask(props.userID, props.taskIndex)}>X</div>
  )
}

export default RemoveTasks;
