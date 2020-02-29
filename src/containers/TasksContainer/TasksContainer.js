import React, { Component } from 'react';

import classes from './TasksContainer.module.scss'
import UserCard from './../../components/UserCard/UserCard'

class TasksContainer extends Component {
  state = {
    users: [
      {
        id: 0,
        name: 'Mike',
        tasks: [
          'Build this App',
          'Add styling to application',
          'Build out functionalities'
        ],
        primaryColor: 'lightblue'
      },
      {
        id: 1,
        name: 'Random Guy',
        tasks: [
          'Buy some eggs',
          'Do laundry',
          'Take out the trash'
        ],
        primaryColor: 'orange'
      }
    ]
  }


  render () {
    const userCards = this.state.users.map(user => {
      return <UserCard key={'user' + user.id} userData={user} />
    })

    return (
      <div className={classes.TasksContainer}>
        { userCards }
      </div>
    )
  }
}

export default TasksContainer;
