import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import Header from "./Header";

function TodoList({ items, deleteTodo, changeTodoStatus, addTodo, editTodo, descriptionChange }) {
	const list = items.map(item => {
		return (
			<TodoItem
				key={item.id}
				id={item.id}
				description={item.description}
				completed={item.completed}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
				changeTodoStatus={changeTodoStatus}
				deadline={item.deadline}
				descriptionChange={descriptionChange}
			/>
		);
	});

	if (list.length === 0) {
		return (
			<div className="todo">
				<Header />
				<AddTodo addTodo={addTodo}/>
				<p className="center-text">No items</p>
			</div>
		);
	}

	return (
		<div className="todo">
			<Header />
			<AddTodo addTodo={addTodo}/>
			{list}
		</div>
	);
}

export default TodoList;
