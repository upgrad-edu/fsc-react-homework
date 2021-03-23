import { connect } from "react-redux";

import EditTodo from "./EditTodo";
import TodoList from "./Todos";

function App(props) {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <EditTodo addTask={props.addTask} />
      <TodoList tasks={props.tasks} deleteTask={props.deleteTask} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTask: (taskTitle) =>
      dispatch({
        type: "ADD_TASK",
        payload: taskTitle
      }),
    deleteTask: (id) =>
      dispatch({
        type: "DELETE_TASK",
        payload: id
      })
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
