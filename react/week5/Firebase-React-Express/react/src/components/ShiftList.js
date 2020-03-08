import React, { useState, useEffect, useContext } from "react";
import ShiftItem from "./ShiftItem";
import { UserContext } from "../App.js";
import userList from "../helpers/userList";

const ShiftList = () => {
	const user = useContext(UserContext);

	const [users, setUsers] = useState(userList);

	useEffect(() => {
		fetch("./helpers/userList.js")
		.then(fetchedUserObject => fetchedUserObject.json()
		);
	}, []);

	function getTotalHr(start, end) {
		let diff = ((new Date(end).getTime() - new Date(start).getTime())/ 1000);
		diff /= 60 * 60;
		const totalHr = Math.abs(Math.round(diff));
		return totalHr;
	}

	function getTotalPrice(start, end) {
		const pricePerHr = 100;
		const totalPrice = pricePerHr * getTotalHr(start, end)
		return totalPrice;
	}

	if (user && user.email === "gizemc@gmail.com") {
		return (
			<div className="shift-list">
				{users.map(user => (
					<ShiftItem key={user.id} name={user.name} start={user.start} end={user.end} totalHr={getTotalHr(user.start, user.end)} totalPrice={getTotalPrice(user.start, user.end)}/>
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
