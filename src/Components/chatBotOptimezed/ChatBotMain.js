import "./mainChatBot.css";
import React from "react";
import { useHistory } from "react-router-dom";
export default function Main() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const History = useHistory();
  const rec = async () => {
    recognition.start();
    console.log("Activated");
    recognition.onresult = (e) => {
      let resultIndex = e.resultIndex;
      const transcript = e.results[resultIndex][0].transcript;
      console.log(transcript);
      const speech = new SpeechSynthesisUtterance();
      if (transcript.includes("sign in")) {
        speech.text = "redirected to Sign in";
        window.speechSynthesis.speak(speech);
        History.push("/Signin");
      }
      if (transcript.includes("team")) {
        speech.text =
          "the team is composid of 4 devellopers : Aymen  and arij full stack web developpers , samar and khalil two mobile developper";
        window.speechSynthesis.speak(speech);
      }
      if (transcript.includes("sign up")) {
        speech.text = "redirected to Sign up";
        window.speechSynthesis.speak(speech);
        History.push("/Register");
      }
      if (transcript.includes("face")) {
        const IA = true;
        localStorage.setItem("IA", IA);
        console.log("done");
      }
      if (transcript.includes("phone number")) {
        speech.text = "54617693";
        window.speechSynthesis.speak(speech);
      }
    };
  };

  return (
    <div>
      <button id="mic" onClick={rec} Style="right:0">
        <i className="flaticon-microphone fa-xs" />
      </button>
    </div>
  );
}
