import React from 'react';

import TasksList from './../TasksList/TasksList';

function UserCard (props) {
  
  return (
    <div className='UserCard'>
      <h2>{ props.userData.name }</h2>
      <TasksList tasks={props.userData.tasks} />
    </div>
  )
}

export default UserCard;
