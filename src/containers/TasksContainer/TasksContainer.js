import React, { Component } from 'react';

import classes from './TasksContainer.module.scss';
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
        name: 'Some other random person',
        tasks: [
          'Buy some eggs',
          'Do laundry',
          'Take out the trash'
        ],
        primaryColor: 'lightgreen'
      }
    ]
  }

  addTask = (userID) => {
    let task = prompt("What's your task?");
    const allUsers = [...this.state.users];
    const user = allUsers.filter((user) => {
      return user.id === userID
    })
    user[0].tasks.push(task);
    this.setState({ users: allUsers });
  }

  removeTask = (userID, taskIndex) => {
    const allUsers = [...this.state.users];
    const user = allUsers.filter((user) => {
      return user.id === userID
    })
    const userTasks = user[0].tasks;
    console.log(taskIndex);
    console.log(userTasks[taskIndex]);
    userTasks.splice(taskIndex, 1)

    this.setState({ users: allUsers});
  }

  render () {
    const userCards = this.state.users.map(user => {
      return <UserCard key={'user' + user.id} userData={user} addTask={this.addTask} removeTask={this.removeTask} />
    })

    return (
      <div className={classes.TasksContainer}>
        { userCards }
      </div>
    )
  }
}

export default TasksContainer;
