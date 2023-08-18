import { useChatState, useChatActions } from "@yext/chat-headless-react";
import React, { useState } from "react"; // Import useState
import { ChatPanel } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";
const MyChat = () => {
  const chat = useChatActions();
  const messages = useChatState((state) => state.conversation.messages);

  const [inputValue, setInputValue] = useState(""); // State for input value

  const handleSubmit = (e) => {
    e.preventDefault();
    chat.getNextMessage(inputValue); // Send input value to chat
    setInputValue(""); // Clear input after submission
  };

  return <ChatPanel />;
};

export default MyChat;
