import React from 'react'

import { Table } from 'antd'

const columns = [
  {
    title: '年级',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  }
]

const data = [
  {
    key: '1',
    name: '一年级'
  },
  {
    key: '2',
    name: '二年级'
  },
  {
    key: '3',
    name: '三年级'
  },
  {
    key: '4',
    name: '四年级'
  },
  {
    key: '5',
    name: '五年级'
  },
  {
    key: '6',
    name: '六年级'
  },
]

class List extends React.Component {
  render () {
    return (
      <div>
        <div
          style={{
            height: '40px',
            lineHeight: '40px',
            padding: '0px 0px 0px 8px',
            fontSize: '16px',
            marginBottom:'8px'
          }}>
          年级列表
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false} />
      </div>
    )
  }
}

export default List