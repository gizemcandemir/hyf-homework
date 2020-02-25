import React, { useContext } from "react";
import { SearchContext } from "../contexts/searchContext";

const Header = () => {
	const searchContext = useContext(SearchContext);
	const { query, handleQueryChange } = searchContext;
	return (
		<div className="center">
			<h1>Github user searcher</h1>
			<input
				type="text"
				placeholder="Search for user"
				value={query}
				onChange={handleQueryChange}
			/>
		</div>
	);
};

export default Header;
