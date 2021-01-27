import React from 'react'

import { PageHeader } from 'antd'

import List from './list'
import Select from '../../common/select'
class Main extends React.Component {

  render () {
    return (
      <>
        <PageHeader
          title="学生成绩"
          extra={[
            <Select
              width={200}
              placeholder='请选择学级'
              list={[]}></Select>
          ]}
        />
        <div
          style={{
            display: 'flex',
            height: 'calc(100% - 72px)',
            padding: '0px 24px 16px 24px'
          }}>
          <div
            style={{
              flex: '0 0 300px',
              border: '1px solid #ccc'
            }}>
            <List></List>
          </div>
          <div
            style={{
              flexGrow: '1',
              borderTop: '1px solid #ccc',
              borderRight: '1px solid #ccc',
              borderBottom: '1px solid #ccc'
            }}>
            {/* <Task></Task> */}
          </div>
        </div>
      </>
    )
  }
}

export default Main