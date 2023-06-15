import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./Dashboard/Main";
import Login from "./login/Login";
import Register from "./register/Register";

function App() {
  const dashboard = sessionStorage.getItem("dashboard");
  console.log("dashboarddd????", dashboard);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={dashboard == "true" ? <Main /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
