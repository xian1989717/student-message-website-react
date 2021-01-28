import React from 'react'

import { Space, Table, Button } from 'antd'

import Select from '../../common/select'

const columns = [
  {
    title: '序号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
    width: 80
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '语文',
    dataIndex: 'chinese',
    key: 'chinese'
  },
  {
    title: '数学',
    dataIndex: 'mathematics',
    key: 'mathematics'
  },
  {
    title: '英语',
    dataIndex: 'english',
    key: 'english'
  },
  {
    title: '思想品德',
    dataIndex: 'ideologyMorality',
    key: 'ideologyMorality'
  }
]

const data = [
  {
    key: '1',
    orderNumber: 1,
    name: '乔峰',
    chinese: 98,
    mathematics: 99,
    english: 75,
    ideologyMorality: 90
  },
  {
    key: '2',
    orderNumber: 2,
    name: '慕容复',
    chinese: 99,
    mathematics: 97,
    english: 90,
    ideologyMorality: 90
  },
  {
    key: '3',
    orderNumber: 3,
    name: '小乔',
    chinese: 89,
    mathematics: 89,
    english: 85,
    ideologyMorality: 90
  },
  {
    key: '4',
    orderNumber: 4,
    name: '天山童女',
    chinese: 90,
    mathematics: 87,
    english: 59,
    ideologyMorality: 90
  },
  {
    key: '5',
    orderNumber: 5,
    name: '郭靖',
    chinese: 95,
    mathematics: 79,
    english: 65,
    ideologyMorality: 90
  },
  {
    key: '6',
    orderNumber: 6,
    name: '黄蓉',
    chinese: 97,
    mathematics: 77,
    english: 66,
    ideologyMorality: 90
  },
]
class Achievement extends React.Component {
  addAchievement = () => {

  }

  render () {
    return (
      <>
        <div
          style={{ marginBottom: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            type="primary"
            onClick={this.addAchievement}>
            新增
          </Button>
          <Select
            width={150}
            placeholder="请选择学期"
            list={[{ key: 1, data: '一学期' }, { key: 2, data: '二学期' }]} />
        </div>
        <Table
          scroll={{ y: 'calc(100vh - 210px)' }}
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered />
      </>
    )
  }
}

export default Achievement