import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic (() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);


export default function Chats() {
  const { username, secret} = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router =useRouter();

  useEffect(() => {
    document.title = "ChatSphere | Chats"; // Set the desired title here
  }, []);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });


  useEffect(() => {
    if (username.legnth === 0 || secret.length === 0) router.push("/");
  });

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="8170ec3e-885c-4f2f-9ca9-5972d971fc3e"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
