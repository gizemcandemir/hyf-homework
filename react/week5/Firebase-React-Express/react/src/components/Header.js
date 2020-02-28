
import React from 'react';
import GoogleOAuth from "./HeaderContent/GoogleOAuth"
import "../css/header.css"
import firebaseInst from "../helpers/firebase.js";

function Header (props) {
    return (
        <div className="header">
            <h2>Employee Shift List</h2>
            <GoogleOAuth firebase={firebaseInst}/>
            {props.children}
        </div>
    )
}

export default Header;