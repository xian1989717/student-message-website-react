import React from 'react'
import { connect } from 'react-redux'

import {
  Modal,
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker
} from 'antd'

import Selects from '../../common/select.jsx'
import RadioGroup from '../../common/radio-group.jsx'

import { addStudentAction } from '../../../store/actionCreator'
import { nationList } from '../../common/baseData.js'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  }
}
const mapDispatch = dispatch => {
  return {
    addTeacher (teacher) {
      dispatch(addStudentAction(teacher))
    }
  }
}

@connect(null, mapDispatch)
class AddStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      formData: {
        gander: 'male',
        nation: null
      }
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
  // 选择性别
  handleSelectGender = (data) => {
    const formData = Object.assign(
      this.state.formData,
      { gander: data }
    )
    this.setState({ formData })
  }
  // 选择民族
  handleSelectNation = (nation) => {
    const formData = Object.assign(
      this.state.formData,
      { nation }
    )
    this.setState({ formData })
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
            >
              <InputNumber
                disabled={true}
                style={{ width: 150 }} />
            </Form.Item>

            <Form.Item
              label="性别">
              <Selects
                width={100}
                list={[
                  {
                    value: 'male',
                    data: '男性'
                  },
                  {
                    value: 'female',
                    data: '女性'
                  }]}
                select={this.handleSelectGender} />
            </Form.Item>

            <Form.Item
              label="学号">
              <Input />
            </Form.Item>

            <Form.Item
              label="出生日期"
              name="obtainPositionalTitlesTime" >
              <DatePicker
                style={{ width: '280px' }} />
            </Form.Item>

            <Form.Item
              label="民族"
              name="nation" >
              <Selects
                width={150}
                list={nationList}
                select={this.handleSelectNation} />
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

export default AddStudent