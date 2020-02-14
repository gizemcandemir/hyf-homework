import React, {useState} from "react";
import Border from "./Border";

function TodoItem({
	id,
	description,
	completed,
	deleteTodo,
	editTodo,
	changeTodoStatus,
	deadline
}) {

	const [edit, setEdit] = useState(false);
	const [newValue, setNewValue] = useState(description);

	const editingItem = id => {
		if (edit) 
		editTodo(id, newValue);
		setEdit(!edit)
	}
	
	return (
		<Border>
			<li className={`${completed ? "completed" : ""}`}>
				{edit ? (
					<input
						type="text"
						value={description}
						onChange={event => setNewValue(id, event.target.value)}
					/>
				) : (
					<>
						{description} | {deadline}
					</>
				)}
				<input
					type="checkbox"
					value={completed}
					onChange={() => changeTodoStatus(id)}
				/>
				<button className="item-button" onClick={() => deleteTodo(id)}>
					Delete
				</button>
				<button
					className="item-edit-button"
					onClick={() => editingItem(id, description)}
				>
					{!edit ? "Edit" : "Update"}
				</button>
			</li>
		</Border>
	);
}

export default TodoItem;
