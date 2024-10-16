import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import Registration from "./Components/registration";
import withAuth from "./WithAuth"; // HOC for protecting routes

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Protected Home Page */}
        {/* Using the withAuth HOC to protect the Home route */}
        <Route path="/home" element={withAuth(Home)} />

        {/* Registration Page */}
        <Route path="/registration" element={<Registration />} />

        {/* Redirect any other routes to the login page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
