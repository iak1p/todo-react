import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialStore = {
  items: {
    data: [],
  },
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: { ...state.items, data: action.payload } };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
