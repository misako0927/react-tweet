import React, { Component } from 'react'
import './Dialog.css'
import PropTypes from 'prop-types'

class Dialog extends Component {
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }
  render(){
    return(
      <dialog open={this.props.isOpen}>
        <label>todo</label><input type='text' />
        <button onClick={this.props.closeDialog}>Close Dialog</button>
      </dialog>
    )
  } 
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired
}

export default Dialog
