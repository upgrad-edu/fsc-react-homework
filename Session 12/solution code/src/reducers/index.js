export default function (state = { todos: [] }, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTodos = [...state.todos, action.payload];
      return {
        todos: newTodos
      };
    }
    case "DELETE_TASK": {
      const newTodos = state.todos.filter((todo, i) => {
        return i !== action.payload;
      });
      return {
        todos: newTodos
      };
    }
    default:
      return state;
  }
}
