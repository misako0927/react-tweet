import React, { Component } from 'react'
import './Dialog.css'

class Dialog extends Component {
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }
  render(){
    if(this.props.isOpen){
      return(
        <div className="dialog">
          <div className="dialog-wrapper">
            This is dialog!!
            <button onClick={this.props.closeDialog}>Close Dialog</button>
          </div>
        </div>
      )
    } else {
      return false
    }
  } 
}

export default Dialog
