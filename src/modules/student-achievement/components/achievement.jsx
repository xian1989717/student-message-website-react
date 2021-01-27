import React from 'react'

import { Space } from 'antd'

import Select from '../../common/select'
class Achievement extends React.Component {
  render () {
    return (
      <>
        <Space>
          <Select
            width={150}
            placeholder="请选择学期"
            list={[{ key: 1, data: '一学期' }, { key: 2, data: '二学期' }]}></Select>
        </Space>
      </>
    )
  }
}

export default Achievement