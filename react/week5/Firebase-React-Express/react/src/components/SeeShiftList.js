import React, { useState, useEffect, useContext } from "react";
import AddShiftForm from "./AddShiftForm";
import {UserContext} from "../App.js"

const SeeShiftList = props => {
  const user = useContext(UserContext);

  if (user && props.role === "employer") {
    return (
      <p>{props.shiftList}</p>
    )
  } else {
    if (user && props.role === "employee") {
      return (
        <AddShiftForm />
      )
    }
    return (
      <h2>Please sign in too see shift list.</h2>
    )
  }
};

export default SeeShiftList;
