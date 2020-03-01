import React from 'react';

import classes from './UserCard.module.scss';
import TasksList from './../TasksList/TasksList';
import AddTasks from './../TasksList/AddTasks/AddTasks';

function UserCard (props) {

  return (
    <div className={ classes.UserCard } >
      <div
        className= {classes.UserName }
        style={{ backgroundColor: props.userData.primaryColor }} >
        { props.userData.name }
      </div>

      <TasksList tasks={ props.userData.tasks } removeTask={props.removeTask} userID={props.userData.id} />
      <AddTasks addTask={props.addTask} userID={props.userData.id} />
    </div>
  )
}

export default UserCard;
