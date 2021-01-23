import React from 'react'
import { connect } from 'react-redux'

import { PageHeader, Breadcrumb, Row, Col, Tabs, Button } from 'antd'

import Remark from './remark'
import Evealuate from './evealuate'

const { TabPane } = Tabs

const mapState = state => {
  return {
    student: state.selectStudent
  }
}
const mapDispatch = dispatch => {
  return {
  }
}
@connect(mapState, mapDispatch)
class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editVisable: false,
      addVisable: false
    }
  }
  callback = (key) => {
  }
  deleteStudent = () => {

  }

  editStudent = () => {

  }

  render () {
    const { student } = this.props
    return (
      <>
        <Breadcrumb
          style={{ padding: '8px 0px 0px 24px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
          title={student.name}
          extra={[
            <Button
              key="edit"
              type="primary"
              onClick={this.editStudent}>
              编辑
            </Button>,
            <Button
              key="delete"
              type="primary"
              danger
              onClick={this.deleteStudent}>
              删除
            </Button>
          ]} />
        <div
          style={{ padding: '8px 24px 40px 24px' }}>
          <Row
            style={{ height: '40px', lineHeight: '40px' }}>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                姓名:
              </label>
              <span>
                {student.name}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                年龄:
              </label>
              <span>
                {student.age}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                性别:
              </label>
              <span>
                {student.sex}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                学号:
              </label>
              <span>
                {student.studentNumber}
              </span>
            </Col>
          </Row>
          <Row
            style={{ height: '40px', lineHeight: '40px' }}>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                出生日期:
              </label>
              <span>
                {student.dateOfBirth}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                民族:
              </label>
              <span>
                {student.nation}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                籍贯:
              </label>
              <span>
                {student.nativePlace}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                户籍地址:
              </label>
              <span>
                {student.permanentAddress}
              </span>
            </Col>
          </Row>
          <Row
            style={{ height: '40px', lineHeight: '40px' }}>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                居住地址:
              </label>
              <span>
                {student.liveAdress}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                紧急联络人:
              </label>
              <span>
                {student.sosPerson}
              </span>
            </Col>
            <Col span={6}>
              <label style={{ margin: '0px 5px 0px 0px' }}>
                紧急联络人电话:
              </label>
              <span>
                {student.sosPersonPhone}
              </span>
            </Col>
          </Row>
        </div>
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          style={{ padding: '8px 24px 0px 24px' }}
          tabBarStyle={{ borderBottom: '1px solid #ccc' }}>
          <TabPane tab="评价" key="1">
            <Evealuate />
          </TabPane>
          <TabPane tab="备注" key="2">
            <Remark />
          </TabPane>
        </Tabs>
      </>
    )
  }
}

export default Detail