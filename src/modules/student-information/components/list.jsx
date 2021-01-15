import React from 'react'

import { Table, Space } from 'antd'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
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
    dataIndex: '',
    key: '',
    width: 150,
  },
  {
    title: '籍贯',
    dataIndex: '',
    key: '',
    width: 150,
  },
  {
    title: '户籍地址',
    dataIndex: '',
    key: '',
    width: 300,
  },
  {
    title: '居住地址',
    dataIndex: '',
    key: '',
    width: 300,
  },
  {
    title: '紧急联络人',
    dataIndex: '',
    key: '',
    width: 150,
  },
  {
    title: '紧急联络人电话',
    dataIndex: '',
    key: '',
    width: 200,
  },
  {
    title: 'Action',
    key: 'action',
    width: 150,
    render: (text, record) => (
      <Space size="middle">
        <a href="">查看详情</a>
        <a href="">编辑</a>
      </Space>
    ),
  },
]

const data = [
  {
    key: '1',
    name: '朱雨辰',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '朱雨辰',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: '朱雨辰',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

export default class List extends React.Component {
  render () {
    return (
      <Table
        bordered
        scroll={{ x: '100vw' }}
        style={{ padding: '0px 24px' }}
        columns={columns}
        dataSource={data} />
    )
  }
}