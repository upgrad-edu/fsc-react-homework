import { useState } from "react";

export default function EditTodo(props) {
  const [title, setTitle] = useState("");
  const updateTitle = (event) => setTitle(event.target.value);

  const addTask = () => props.addTask(title);

  return (
    <div className="todo-form">
      <input type="text" onChange={updateTitle} />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
