export default class ActionCreator {
  constructor(dispatcher){
    this.dispatcher = dispatcher
  }
  // "Emit" event ----> Store
  addTweet(data) {
    this.dispatcher.emit("addTweet", data)
  }
  openDialog(data){
    this.dispatcher.emit("openDialog", data)
  }
}