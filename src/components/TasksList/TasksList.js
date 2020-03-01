import React from 'react';

import classes from './TasksList.module.scss'
import TaskItem from './TaskItem/TaskItem';

function TasksList (props) {

  const tasks = props.tasks.map((task, i) => {
    return <TaskItem key={ 'task' + i } task={ task } taskIndex={ i } removeTask={props.removeTask} userID={props.userID}/>
  })

  return (
    <ul className={classes.TasksList}>
      {tasks}
    </ul>
  )
}

export default TasksList;
