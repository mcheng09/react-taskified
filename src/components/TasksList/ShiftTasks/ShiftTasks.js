import React from 'react';

import classes from './ShiftTasks.module.scss'

function ShiftTasks (props) {
  return (
    <div className={classes.ShiftTasks}>
      { props.userID === 0 ? null : <div onClick={() => props.shiftTask(props.userID, props.taskIndex, 'left')}>{'<'}</div> }
      { props.userID === props.numOfUsers - 1 ? null : <div onClick={() => props.shiftTask(props.userID, props.taskIndex, 'right')}>{'>'}</div> }
    </div>
  )
}

export default ShiftTasks;
