import React, { useState } from "react";

const TodoItem = props => {
	const [edit, setEdit] = useState(false);
	const [newValue, setNewValue] = useState("");
	const [completed, setCompleted] = useState(false);

	const {	todo, deleteTodo, editTodoItem } = props;
	return (
		<div className="todo-item">
			<li 
				className={completed ? "completed" : "" }
			>
				{edit ? (
					<input
						type="text"
						value={newValue}
						onChange={event => setNewValue(event.target.value)}
					/>
				) : (
					<div className="todo-info">
						{todo.description} | {todo.deadline}
					</div>
				)}
				<input
					type="checkbox"
					checked={completed}
					onChange={() => setCompleted(!completed)}
				/>
				<button className="item-button" onClick={() => deleteTodo(todo.id)}>
					Delete
				</button>
				<button
					className="item-edit-button"
					onClick={() => {
						edit && editTodoItem(todo.id, newValue);
						setEdit(!edit);
					}}
				>
					{!edit ? "Edit" : "Update"}
				</button>
			</li>
		</div>
	);
}

function areEqual(prevProps, nextProps) {
	return (
		prevProps.description === nextProps.description &&
		prevProps.completed === nextProps.completed
	);
}

export default React.memo(TodoItem, areEqual);
