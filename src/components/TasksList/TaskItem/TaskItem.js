import React from 'react';

import classes from './TaskItem.module.scss'

function TaskItem (props) {
  return <li className={classes.TaskItem}>{props.task}</li>
}

export default TaskItem;
