import React, { useState } from "react";

const ShiftItem = ({ name, start, end, totalHr, totalPrice }) => {
	return (
		<div className="shift-item">
			<h3>{name}</h3>
			<p>Shift Start: {start}</p>
			<p>Shift End: {end}</p>
			<p>Total Hours: {totalHr}</p>
			<p>Total Price: {totalPrice} kr.</p>
		</div>
	);
};

export default ShiftItem;
