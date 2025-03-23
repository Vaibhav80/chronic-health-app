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
import PatientsDashboard from "./components/PatientsDashboard";
import HealthTopics from "./components/HealthTopics";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/patients" element={<PatientsDashboard />} />
          <Route path="/health-topics" element={<HealthTopics />} />
        </Route>

        {/* Invalid routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
