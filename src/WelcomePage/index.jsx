import React from "react";
import "./style.css";

function WelcomePage() {
  function login() {
    const redirectUri = "http://localhost:3000/";
    const url = `https://oauth.vk.com/authorize?client_id=7534348&display=popup&redirect_uri=${redirectUri}&scope=friends&response_type=token&v=5.120`
    console.log(url);
    const loginAcc = fetch(url, {
      mode: "no-cors",
      method: "GET",
      credentials: "include",
    });
    console.log(loginAcc);
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
