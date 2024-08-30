import React from "react";
import Registation from "./pages/Registation/Registation.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer /> <Registation />
    </div>
  );
};

export default App;
