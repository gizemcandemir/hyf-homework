import React, { useState, useContext } from "react";
import AddShiftForm from "./AddShiftForm";
import ShiftItem from "./ShiftItem";
import { UserContext } from "../App.js";
import userList from "../helpers/userList";

const ShiftList = () => {
	const user = useContext(UserContext);

	const [users, setUsers] = useState(userList);

	const price = 100;
	let totalHr = 0;

	function getTotalHr (start, end) {
		return totalHr = 4;
	}

	if (user && user.email === "gizemc@gmail.com") {
		return (
			<div className="shift-list">
				{users.map(user => (
					<ShiftItem key={user.id} name={user.name} start={user.start} end={user.end} totalHr={getTotalHr(user.start, user.end)} totalPrice={totalHr * price}/>
				))}
			</div>
		);
	} else {
		if (user && user.email !== "gizemc@gmail.com") {
			return (
				<h2>Please sign in as employer too see shift list.</h2>
			);
		}
		return <h2>Please sign in too see shift list.</h2>;
	}
};

export default ShiftList;
