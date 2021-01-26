import React from 'react'

import { Button } from 'antd'

import AddTask from './dialog/add-task'
class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  addTask = () => {
    this.setState({
      visible: true
    })
  }

  cancelAddTask = () => {
    this.setState({
      visible: false
    })
  }
  render () {
    return (
      <div
        style={{ padding: '16px' }}
      >
        <div>
          <Button
            type="primary"
            onClick={this.addTask}>
            新增作业
          </Button>
        </div>
        <AddTask
          visible={this.state.visible}
          cancel={this.cancelAddTask} />
      </div>
    )
  }
}

export default Task