import React from "react";

function TodoItem({
	id,
	description,
	completed,
	deleteTodo,
	changeTodoStatus
}) {
	return (
		<li className={`${completed ? "completed" : ""}`}>
			{description}
			<input
				type="checkbox"
				name="completed"
				value={completed}
				onChange={() => changeTodoStatus(id)}
			/>
			<button className="item-button" onClick={() => deleteTodo(id)}>
				Delete
			</button>
		</li>
	);
}

export default TodoItem;
