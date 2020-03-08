import React, { useContext, useEffect, useState } from "react";
import getPrivateContent from "../helpers/ajax.js";
import { UserContext } from "../App.js";
import Loader from "./Loader.js";

export default function Main() {
	const user = useContext(UserContext);
	const [content, setContent] = useState("");
	const [loadingState, setLoadingState] = useState(false);

	const errorMsg = "Oops! Something went wrong";

	useEffect(() => {
		if (user) {
			setLoadingState(true);
			(async () => {
				try {
					const result = await getPrivateContent();
					setContent(result.body);
				} catch (err) {
					if (typeof err === "string") {
						setContent(err);
					} else {
						setContent(errorMsg);
					}
				}
				setLoadingState(false);
			})();
		} else {
			setContent("Please sign in to enter/see shifts");
		}
	}, [user]);

	return (
		<div>
			{loadingState ? <Loader /> : ""}
			<h2>{content}</h2>
		</div>
	);
}
