import React from "react";
import Border from "./Border";

function TodoItem({
	id,
	description,
	completed,
	isEditing,
	deleteTodo,
	editTodo,
	changeTodoStatus,
	deadline,
	descriptionChange
}) {
	
	return (
		<Border>
			<li className={`${completed ? "completed" : ""}`}>
				{isEditing ? (
					<input
						type="text"
						name="description"
						// ref={inputRef}
						value={description}
						onChange={event => descriptionChange(id, event.target.value)}
					/>
				) : (
					<>
						{description} | {deadline}
					</>
				)}
				<input
					type="checkbox"
					name="completed"
					value={completed}
					onChange={() => changeTodoStatus(id)}
				/>
				<button className="item-button" onClick={() => deleteTodo(id)}>
					Delete
				</button>
				<button
					className="item-edit-button"
					onClick={() => editTodo(id, description)}
				>
					{!isEditing ? "Edit" : "Update"}
				</button>
			</li>
		</Border>
	);
}

export default TodoItem;
