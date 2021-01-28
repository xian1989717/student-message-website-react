import React from 'react'

import { PageHeader, Button, List } from 'antd'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

class Main extends React.Component {

  addInformation = () => {

  }

  render () {
    return (
      <>
        <PageHeader
          title="学校信息"
          extra={[
            <Button
              type="primary"
              onClick={this.addInformation}>
              新增
          </Button>
          ]} />
        <List
          style={{ margin: '0px 24px' }}
          itemLayout="horizontal"
          dataSource={data}
          bordered
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </>
    )
  }
}

export default Main
