import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/shifts">Shift List</Link>
				</li>
				<li>
					<Link to="/add-shift">Add Shift</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
