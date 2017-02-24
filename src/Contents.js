import React, { Component } from 'react'

class Contents extends Component {
  render() {
    const tweetList = this.props.tweets.map((tweet, idx) =>
      <Tweet key={idx.toString()} tweet={tweet} />
    )
    return(
      <div className="tweet-contents">
        {tweetList}
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