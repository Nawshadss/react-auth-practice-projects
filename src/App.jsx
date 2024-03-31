import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Outlet></Outlet>
    </>
  );
}

export default App;
