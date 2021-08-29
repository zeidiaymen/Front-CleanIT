import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import config from "./config";
import MessageParser from "./messageParser";

export default function ChatBot() {
  const [tog, setTog] = useState(false);
  const Toggle = () => {
    console.log(tog);
    setTog(!tog);
  };

  return (
    <div>
      {tog ? (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      ) : (
        console.log("not toggled")
      )}

      <img
        onClick={Toggle}
        Style="width:50px;height:50px;border-radius:100%; background-color:transparent  "
        src="https://i.pinimg.com/474x/e8/3f/c3/e83fc326ca20b3981713a5c139188245.jpg"
      />
    </div>
  );
}
