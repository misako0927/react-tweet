import Emitter from './EventEmitter'
export default class Store extends Emitter {
  constructor(dispatcher){
    super()
    this.count = 0
    this.tweets = []
    dispatcher.on("addTweet", this.onAddTweet.bind(this))
  }
  getCount(){
    return this.count
  }
  getTweets(){
    return this.tweets
  }
  onAddTweet(tweet){
    // call after emit dispatcher
    this.count = tweet.count
    this.tweets.push({name: tweet.name, tweet: tweet.tweet})
    // emit "CHANGE" ---> self
    this.emit("CHANGE")
  }
}