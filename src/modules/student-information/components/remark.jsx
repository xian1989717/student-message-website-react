import React from 'react'
import dayJs from 'dayjs'

import { List, Button, Typography } from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

class Remark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  addRemark = () => {

  }

  render () {
    return (
      <>
        <Button
          type="primary"
          style={{ margin: '0px 0px 16px 0px' }}
          onClick={this.addRemark}>
          新增
        </Button>
        <List
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <a key="list-loadmore-edit">查看</a>,
                <a key="list-loadmore-more" onClick={this.editEvaluate}>编辑</a>
              ]}>
              <Typography.Text mark>[{dayJs(new Date().toDateString()).format('YYYY-MM-YY')}]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </>
    )
  }
}

export default Remark