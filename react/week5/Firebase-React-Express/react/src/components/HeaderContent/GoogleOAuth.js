import React from "react";
import logo from "../../images/btn_google_signin_light_normal_web@2x.png";

function GoogleOAuth({ firebase }) {
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
