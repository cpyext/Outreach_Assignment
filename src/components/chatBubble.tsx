import React from "react";

const ChatComponent: React.FC = () => {
  const toggleForm = () => {
    const chatFrame = document.querySelector("#chatFrame") as HTMLIFrameElement;
    const svg1 = document.querySelector(".svg1") as SVGSVGElement;
    const svg2 = document.querySelector(".svg2") as SVGSVGElement;

    if (chatFrame.style.display === "block") {
      chatFrame.style.display = "none";
      svg1.style.display = "block";
      svg2.style.display = "none";
    } else {
      chatFrame.style.display = "block";
      svg1.style.display = "none";
      svg2.style.display = "block";
    }
  };

  return (
    <div
    // style={{
    //   position: "fixed",
    //   bottom: "23px",
    //   right: "28px",
    //   zIndex: 999,
    // }}
    >
      <div>
        <iframe
          id="chatFrame"
          src="https://yext-chatbot-prod.up.railway.app/bots/outreachsupport"
          style={{
            width: "400px",
            height: "500px",
            display: "block",
          }}
        ></iframe>
      </div>
      {/* <button
        onClick={toggleForm}
        style={{
          right: "2.5rem",
          bottom: "2.5rem",
          background:
            "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          backgroundColor: "#00bceb", // Update: background color of chat bubble, currently blue
          width: "3rem",
          height: "3rem",
          borderRadius: "9999px",
          borderWidth: "1px",
          borderColor: "#ffffff", // Update: color of chat bubble border, currently white
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ffffff", // Update: color of icon inside chat bubble, currently white
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <svg
            className="svg2"
            style={{
              color: "#ffffff", // Update: color of icon inside chat bubble, currently white
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              display: "none",
            }}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
          </svg>
          <svg
            className="svg1 text-xl lg:text-3xl text-white"
            style={{
              color: "#ffffff",
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
            }}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 00480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.81 172.81 0 00-4 36.83c0 99.4 80.56 182.11 184.16 182.11 16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94 8-2.41 11.89-1.29l77.42 22.38a4 4 0 005-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14z"></path>
            <path d="M312.54 415.38a165.32 165.32 0 01-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.09 184.09 0 01-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49 0-3.13.11-6.14.22-9.16a4.34 4.34 0 00-7.54-3.12 158.76 158.76 0 00-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 005.22 4.53l68-24.24a16.85 16.85 0 0112.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 00116.63-46 4.29 4.29 0 00-3.66-7.31z"></path>
          </svg>
        </div>
      </button> */}
    </div>
  );
};

export default ChatComponent;
