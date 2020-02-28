import React, { useState, useContext } from "react";
import { UserContext } from "../../App.js";
// import firebase from "../../helpers/firebase";
import "firebase/auth";

import firebaseConfig from "../../helpers/config";
import * as firebase from 'firebase/app';
import 'firebase/auth';

function EmailLogin({ firebase }) {
	const [loginState, setLoginState] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const user = useContext(UserContext);

	const handleUsername = e => {
		setUsername(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	async function signIn(e, username, password) {
		e.preventDefault();
		try {
			const result = await firebase
				.auth()
				.signInWithEmailAndPassword(username, password);
			setLoginState(true);
		} catch (err) {
			console.log(err);
		}
	}
	console.log(loginState);

	return (
		<form onSubmit={e => signIn(e, username, password)}>
			<label>Email</label>
			<input type="email" value={username} onChange={handleUsername} />
			<br />
			<label>Password</label>
			<input type="password" value={password} onChange={handlePassword} />
			<br />
			<button type="submit">Login with email</button>
		</form>
	);
}

export default EmailLogin;