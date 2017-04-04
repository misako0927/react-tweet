import React, { Component } from 'react'
import ActionCreator from './action/ActionCreator'
import Store from './store/Store'
import EventEmitter from './store/EventEmitter'

let dispatcher = new EventEmitter()
let action = new ActionCreator(dispatcher)
let store = new Store(dispatcher)
class Contents extends Component {
  constructor(props) {
    super(props)
    this.state = {count: store.getCount(), tweets: store.getTweets()}
    // <---- Observe store's change
    store.on("CHANGE", () => {
      this._onChange()
    })
  }
  _onChange() {
    console.trace()
    this.setState({count: store.getCount(), tweets: store.getTweets()})
  }
  addTweet() {
    action.addTweet({count: this.state.count + 1, name: `user${this.state.count}`, tweet: `This is my ${this.state.count} tweet`})
  }
  render() {
    const tweetList = this.state.tweets.map((tweet, idx) =>
      <Tweet key={idx.toString()} tweet={tweet} />
    )
    return(
      <div>
        <div className="tweet-contents">
          {tweetList}
        </div>
        <div>
          <button onClick={this.addTweet.bind(this)}>Please Click</button>
        </div>
      </div>
    )
  }
}

class Tweet extends Component {
  render() {
    return(
      <div className="tweet">
        <p>{this.props.tweet.name}</p>
        <p>{this.props.tweet.tweet}</p>
      </div>
    )
  }
}

export default Contents