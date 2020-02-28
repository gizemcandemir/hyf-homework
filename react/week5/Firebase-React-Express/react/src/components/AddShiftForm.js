import React, {useContext} from 'react'
import {UserContext} from "../App.js"

const AddShiftForm = () => {
  const user = useContext(UserContext);
  if (user) {
    return (
      <div className='shift-form'>
        <form>
          {/* <label>Hello {user}</label> */}
          <br />
          <input type="text" value="gizem"/> 
        </form>
        <button>Add shift</button>
      </div>
    )
  } return (
    <h2>Please sign in to add shift.</h2>
  )
}

export default AddShiftForm