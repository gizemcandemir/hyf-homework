import React, { useContext } from "react";
import GoogleOAuth from "./HeaderContent/GoogleOAuth";
import "../css/header.css";
import firebaseInst from "../helpers/firebase.js";
import EmailLogin from "./HeaderContent/EmailLogin";
import { UserContext } from "../App.js";

function Header(props) {
	const user = useContext(UserContext);
	return (
		<header className="header">
			<h2>Employee Shift List</h2>
			{user 
				? 
				<p>Hello, {user.displayName}</p> 
				: 
				<>
					<p>Please sign in.</p>
					<EmailLogin /> or 
				</>
			}
			<GoogleOAuth firebase={firebaseInst} />
			{props.children}
		</header>
	);
}

export default Header;
