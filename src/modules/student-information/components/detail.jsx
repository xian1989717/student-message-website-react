import React from 'react'
import { connect } from 'react-redux'

import { PageHeader, Breadcrumb, Row, Col, Tabs } from 'antd'

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

  render () {
    const { student } = this.props
    return (
      <>
        <Breadcrumb
          style={{ padding: '8px 0px 0px 24px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
          title={student.name} />
        <div
          style={{ padding: '8px 24px 40px 24px' }}>
          <Row
            style={{ height: '40px', lineHeight: '40px' }}>
            <Col span={6}>
              <label>
                姓名:
              </label>
              <span>
                {student.name}
              </span>
            </Col>
            <Col span={6}><label>年龄:<span>{student.age}</span></label></Col>
            <Col span={6}><label>性别:<span>{student.sex}</span></label></Col>
            <Col span={6}><label>学号:<span>{student.studentNumber}</span></label></Col>
          </Row>
          <Row
            style={{ height: '40px', lineHeight: '40px' }}>
            <Col span={6}><label>出生日期:<span>{student.dateOfBirth}</span></label></Col>
            <Col span={6}><label>民族:<span>{student.nation}</span></label></Col>
            <Col span={6}><label>籍贯:<span>{student.nativePlace}</span></label></Col>
            <Col span={6}><label>户籍地址:<span>{student.permanentAddress}</span></label></Col>
          </Row>
          <Row
            style={{ height: '40px', lineHeight: '40px' }}>
            <Col span={6}><label>居住地址:<span>{student.liveAdress}</span></label></Col>
            <Col span={6}><label>紧急联络人:<span>{student.sosPerson}</span></label></Col>
            <Col span={6}><label>紧急联络人电话:<span>{student.sosPersonPhone}</span></label></Col>
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