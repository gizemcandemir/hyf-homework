import React, { useContext } from "./node_modules/react";
import { SearchContext } from "../contexts/searchContext";

function UserSearch() {
	const searchContext = useContext(SearchContext);
	const { handleSubmit } = searchContext;

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<input type="text" placeholder="search user" id="query" />
			<button type="submit">Search</button>
		</form>
	);
}

export default UserSearch;
