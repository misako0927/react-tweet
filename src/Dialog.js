import React, { Component } from 'react'

class Dialog extends Component {
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }
  render(){
    if(this.state.isOpen){
      return(
        <div>
          This is dialog!!
        </div>
      )
    } else {
      return false
    }
  } 
}

export default Dialog