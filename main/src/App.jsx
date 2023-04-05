import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [mod, setMod] = useState([]);
  let id = 0;

  const a = () => {
    console.log(1);
    id++;
    let arr = mod;
    arr.push({ id: id, name: id });
    setMod(mod);
    console.log(mod);
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
