import React, { Component } from 'react';

import Aux from './../Aux/Aux';
import TasksContainer from './../../containers/TasksContainer/TasksContainer';

class Layout extends Component {
  render () {
    return (
      <Aux>
        <TasksContainer />
      </Aux>
    )
  }
}

export default Layout;
