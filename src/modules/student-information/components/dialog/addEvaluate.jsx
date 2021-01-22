import React from 'react'
import { connect } from 'react-redux'

import { Modal, Button, Input } from 'antd'

const { TextArea } = Input

@connect(null, null)
class AddEvaluate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleCancel = () => {
    this.props.cancel(false)
  }

  handelOk = () => {
    this.props.cancel(false)
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
            maxLength={200} />
        </Modal >
      </>
    )
  }
}

export default AddEvaluate