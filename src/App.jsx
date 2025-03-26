import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import RouterPath from "./router/Router";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RouterPath />
    </>
  );
}

export default App;
