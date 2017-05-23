import React, { Component } from 'react'
import './TodoAddDialog.css'
import PropTypes from 'prop-types'
import Dialog from 'react-toolbox/lib/dialog/Dialog'

class TodoAddDialog extends Component {
  actions = [
    { label: "Cancel", onClick: this.closeDialog.bind(this) },
    { label: "Save", onClick: this.closeDialog.bind(this) }
  ]
  closeDialog() {
    this.props.closeDialog()
  }
  render(){

    return(
      <div>
        <Dialog 
          actions={this.actions}
          active={this.props.isOpen}
          onEscKeyDown={this.closeDialog.bind(this)}
          onOverlayClick={this.closeDialog.bind(this)}
          tilte="Todo create"
        >
          <label>todo</label><input type='text' />
        </Dialog>
        <button onClick={this.props.openDialog}>Open Dialog</button>
      </div>
    )
  } 
}

TodoAddDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired
}

export default TodoAddDialog
