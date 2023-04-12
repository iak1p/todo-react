import { useSelector } from "react-redux";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const items = useSelector((state) => state.items.data);

  return (
    <>
      <div>
        <Header />
        <AppRoutes items={items} />
      </div>
    </>
  );
}

export default App;
