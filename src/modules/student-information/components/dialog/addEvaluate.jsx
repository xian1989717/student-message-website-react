import React from 'react'
import { connect } from 'react-redux'

import { Modal, Button, Input } from 'antd'

import {
  addStudentEvaluate
} from '../../../../store/actionCreator'

const { TextArea } = Input

const mapDispatch = dispatch => {
  return {
    addEvaluate (data) {
      dispatch(addStudentEvaluate(data))
    }
  }
}

@connect(null, mapDispatch)
class AddEvaluate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textAreaVal: null
    }
    this.formRef = React.createRef()
  }
  handleCancel = () => {
    this.props.cancel(false)
  }

  handelOk = () => {
    this.props.addEvaluate(this.state.textAreaVal)
    this.props.cancel(false)
  }

  getTextAreaVal = (e) => {
    setTimeout(() => {
      this.setState({
        textAreaVal: e.target.value
      })
    }, 100)
  }
  render () {
    return (
      <>
        <Modal
          title="新增评价"
          width={500}
          style={{ top: '250px' }}
          bodyStyle={{ height: '350px' }}
          maskClosable={false}
          visible={this.props.addVisable}
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
              onClick={this.handelOk}>
              确定
            </Button>
          ]}>
          <TextArea
            showCount
            autoSize={{ minRows: 13, maxRows: 13 }}
            maxLength={200}
            onChange={this.getTextAreaVal} />
        </Modal >
      </>
    )
  }
}

export default AddEvaluate