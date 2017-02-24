import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const TWEETS = [
  { name: "user1", tweet: "This is my tweet"},
  { name: "user2", tweet: "This is my 2 tweet"},
  { name: "user3", tweet: "This is my 3 tweet"},
  { name: "user4", tweet: "This is my 4 tweet"},
]
ReactDOM.render(
  <App tweets={TWEETS} />,
  document.getElementById('root')
)
