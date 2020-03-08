import React, {useState, useEffect} from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import Header from "./Header";

const TodoList = (props) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch(
			"https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
		)
			.then(res => res.json())
			.then(todoList => setTodos(todoList));
	}, []);

	const addTodo = (id, description, deadline) => {
		setTodos([
			...todos,
			{
				id,
				description,
				deadline
			}
		]);
	};

	
	const deleteTodo = id => {
		setTodos(prevState => prevState.filter(todo =>{ 
			return todo.id !== id
		}));
	
	}

	const editTodoItem = (id, textValue, completed) => {
		const todosArray = todos;
		todos.filter((todoItem, index) => {
			if (todoItem.id === id) {
					return todosArray[index].description = textValue;
			}
			return todoItem;
		});
		setTodos(todosArray);
	};

	return (
		<div className="todo">
			<Header />
			<AddTodo addTodo={addTodo} />
			{todos.length ? 
				todos.map(todo => {
					return (
						<TodoItem
							key={todo.id}
							todo={todo}
							deleteTodo={deleteTodo}
							editTodoItem={editTodoItem}
						/>
					);
				}) : <p className="center-text">No items</p>
			}
		</div>
	);
}

export default TodoList;
