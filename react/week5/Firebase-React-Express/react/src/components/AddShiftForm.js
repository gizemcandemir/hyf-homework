import React, {useState, useContext} from 'react'
import {UserContext} from "../App.js"
import firebaseInst from "../helpers/firebase.js";

const AddShiftForm = () => {

  const [employeeName, setEmployeeName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employeeName && startTime && endTime) {
      // const token = await firebaseInst.getAuth().currentUser.getIdToken(); // NOT USED??
      const header = {
        "Content-Type": "application/json",
        //authorization: `Bearer ${token}` // NOT USED??
      };
      fetch("http://localhost:5000/shifts", {
        method: "POST",
        headers: header,
        body: JSON.stringify({
          employeeName,
          startTime,
          endTime
        })
      })
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(error => setMessage(error))
    }
  }

  const user = useContext(UserContext);
  if (user) {
    return (
      <div className='shift-form'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your name"
            value={employeeName}
            onChange={e => setEmployeeName(e.target.value)}
          /><br />
          <input
            type="date"
            name="startTime"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
          /><br />
          <input 
            type="date"
            name="endTime"
            value={endTime}
            onChange={e => setEndTime(e.target.value)}
          /><br />
          <button>Add shift</button>
        </form>
      </div>
    )
  } return (
    <h2>Please sign in to add shift.</h2>
  )
}

export default AddShiftForm