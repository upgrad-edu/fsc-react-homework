function Todo(props) {
  const onDelete = () => props.onDelete(props.id);

  return (
    <div
      className="task-item"
      style={{
        margin: "20px 5px",
        padding: 7,
        border: "1px solid #888",
        borderRadius: 3
      }}
    >
      <h5>{props.title}</h5>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default function Todos(props) {
  return (
    <div>
      <h3>My Tasks</h3>
      {props.tasks.map((task, index) => {
        return (
          <Todo
            key={index}
            id={index}
            title={task}
            onDelete={props.deleteTask}
          />
        );
      })}
    </div>
  );
}
