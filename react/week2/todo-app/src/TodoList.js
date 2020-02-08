import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, deleteTodo, changeTodoStatus, addTodo }) {
	const list = items.map(item => {
		return (
			<TodoItem
				key={item.id}
				id={item.id}
				description={item.description}
				completed={item.completed}
				deleteTodo={deleteTodo}
				changeTodoStatus={changeTodoStatus}
			/>
		);
	});

	if (list.length === 0) {
		return (
			<div className="todo">
				<header className="todo-header">
					<p>Gizem's Todo List</p>
				</header>
				<button onClick={addTodo}>Add todo</button>
				<p class="center-text">No items</p>
			</div>
		);
	}

	return (
		<div className="todo">
			<header className="todo-header">
				<p>Gizem's Todo List</p>
			</header>
			<button onClick={addTodo}>Add todo</button>
			{list}
		</div>
	);
}

export default TodoList;
