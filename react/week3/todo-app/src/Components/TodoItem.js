import React, { useState } from "react";
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
		if (edit) editTodo(id, newValue);
		setEdit(!edit);
	};
	return (
		<Border>
			<li className={`${completed ? "completed" : ""}`}>
				{edit ? (
					<input
						type="text"
						value={newValue}
						onChange={event => setNewValue(event.target.value)}
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

function areEqual(prevProps, nextProps) {
	return (
		prevProps.description === nextProps.description &&
		prevProps.completed === nextProps.completed
	);
}

export default React.memo(TodoItem, areEqual);
// export default TodoItem;
