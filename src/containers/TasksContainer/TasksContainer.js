import React, { Component } from 'react';

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
        ]
      },
      {
        id: 1,
        name: 'Some other random person',
        tasks: [
          'Buy some eggs',
          'Do laundry',
          'Take out the trash'
        ]
      }
    ]
  }


  render () {
    const userCards = this.state.users.map(user => {
      return <UserCard key={'user' + user.id} userData={user} />
    })

    return (
      <div className='tasks-container'>
        { userCards }
      </div>
    )
  }
}

export default TasksContainer;
