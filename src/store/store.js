import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialStore = {
  items: {
    data: [],
  },
  id: 0,
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: { ...state.items, data: action.payload } };
    case "SET_ID":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
