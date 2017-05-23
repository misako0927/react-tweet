import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Contents from './Contents'
import '../assets/react-toolbox/theme.css'
import theme from '../assets/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Contents />
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
