import React, { createContext, useState, useEffect } from "react";
import "./css/main.css";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import ShiftList from "./components/ShiftList";
import AddShiftForm from "./components/AddShiftForm";
import firebaseInst from "./helpers/firebase.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const UserContext = createContext(null);
 
function App() {
	const [userState, setUserState] = useState(null);

	useEffect(() => {
		firebaseInst.init();
		firebaseInst.getAuth().onAuthStateChanged(function(user) {
			if (user) {
				setUserState(user);
			} else {
				setUserState(null);
			}
		});
	}, []);

	return (
		<Router>
			<UserContext.Provider value={userState}>
				<Navbar />
				<Header />
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/shifts">
						<ShiftList />
					</Route>
					<Route path="/add-shift">
						<AddShiftForm />
					</Route>
				</Switch>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
export { UserContext };
