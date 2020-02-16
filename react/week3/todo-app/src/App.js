import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
	const [myTodoList, setTodos] = useState([]);

	useEffect(() => {
		fetch(
			"https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
		)
			.then(res => res.json())
			.then(todoList => setTodos(todoList));
	}, []);

	const addTodo = (id, value, deadline) => {
		setTodos([
			...myTodoList,
			{
				id: id,
				description: value,
				deadline
			}
		]);
	};

	const deleteTodo = id => {
		console.log(myTodoList);
		// console.log([...myTodoList].find(item => item.id === id));

		setTodos([...myTodoList].find(item => item.id === id));
	};

	const changeTodoStatus = id => {
		setTodos(
			myTodoList.map(item =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		);
	};

	const editTodo = (id, value) => {
		setTodos(
			myTodoList.map(todoItem => {
				if (todoItem.id === id) {
					return { ...todoItem, description: value };
				}
				return todoItem;
			})
		);
	};

	const descriptionChange = event => {
		return setTodos({ [event.target.name]: event.target.value });
	};

	return (
		<TodoList
			items={myTodoList}
			deleteTodo={deleteTodo}
			changeTodoStatus={changeTodoStatus}
			addTodo={addTodo}
			editTodo={editTodo}
			descriptionChange={descriptionChange}
		/>
	);
}

export default App;
