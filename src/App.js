import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {/* /* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}

      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : currentForm === "register" ? (
        <Register onFormSwitch={toggleForm} />
      ) : currentForm === "dashboard" ? (
        <Dashboard onFormSwitch={toggleForm} />
      ) : null}
    </div>
  );
}

export default App;
