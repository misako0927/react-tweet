import React, { Component } from 'react'
import './Dialog.css'
import PropTypes from 'prop-types'
import ReactDom from 'react-dom'

class Dialog extends Component {
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }
  openDialog(){
    ReactDom.findDOMNode(this.refs.dialog).showModal()
  }
  closeDialog(){
    ReactDom.findDOMNode(this.refs.dialog).close()
  }
  render(){
    return(
      <dialog ref='dialog'>
        <label>todo</label><input type='text' />
        <button onClick={this.props.closeDialog}>Close Dialog</button>
      </dialog>
    )
  } 
  componentDidUpdate(){
    if(this.props.isOpen){
      this.openDialog()
    } else {
      this.closeDialog()
    }
  }
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired
}

export default Dialog
