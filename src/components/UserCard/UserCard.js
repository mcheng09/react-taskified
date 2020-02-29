import React from 'react';

import classes from './UserCard.module.scss';
import TasksList from './../TasksList/TasksList';

function UserCard (props) {

  return (
    <div className={ classes.UserCard } >
      <div
        className= {classes.UserName }
        style={{ backgroundColor: props.userData.primaryColor }} >
        { props.userData.name }
      </div>
      
      <TasksList tasks={ props.userData.tasks } />
    </div>
  )
}

export default UserCard;
