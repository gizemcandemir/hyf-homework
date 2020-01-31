import React from "react";
import "./App.css";
import myTodoList from "./todoItems.json";

function App(props) {
	return <TodoList titles={myTodoList} />;
}

function TodoList(props) {
	const list = props.titles.map(data => {
		return (
			<TodoItem
				title={data.title}
				when={data.when}
				status={data.status}
				key={data.id}
			/>
		);
	});
	return (
		<div className="App">
			<header className="todo-list-header">
				<p>Gizem's Todo List</p>
			</header>
			{list}
		</div>
	);
}

function TodoItem(props) {
	return (
		<p>
			Task: {props.title}, due on: {props.when}
		</p>
	);
}

export default App;
