import React, { Component } from 'react'

class Contents extends Component {
  render() {
    const tweetNum = [1,2,3,4,5]
    const tweetList = tweetNum.map((num) =>
      <Tweet key={num.toString()} tweetNum={num} />
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
        <p>Tweet{this.props.tweetNum} something</p>
      </div>
    )
  }
}

export default Contents