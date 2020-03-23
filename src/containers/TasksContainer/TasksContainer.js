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
      },
      {
        id: 2,
        name: 'Jeff',
        tasks: [
          'Lolz!'
        ],
        primaryColor: 'lightyellow'
      }
    ],
    userIDCount: 3
  }

  addUser = () => {
    let newUser = prompt("Who's joining us?");
    const allUsers = [...this.state.users];
    let userIDCount = this.state.userIDCount;
    allUsers.push({
      id: userIDCount,
      name: newUser,
      tasks: []
    })
    userIDCount++;

    this.setState({ users: allUsers });
    this.setState({ userIDCount: userIDCount })
  }

  addTask = (userID) => {
    let task = prompt("What's your task?");
    if (task === '') return null;
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
    userTasks.splice(taskIndex, 1)

    this.setState({ users: allUsers});
  }

  shiftTask = (userID, taskIndex, direction) => {
    const allUsers = [...this.state.users];
    const origAssignee = allUsers.filter((user) => {
      return user.id === userID;
    })
    const origAssigneeTasks = origAssignee[0].tasks;
    const copyTask = origAssigneeTasks.splice(taskIndex, 1);
    direction === 'left' ? userID-- : userID++;
    const newAssignee = allUsers.filter((user) => {
      return user.id === userID;
    })
    newAssignee[0].tasks.push(copyTask);


    this.setState({ users: allUsers });
  }

  render () {
    const userCards = this.state.users.map(user => {
      return <UserCard
        key={'user' + user.id}
        userData={user}
        numOfUsers={this.state.users.length}
        addTask={this.addTask}
        removeTask={this.removeTask}
        shiftTask={this.shiftTask} />
    })

    return (
      <div className={classes.TasksContainer}>
        { userCards }
        <button onClick={this.addUser}>Add User</button>
      </div>
    )
  }
}

export default TasksContainer;
