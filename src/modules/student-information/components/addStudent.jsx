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
    addStudent (student) {
      dispatch(addStudentAction(student))
    }
  }
}

@connect(null, mapDispatch)
class AddStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        gander: 'male',
        nation: null,
        age: null
      }
    }
    this.formRef = React.createRef()
  }
  handleOk = () => {
    const form = this.formRef.current
    const values = form.getFieldsValue([
      'name',
      'studentNo',
      'dateOfBirth',
      'nativePlace',
      'permanentAddress',
      'liveAdress',
      'sosPerson',
      'sosPersonPhone'
    ])
    const param = {
      ...this.state.formData,
      ...values
    }
    console.log(param)
    this.props.addStudent()
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

  // 选择出生日期
  handleSelectData = (data) => {
    console.log(data._d)
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
              label="姓名"
              name="name">
              <Input
                style={{ width: 150 }} />
            </Form.Item>

            <Form.Item
              label="年龄"
              name="age">
              <InputNumber
                disabled={true}
                style={{ width: 150 }} />
            </Form.Item>

            <Form.Item
              label="性别"
              name="gender">
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
              label="学号"
              name="studentNo">
              <Input />
            </Form.Item>

            <Form.Item
              label="出生日期"
              name="dateOfBirth" >
              <DatePicker
                style={{ width: '280px' }}
                onChange={this.handleSelectData} />
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
              label="户籍地址"
              name="permanentAddress">
              <Input />
            </Form.Item>

            <Form.Item
              label="居住地址"
              name="liveAdress">
              <Input />
            </Form.Item>

            <Form.Item
              label="紧急联络人"
              name="sosPerson">
              <Input
                style={{ width: '150px' }} />
            </Form.Item>

            <Form.Item
              label="紧急联络人电话"
              name="sosPersonPhone">
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