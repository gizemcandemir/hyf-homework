import React, { useState, useContext } from "react";
import config from "../../helpers/config";
import "firebase/auth";
import { UserContext } from "../../App.js";

function EmailLogin({firebase}) {
	const [loginState, setLoginState] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

  const user = useContext(UserContext);
  
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  async function signIn(e, username, password) {
    e.preventDefault()
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(username,password);
      setLoginState(true)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(loginState)

	return (
		<form>
			<label>Email</label>
			<input type="email" value={username} onChange={handleUsername}/>
      <br />
			<label>Password</label>
			<input type="password" value={password} onChange={handlePassword} />
      <br />
			<button type="submit">Login with email</button>
		</form>
	);
}

export default EmailLogin;
