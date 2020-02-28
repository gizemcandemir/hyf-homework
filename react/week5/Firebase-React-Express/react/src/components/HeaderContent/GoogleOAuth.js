import React, { useContext } from "react";
import { UserContext } from "../../App.js";

function GoogleOAuth({ firebase }) {

	const user = useContext(UserContext);

	return (
		<div>
			{user ? (
				<button onClick={() => firebase.signOut()}>Sign out</button>
			) : (
				<button onClick={() => firebase.signInGoogle()}>
					Sign in with Google
				</button>
			)}
		</div>
	);
}

export default GoogleOAuth;
