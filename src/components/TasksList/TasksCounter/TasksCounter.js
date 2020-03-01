import React from 'react';

import classes from './TasksCounter.module.scss'

function TasksCounter (props) {
  return (
    <div className={classes.TasksCounter}>You have {props.count} tasks left!</div>
  )
}

export default TasksCounter;
