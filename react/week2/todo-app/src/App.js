import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import todoItems from "./todoItems.json";
import randomText from "./randomText";

function App() {
	const [myTodoList, setTodos] = useState([...todoItems]);

	const addTodo = () => {
		setTodos([
			...myTodoList,
			{
				id: myTodoList.length + 1,
				description: randomText(15)
			}
		]);
	};

	const deleteTodo = id => {
		setTodos([...myTodoList.filter(item => item.id !== id)]);
	};

	const changeTodoStatus = id => {
		setTodos(
			myTodoList.map(item =>
				item.id === id ? { ...myTodoList, completed: !item.completed } : item
			)
		);
	};

	return (
		<TodoList
			items={myTodoList}
			deleteTodo={deleteTodo}
			changeTodoStatus={changeTodoStatus}
			addTodo={addTodo}
		/>
	);
}

export default App;
