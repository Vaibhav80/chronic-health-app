import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email address.");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false || emailError) {
      event.stopPropagation();
    } else {
      // Simulating API request
      console.log("Password reset link sent to:", email);
      setSubmitted(true);
    }

    setValidated(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "22rem" }}>
        <div className="card-body">
          <div className="text-center">
            <i className="bi bi-lock-fill" style={{ fontSize: "3rem", color: "#0d6efd" }} />
          </div>

          {submitted && <Alert variant="success">Check your email for the reset link</Alert>}

          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={!email || emailError}>
                         Reset Password
            </Button>
          </Form>

          <div className="mt-3 text-center">
            <Link to="/login" className="text-primary">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
