import React from 'react';

import classes from './TaskItem.module.scss'
import RemoveTasks from './../RemoveTasks/RemoveTasks';
import ShiftTasks from './../ShiftTasks/ShiftTasks';

function TaskItem (props) {
  return (
    <li className={classes.TaskItem}>
      <div className={classes.Task}>{props.task}</div>
      <ShiftTasks shiftTask={props.shiftTask} userID= {props.userID} taskIndex={props.taskIndex} numOfUsers={props.numOfUsers} />
      <RemoveTasks removeTask={props.removeTask} userID={props.userID} taskIndex={props.taskIndex} />
    </li>
  )
}

export default TaskItem;
