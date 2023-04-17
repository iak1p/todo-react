import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialStore = {
  todos: [],
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "SET_TODOS":
      return { ...state, todos: action.payload };
    case "DELETE_TODOS":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed !== true),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_ACTIVE":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
