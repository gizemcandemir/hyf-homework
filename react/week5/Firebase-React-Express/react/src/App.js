import React, { createContext, useState, useEffect } from "react";
import "./css/main.css";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import ShiftList from "./components/ShiftList";
import AddShiftForm from "./components/AddShiftForm";
import firebaseInst from "./helpers/firebase.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const UserContext = createContext(null);
const EmployeeContext = createContext(null);

function App() {
	const [userState, setUserState] = useState(null);
	const [userRole, setUserRole] = useState("employee");
	const [userCanView, setUserCanView] = useState(false);
	const [shiftItems, setShiftItems] = useState([]);
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		fetch(
			"https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
		)
			.then(fetchedUserObject => fetchedUserObject.json())
			.then(shiftItems => setShiftItems);
	}, []);

	useEffect(() => {
		setVisibility(false);
		firebaseInst.init();
		firebaseInst.getAuth().onAuthStateChanged(function(user) {
			if (user) {
				setUserState(user);
				setUserRole("employer");
				console.log(shiftItems);
				setShiftItems([...shiftItems, "shift 3"]);
				console.log(shiftItems);
			} else {
				setUserState(null);
			}
		});
	}, []);

	const addShiftItem = () => {
		return <p>add function</p>;
	};

	const deleteShiftItem = () => {
		return <p>delete function</p>;
	};

	return (
		<Router>
			<UserContext.Provider value={userState}>
				<Navbar />
				<Header />
				<Switch>
					<Route path="/" exact component={Main} />					
					<Route path="/shifts">
						<ShiftList
							visibility={visibility}
							setVisibility={setVisibility}
							role={userRole}
							shiftItems={shiftItems}
							addShiftItem={addShiftItem}
							deleteShiftItem={deleteShiftItem}
						/>
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
