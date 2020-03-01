import React from 'react';

function AddTasks(props) {
  return (
    <div>
      <button onClick={() => props.addTask(props.userID)}>Click me!</button>
    </div>
  )
}

export default AddTasks;
