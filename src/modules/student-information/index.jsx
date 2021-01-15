import React from 'react'

import { PageHeader, Button } from 'antd'

import List from './components/list.jsx'
export default class StudentInformation extends React.Component {
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
              type="primary">
              新增
            </Button>,
          ]} />
        <List></List>
      </div>
    )
  }
}