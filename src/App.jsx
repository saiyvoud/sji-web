import { useState } from "react";
import "./App.css";
import RouterPath from "./router/Router";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <RouterPath />
    </>
  );
}

export default App;
