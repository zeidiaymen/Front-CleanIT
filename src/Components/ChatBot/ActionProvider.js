import IA from "../IAsignin";
import { withRouter } from "react-router";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  freindly = () => {
    const message = this.createChatBotMessage("fine thank you and you ?");
    this.addMessageToState(message);
  };
  Login = () => {
    const message = this.createChatBotMessage(
      "go to this url http://localhost:3001/SignIn"
    );
    withRouter("/Clientspace");

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
