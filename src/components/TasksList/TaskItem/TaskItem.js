import React from 'react';

import classes from './TaskItem.module.scss'
import RemoveTasks from './../RemoveTasks/RemoveTasks';

function TaskItem (props) {
  return (
    <li className={classes.TaskItem}>
      <div>{props.task}</div>
      <RemoveTasks removeTask={props.removeTask} userID={props.userID} taskIndex={props.taskIndex} />
    </li>
  )
}

export default TaskItem;
