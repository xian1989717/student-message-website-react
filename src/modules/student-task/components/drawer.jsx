import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

import { Drawer } from 'antd'

class Drawers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placement: 'bottom',
      editorState: BraftEditor.createEditorState(null)
    }
  }

  onClose = () => {
    this.props.cancel(false)
  }
  handleEditorChange = (editorState) => {
    this.setState({ editorState })
    console.log(this.state.editorState.toHTML())
  }

  render () {
    return (
      <Drawer
        title="Basic Drawer"
        height={300}
        placement={this.state.placement}
        onClose={this.onClose}
        visible={this.props.visible}
        key={this.state.placement}>
        <BraftEditor
          value={this.state.editorState}
          contentStyle={{ height: 260 }}
          onChange={this.handleEditorChange} />
      </Drawer>
    )
  }
}

export default Drawers