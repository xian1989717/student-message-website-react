import React from 'react'
import dayJs from 'dayjs'
import { PageHeader, Breadcrumb, Row, Col, Tabs, List, Typography, Button } from 'antd'

import AddEvealuate from './addEvaluate'
const { TabPane } = Tabs

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editVisable: false,
      addVisable: false
    }
  }
  callback = (key) => {
  }
  editEvaluate = () => {

  }
  addEvaluate = () => {
    this.setState({
      addVisable: true
    })
  }

  cancelAddEvealuate = () => {
    this.setState({
      addVisable: false
    })
  }

  addRemark = () => {

  }

  render () {
    return (
      <>
        <Breadcrumb
          style={{ padding: '8px 0px 0px 24px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
          title="详情信息" />
        <div
          style={{ padding: '8px 24px 40px 24px' }}>
          <Row
            style={{ height: '40px' }}>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
          </Row>
          <Row
            style={{ height: '40px' }}>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
          </Row>
          <Row
            style={{ height: '40px' }}>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
            <Col span={6}><label>姓名:<span>张三</span></label></Col>
          </Row>
        </div>
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          style={{ padding: '8px 24px 0px 24px' }}
          tabBarStyle={{ borderBottom: '1px solid #ccc' }}>
          <TabPane tab="学生评价" key="1">
            <Button
              type="primary"
              style={{ margin: '0px 0px 16px 0px' }}
              onClick={this.addEvaluate}>
              新增评价
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
            <AddEvealuate
              addVisable={this.state.addVisable}
              cancel={this.cancelAddEvealuate}
            />
          </TabPane>
          <TabPane tab="学生备注" key="2">
            <Button
              type="primary"
              style={{ margin: '0px 0px 16px 0px' }}
              onClick={this.addRemark}>
              新增备注
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
          </TabPane>
        </Tabs>
      </>
    )
  }
}