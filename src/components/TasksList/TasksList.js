import React from 'react';

import TaskItem from './TaskItem/TaskItem';

function TasksList (props) {

  const tasks = props.tasks.map((task, i) => {
    return <TaskItem key={ 'task' + i } task={ task }/>
  })

  return (
    <div className='tasks-list'>
      {tasks}
    </div>
  )
}

export default TasksList;
