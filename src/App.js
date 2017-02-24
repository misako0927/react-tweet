import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Contents from './Contents'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contents tweets={this.props.tweets} />
        <Footer />
      </div>
    )
  }
}

export default App
