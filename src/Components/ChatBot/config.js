import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "CleanIT",
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "black",
    },
    chatButton: {
      backgroundColor: "crimson",
    },
  },

  initialMessages: [
    createChatBotMessage(`Hi I'm CleanBOT. I’m here to help you.`),
  ],
};

export default config;
