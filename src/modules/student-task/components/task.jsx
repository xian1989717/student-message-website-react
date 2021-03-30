import React from 'react'

import { Button, Table, } from 'antd'

import AddTask from './dialog/add-task'
import Drawers from './drawer'

const columns = [
  {
    title: '序号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
    render: text => <a>{text}</a>,
  },
  {
    title: '班级',
    dataIndex: 'class',
    key: 'class',
    render: text => <a>{text}</a>,
  },
  {
    title: '学科',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  }
]

const data = [
  {
    key: '1',
    orderNumber: '1',
    class: '三班',
    subject: '语文',
    date: new Date().toDateString()
  },
  {
    key: '2',
    orderNumber: '2',
    class: '四班',
    subject: '数学',
    date: new Date().toDateString()
  },
  {
    key: '3',
    orderNumber: '3',
    class: '五班',
    subject: '数学',
    date: new Date().toDateString()
  },
  {
    key: '4',
    orderNumber: '4',
    class: '二班',
    subject: '语文',
    date: new Date().toDateString()
  },
  {
    key: '5',
    orderNumber: '5',
    class: '一班',
    subject: '英语',
    date: new Date().toDateString()
  }
]

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      drawerVisible: false
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

  onRowSelect = (record, index) => {
    return {
      onClick: (e) => {
        this.setState({
          drawerVisible: true
        })
      }
    }
  }

  cancelDrawer = () => {
    this.setState({
      drawerVisible: false
    })
  }

  render () {
    return (
      <div
        style={{ padding: '8px' }}
      >
        <div
          style={{ marginBottom: '8px' }}>
          <Button
            type="primary"
            onClick={this.addTask}>
            新增作业
          </Button>
        </div>
        <Table
          scroll={{ y: 'calc(100vh - 320px)' }}
          columns={columns}
          dataSource={data}
          onRow={this.onRowSelect} />
        <Drawers
          visible={this.state.drawerVisible}
          cancel={this.cancelDrawer} />
        <AddTask
          visible={this.state.visible}
          cancel={this.cancelAddTask} />
      </div>
    )
  }
}

export default Task