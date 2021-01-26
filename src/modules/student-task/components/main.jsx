import React from 'react'

import { PageHeader } from 'antd'

import List from './list'
import Task from './task'

class Main extends React.Component {
  render () {
    return (
      <>
        <PageHeader
          title="学校作业" />
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
            <Task></Task>
          </div>
        </div>
      </>
    )
  }
}

export {
  Main
} 