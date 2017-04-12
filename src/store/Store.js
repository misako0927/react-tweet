import Emitter from './EventEmitter'
export default class Store extends Emitter {
  constructor(dispatcher){
    super()
    this.modalIsOpen = false
    this.count = 0
    this.tweets = []
    dispatcher.on("addTweet", this.onAddTweet.bind(this))
    dispatcher.on("openDialog", this.onChangeDialog.bind(this))
    dispatcher.on("closeDialog", this.onChangeDialog.bind(this))
  }
  getCount(){
    return this.count
  }
  getTweets(){
    return this.tweets
  }
  getModalState(){
    return this.modalIsOpen
  }
  onAddTweet(tweet){
    // call after emit dispatcher
    this.count = tweet.count
    this.tweets.push({name: tweet.name, tweet: tweet.tweet})
    // emit "CHANGE" ---> self
    this.emit("CHANGE")
  }
  onChangeDialog(modalIsOpen){
    this.modalIsOpen = modalIsOpen
    this.emit("CHANGE")
  }
}