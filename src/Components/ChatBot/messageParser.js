import { withRouter } from "react-router-dom";
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    const Lower = message.toLowerCase();
    if (Lower.includes("how are you")) {
      this.actionProvider.freindly();
    }
    if (Lower.includes("login")) {
      //      this.actionProvider.Login();
      this.actionProvider.Login();
    }
  }
}

export default MessageParser;
