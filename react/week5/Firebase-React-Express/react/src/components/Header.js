import React, { useContext } from "react";
import GoogleOAuth from "./HeaderContent/GoogleOAuth";
import firebaseInst from "../helpers/firebase.js";
import EmailLogin from "./HeaderContent/EmailLogin";
import { UserContext } from "../App.js";

function Header(props) {
	const user = useContext(UserContext);
	return (
		<header className="header">
			<h2>Employee Shift List</h2>
			{user ? (
				<>
					<p>Hello, {user.displayName}</p>
					<button onClick={() => firebaseInst.signOut()}>Sign out</button>
				</>
			) : (
				<>
					<p>Please sign in.</p>
					<div className="login-options">
						<div className="email-login">
							<EmailLogin firebase={firebaseInst} />
						</div>
						<div className="google-login">
							<GoogleOAuth firebase={firebaseInst} />
						</div>
					</div>
				</>
			)}
		</header>
	);
}

export default Header;
