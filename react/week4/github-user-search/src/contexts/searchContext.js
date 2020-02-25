import React, { useState, useEffect } from "react";
// import githubRequestSetting from "../helpers/githubSettings.js";

const SearchContext = React.createContext();

const SearchProvider  = props => {
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState("");
	const [userList, setUserList] = useState([]);
	const [error, setError] = useState("");

	const handleQueryChange = e => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		if (query !== "") {
			const url = `https://api.github.com/search/users?q=${query}`;
			setLoading(true);
			fetch(url)
				.then(data => data.json())
				.then(jsonResponse => setUserList(jsonResponse.items))
				.catch(error => setError(error.message));
			setLoading(false);
		}
	}, [query]);

	return (
		<SearchContext.Provider
			value={{ loading, query, userList, handleQueryChange }}
		>
			{props.children}
		</SearchContext.Provider>
	);
};

export { SearchProvider, SearchContext };
