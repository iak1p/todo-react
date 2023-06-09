import { memo } from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import "./AppStyle.css";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </>
  );
};

export default memo(App);
