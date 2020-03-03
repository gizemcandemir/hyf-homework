import React, { useState } from "react";

function EmailLogin({ firebase }) {
	const [loginState, setLoginState] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsername = e => {
		setUsername(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	async function signIn(e) {
		e.preventDefault();
		try {
			await firebase.signInEmailAndPassword(username, password);
			setLoginState(true);
		} catch (err) {
			console.log(err);
		}
	}

	return (
			<form onSubmit={signIn}>
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
