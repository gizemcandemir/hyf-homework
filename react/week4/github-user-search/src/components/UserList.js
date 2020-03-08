import React, { useContext } from "react";
import User from "./User";
import { SearchContext } from "../contexts/searchContext";

const UserList = () => {
	const { loading, query, userList } = useContext(SearchContext);
	return (
		<div className="center">
			{query === "" ? (
				<p>No results</p>
			) : loading ? (
				<p>...loading...</p>
			) : userList.length > 0 ? (
				userList.map(user => {
					return <User key={user.id} user={user} />;
				})
			) : (
				<p>No results</p>
			)}
		</div>
	);
};

export default UserList;
