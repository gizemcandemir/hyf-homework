import React, { useContext } from "react";
import logo from "../../images/btn_google_signin_light_normal_web@2x.png";
import { UserContext } from "../../App.js";

function GoogleOAuth({ firebase }) {
	const user = useContext(UserContext);

	return (
		<>
			<img
				src={logo}
				className="App-logo"
				alt="logo"
				onClick={() => firebase.signInGoogle()}
			/>
		</>
	);
}

export default GoogleOAuth;
