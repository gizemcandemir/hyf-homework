import React, { useState, useEffect, useContext } from "react";
import AddShiftForm from "./AddShiftForm";
import ShiftItem from "./ShiftItem";
import { UserContext } from "../App.js";

const ShiftList = ({ 
  visibility, setVisibility, role, shiftItems, addShiftItem, deleteShiftItem 
}) => {
	const user = useContext(UserContext);

	if (user && role === "employer") {
		return <p>{shiftItems}</p>;
	} else {
		if (user && role === "employee") {
			return (
				<div>
					<AddShiftForm />
					<ShiftItem />
				</div>
			);
		}
		return <h2>Please sign in too see shift list.</h2>;
	}
};

export default ShiftList;
