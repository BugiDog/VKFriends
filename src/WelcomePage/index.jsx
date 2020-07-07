import React from "react";
import "./style.css";

function WelcomePage() {
  function login() {
    const loginAcc = fetch(
      `https://oauth.vk.com/authorize?client_id=1&display=popup&redirect_uri=https://bugidog.github.io/VKFriends/&scope=friends&response_type=token&v=5.120&state=123456`
    );

    //const loginAcc=fetch('https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.120&state=123456')
  }

  return (
    <div className="login_win">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={login}>Войти</button>
    </div>
  );
}

export default WelcomePage;
