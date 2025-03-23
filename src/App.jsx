import './App.css'
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/DashBoard';

function App() {
  return (
      <div className="App">
        <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </Router>
      </div>
  )
}

export default App
