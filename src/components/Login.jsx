import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Login =()=>{
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({email: "",password: ""});
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const onSubmit = (event)=>{
        event.preventDefault();
        event.preventDefault();
        const form = event.currentTarget;
    
        if (!form.checkValidity()) {
          event.stopPropagation();
        } else {
          navigate('/dashboard')

        }
        setValidated(true);
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "22rem" }}>
        <div className="card-body">
          <div className="text-center">
            <i className="bi bi-person-circle" style={{ fontSize: "3rem", color: "#0d6efd" }} />
            <h2 className="mt-2">Login</h2>
          </div>

          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Password is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          <div className="mt-3 text-center">
            <Link to="/forgot-password" className="text-primary">Forgot password? </Link>
          </div>

          <div className="mt-3 text-center">
            New User? <Link to="/register" className="text-primary">Register here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;