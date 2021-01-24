import React from 'react'

import { Button } from 'antd'

class Task extends React.Component {

  addTask = () => {

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
      </div>
    )
  }
}

export default Task