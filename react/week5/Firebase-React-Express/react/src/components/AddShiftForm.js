import React, {useContext} from 'react'
import {UserContext} from "../App.js"

const AddShiftForm = () => {
  const user = useContext(UserContext);
  if (user) {
    return (
      <div className='shift-form'>
        <form>
          <input type="text" /><br />
          <input type="datetime-local" /><br />
          <input type="datetime-local" />
        </form>
        <button>Add shift</button>
      </div>
    )
  } return (
    <h2>Please sign in to add shift.</h2>
  )
}

export default AddShiftForm