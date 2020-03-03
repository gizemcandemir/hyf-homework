import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="menu">
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
