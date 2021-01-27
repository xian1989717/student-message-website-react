import React from 'react'

import { Modal, Form, Button, DatePicker } from 'antd'

import Select from '../../../common/select'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.formRef = React.createRef()
  }



  onFinish = () => {

  }

  onFinishFailed = () => {

  }

  handleCancel = () => {
    this.props.cancel(false)
  }

  handleOk = () => {

  }

  onDateChange = () => {

  }

  render () {
    return (
      <>
        <Modal
          title="新增作业"
          bodyStyle={{ height: '200px' }}
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
            onFinishFailed={this.onFinishFailed}>
            <Form.Item
              label="班级"
              name="class">
              <Select
                list={[]} />
            </Form.Item>
            <Form.Item
              label="学科"
              name="subject">
              <Select
                list={[]}
              />
            </Form.Item>
            <Form.Item
              label="日期"
              name="date">
              <DatePicker
                onChange={this.onDateChange} />
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}

export default AddTask