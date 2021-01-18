import React from 'react'

import {
  Modal,
  Form,
  Input,
  InputNumber,
  Col,
  Row,
  Button,
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
    this.state = {
      loading: false
    }
    this.formRef = React.createRef()
  }
  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
      this.props.cancel(false)
    }, 3000)
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
      <>
        <Modal
          title="添加"
          width={650}
          maskClosable={false}
          visible={this.props.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="back"
              onClick={this.handleCancel}>
              取消
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.loading}
              onClick={this.handleOk}>
              确定
            </Button>
          ]}>
          <Form
            {...layout}
            ref={this.formRef}
            name="basic"
            labelCol={{ span: 5 }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="姓名">
              <Input
                style={{ width: 150 }} />
            </Form.Item>

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
                style={{ width: 150 }} />
            </Form.Item>

            <Form.Item
              label="性别">
              <Selects
                width={100}
                list={[]} />
            </Form.Item>

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

            <Form.Item
              label="出生日期"
              name="obtainPositionalTitlesTime" >
              <DatePicker
                style={{ width: '50%' }} />
            </Form.Item>

            <Form.Item
              label="民族"
              name="nation" >
              <Selects
                width={150}
                list={[]} />
            </Form.Item>

            <Form.Item
              label="籍贯"
              name="nativePlace" >
              <Input />
            </Form.Item>

            <Form.Item
              label="户籍地址">
              <Input />
            </Form.Item>

            <Form.Item
              label="居住地址">
              <Input />
            </Form.Item>

            <Form.Item
              label="紧急联络人">
              <Input
                style={{ width: '150px' }} />
            </Form.Item>

            <Form.Item
              label="紧急联络人电话">
              <Input
                style={{ width: '150px' }} />
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}