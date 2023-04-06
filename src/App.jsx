import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  let id = 0;
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();

  const a = () => {
    id++;
    let arr = items;
    arr.push({ id: id, name: id });
    dispatch({ type: "SET_ITEMS", payload: arr });
  };

  return (
    <>
      <div className="container">
        <Header />
        <AppRoutes onClick={a} />
      </div>
    </>
  );
}

export default App;
