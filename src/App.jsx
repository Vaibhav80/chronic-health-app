import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/DashBoard';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
