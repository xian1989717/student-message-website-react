import React from 'react'
import {
  Link,
  useRouteMatch
} from "react-router-dom"

import { Table, Space } from 'antd'
import { connect } from 'react-redux'

import { activeStudentAction } from '../../../store/actionCreator'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    render: (text, record) => (
      <Space size="middle">
        <ToDetail
          name={record.name}
          student={record} />
      </Space>
    ),
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 80,
  },
  {
    title: '学号',
    dataIndex: 'studentNumber',
    key: 'studentNumber',
    width: 80,
  },
  {
    title: '出生日期',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
    width: 150,
  },
  {
    title: '民族',
    dataIndex: 'nation',
    key: 'nation',
    width: 100,
  },
  {
    title: '籍贯',
    dataIndex: 'nativePlace',
    key: 'nativePlace',
    width: 150,
  },
  {
    title: '户籍地址',
    dataIndex: 'permanentAddress',
    key: 'permanentAddress',
    width: 300,
  },
  {
    title: '居住地址',
    dataIndex: 'liveAdress',
    key: 'liveAdress',
    width: 300,
  },
  {
    title: '紧急联络人',
    dataIndex: 'sosPerson',
    key: 'sosPerson',
    width: 150,
  },
  {
    title: '紧急联络人电话',
    dataIndex: 'sosPersonPhone',
    key: 'sosPersonPhone',
    width: 200,
  }
]

function ToDetail (props) {
  let { url } = useRouteMatch()

  return (
    <Link
      to={`${url}/detail`}>
      {props.name}
    </Link>
  )
}
const mapState = state => {
  return {
    list: state.list
  }
}
const mapDispatch = dispatch => {
  return {
    activeStudent (student) {
      dispatch(activeStudentAction(student))
    }
  }
}
@connect(mapState, mapDispatch)
class List extends React.Component {

  onRowSelect = (record, index) => {
    return {
      onClick: (e) => {
        this.props.activeStudent(record)
      }
    }
  }

  render () {
    return (
      <Table
        bordered
        scroll={{ x: '100vw' }}
        style={{ padding: '0px 24px' }}
        columns={columns}
        dataSource={this.props.list}
        onRow={this.onRowSelect} />
    )
  }
}

export default List