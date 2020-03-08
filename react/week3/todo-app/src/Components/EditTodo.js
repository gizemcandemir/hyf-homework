import React, { useState } from "react";

function EditTodo({ editTodo }) {
	const [value, setValue] = useState("");
	const [deadline, setDeadline] = useState("");
  const [date, setDate] = useState("");

	return (
		<div>
			<p>Hello</p>
		</div>
	);
}

export default EditTodo;
