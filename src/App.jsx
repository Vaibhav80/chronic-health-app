import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/DashBoard";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";
import Messages from "./components/Messages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
