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
    class: 'John Brown',
    subject: 32,
    date: new Date()
  },
  {
    key: '2',
    orderNumber: '2',
    class: 'Jim Green',
    subject: 42,
    date: new Date()
  },
  {
    key: '3',
    orderNumber: '3',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '4',
    orderNumber: '4',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '5',
    orderNumber: '5',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '6',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '7',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '8',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '9',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '10',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '11',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
  },
  {
    key: '12',
    class: 'Joe Black',
    subject: 32,
    date: new Date()
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