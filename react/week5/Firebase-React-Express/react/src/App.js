import React, { createContext, useState, useEffect } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import SeeShiftList from "./components/SeeShiftList";
import AddShiftForm from "./components/AddShiftForm";
import firebaseInst from "./helpers/firebase.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const UserContext = createContext(null);
const EmployeeContext = createContext(null);

function App() {
	const [userState, setUserState] = useState(null);
  const [userRole, setUserRole] = useState("employee");
  const [userCanView, setUserCanView] = useState(false); 
  const [shiftList, setShiftList] = useState(["shift 1", "shift 2"])
  const [visibility, setVisibility] = useState(false)

	useEffect(() => {
    setVisibility(false)
		firebaseInst.init();
		firebaseInst.getAuth().onAuthStateChanged(function(user) {
			if (user) {
        setUserState(user);
        setUserRole("employer")
        console.log(shiftList)
        setShiftList([...shiftList, "shift 3"])
        console.log(shiftList)
			} else {
				setUserState(null);
			}
		});
	}, []);

	return (
		<Router>
			<UserContext.Provider value={userState}>
				<Header>
					<nav>
						<ul>
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/see-shifts">See Current Shift List</Link>
							</li>
							<li>
								<Link to="/add-shift">Add Shift</Link>
							</li>
						</ul>
					</nav>
				</Header>
				<Switch>
					<Route path="/home">
						<Main />
					</Route>
					<Route path="/see-shifts">
						<SeeShiftList visibility={visibility} setVisibility={setVisibility} role={userRole} shiftList={shiftList}/>
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
