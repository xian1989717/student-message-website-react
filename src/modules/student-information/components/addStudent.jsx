import React from 'react'

import {
  Modal,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  DatePicker
} from 'antd'

import Selects from '../../common/select.jsx'
import RadioGroup from '../../common/radio-group.jsx'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  }
}

export default class AddStudent extends React.Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef()
  }
  handleOk = () => {

  }
  handleCancel = () => {
    this.props.cancel(false)
  }
  onFinish = () => {

  }
  onFinishFailed = () => {

  }
  render () {
    return (
      <div>
        <Modal
          title="添加"
          width={800}
          maskClosable={false}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Form
            {...layout}
            ref={this.formRef}
            name="basic"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Row>
              <Col span={8}>
                <Form.Item
                  label="姓名">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="年龄"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <InputNumber
                    style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="学号"
                  name="studentNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="出生日期"
                  name="obtainPositionalTitlesTime" >
                  <DatePicker
                    style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="民族"
                  name="nation" >
                  <Selects
                    list={[]} />
                </Form.Item>
              </Col>
              <Col span={8}></Col>
            </Row>
          </Form>
        </Modal>
      </div>
    )
  }
}