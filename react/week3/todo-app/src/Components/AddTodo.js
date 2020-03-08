import React, { useState, useRef } from "react";
import uuidv4 from 'uuid/v4';

function AddTodo({ addTodo }) {
	const formRef = useRef(null);

	const [description, setDescription] = useState("");
	const [deadline, setDeadline] = useState("");
	const [id, setId] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
	
	

	const submitForm = (e) => { 
		e.preventDefault();
		if(description && deadline){
			setId(uuidv4());
			addTodo(id, description, deadline);
			setSuccessMessage("Todo Added");
			setErrorMessage("");
		}else {
			setSuccessMessage("");
			setErrorMessage("please fill in the todo description and the deadline fields")
		}
		setDescription("");
		setDeadline("")
	}

	return (
		<div className="add-todo-form">
			<form ref={formRef}>
				<label>
					Todo description
					<input
						type="text"
						name="description"
						value={description}
						placeholder=""
						onChange={event => {
							setSuccessMessage("");
							setDescription(event.target.value)
						}}
					/>
				</label>
				<br />
				<label>
					Deadline
					<input
						type="date"
						name="date"
						selected={deadline}
						onChange={event => {
							setSuccessMessage("");
							setDeadline(event.target.value);
						}}
					/>
				</label>
				<br />
				<button onClick={(e) => submitForm(e) }>Add todo</button>
			</form>
			{errorMessage !== '' && <span className="red">{errorMessage}</span>}
			{successMessage !== '' && <span className="green">{successMessage}</span>}
		</div>
	);
}

export default AddTodo;
