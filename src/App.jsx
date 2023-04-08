import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
