import React from 'react'

import { Select } from 'antd'

const { Option } = Select

class Selects extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  handleChange = (data) => {
    this.props.select(data)
  }
  render () {
    const list = this.props.list.map(i => {
      return <Option key={i.value}>{i.data}</Option>
    })
    return (
      <Select
        style={{ width: this.props.width ? this.props.width : '100%' }}
        onChange={this.handleChange}>
        {list}
      </Select>
    )
  }
}

export default Selects