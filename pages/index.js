import React, { useContext, useEffect } from "react";

import { Context } from "../context"

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    document.title = "ChatSphere | Log In"; // Set the desired title here
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
       { username, secret },
        { headers: { "Private-key": "1cca77c8-9abc-401e-8646-23ad78de2f4a" } }
      )
      .then((r)=> router.push("/chats"));
  }
  return (
    <div className="background">

    <div class="container">

      <div className="auth-container">

        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>

          <div className="auth-title">Welcome Back !</div>

          <div className="input-container">
            <input
              placeholder="Username:"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
            type="password"
              placeholder="Password:"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Enter ChatSphere
          </button>

        </form>        
            
	      </div>
        </div>
    
      </div>

      

    
  );
}
