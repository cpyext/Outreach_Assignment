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

  const customCssClasses = {
    container: "bg-[#5950FF] text-white",
    inputContainer: "text-black",
    messagesContainer: "flex flex-col gap-y-1 px-4 pb-[85px] overflow-auto",

    // messagesContainer: "custom-messages-container",
    // Add other custom classes...
  };
  const headerstyle = {
    background: "#343333",
    "border-bottom": "1px solid rgba(187,187,187,.4)",
  };

  // Define props to pass to ChatPanel
  const chatPanelProps = {
    header: (
      <div
        className="w-full pl-4 pr-3 py-3 flex justify-between bg-gradient-to-tr from-blue-600 to-blue-800"
        style={headerstyle}
      >
        <h1 className="text-white text-xl font-medium truncate pr-1 yext-chat-header__title">
          Yext Chat
        </h1>
      </div>
    ),
    customCssClasses: customCssClasses, // Pass the customCssClasses prop
    // Other props...
  };

  return <ChatPanel {...chatPanelProps} />;
};

export default MyChat;
