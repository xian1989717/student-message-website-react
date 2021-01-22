import React from 'react'

import { PageHeader, Button } from 'antd'

import List from './list'
import AddStudent from './dialog/addStudent'

export default class Main extends React.Component {
  state = {
    visible: false
  }

  handleAddClick = () => {
    this.setState({
      visible: true
    })
  }
  addStudentCancel = (visible) => {
    this.setState({
      visible
    })
  }

  render () {
    return (
      <div>
        <PageHeader
          title="学生信息"
          extra={[
            <Button key="import">
              导入
              </Button>,
            <Button
              key="add"
              type="primary"
              onClick={this.handleAddClick}>
              新增
            </Button>,
          ]} />
        <List />
        <AddStudent
          visible={this.state.visible}
          cancel={this.addStudentCancel} />
      </div>
    )
  }
}