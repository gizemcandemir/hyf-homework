import React from "react";
import "./App.css";
import myTodoList from "./todoItems.json";

function App(props) {
	return (
		<div>
			<TodoList titles={myTodoList} />
		</div>
	);
}

function TodoList(props) {
	const [state, setState] = React.useState("show-not-done");


	function changeState() {
    console.log("hello");
		setState("show-done");
	}

  function ShowCompleted(props) {
		return <button onClick={() => changeState()}>Show Completed Task</button>;
  }
  
	const list = props.titles.map(data => {
		if (data.status == "not-done") {
			return (
        <TodoItem
          title={data.title}
          when={data.when}
          status={data.status}
          key={data.id}
        />
      )
		} else if (state == "show-not-done") {
      return (
        <TodoItem
          title={data.title}
          when={data.when}
          status={data.status}
          key={data.id}
        />
      )
    }
	});
	return (
		<div className="App">
			<header className="todo-list-header">
				<p>Gizem's Todo List</p>
			</header>
			{list}
			<ShowCompleted status={props.status} />
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

export default TodoList;
