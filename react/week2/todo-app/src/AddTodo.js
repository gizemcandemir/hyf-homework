import React, { useState } from "react";
import addTodo from "./App";
import todoItems from "./todoItems.json";

function AddTodo({ addTodo }) {
	const [value, setValue] = useState("");
	const [deadline, setDeadline] = useState("");
	const [date, setDate] = useState("");

	return (
		<div className="add-todo-form">
			<form onSubmit="">
				<label>
					Todo description
					<input
						type="text"
						name="description"
						value={value}
						placeholder=""
						onChange={event => setValue(event.target.value)}
					/>
				</label>
				<br />
				<label>
					Deadline
					<input
						type="date"
						name="date"
						selected={date}
						onChange={event => {
							setDate(event);
							setDeadline(event);
						}}
					/>
				</label>
			</form>
			<br />
			<button onClick={() => addTodo(value, deadline)}>Add todo</button>
		</div>
	);
}

export default AddTodo;
