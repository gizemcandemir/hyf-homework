import React, { useState, useEffect, createContext } from "react";

const UserListContext = createContext();

const UserList = (props) => {
	const [loading, setLoading] = useState(true);
	const [username, setUsername] = useState([]);
	const [query, setQuery] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		fetch("https://api.github.com/search/users?q=gizemcandemir")
			.then(githubUserObject => githubUserObject.json())
			.then(githubUserList => {
        setUsername(githubUserList);
        setLoading(false)
      })
			.catch(err => {
        setError(err);
        setLoading(true)
			});
	}, [query]);

	const handleQueryChange = e => {
		setQuery(e.target.value);
	};

	return (
		<UserListContext.Provider
			value={{
        loading,
				username,
				query,
				error,
				handleQueryChange
			}}
		>
			{props.children}
		</UserListContext.Provider>
	);
};

export { UserList, UserListContext };
