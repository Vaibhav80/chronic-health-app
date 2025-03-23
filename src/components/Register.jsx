import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { UserRoleDropdown } from "../constants";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [isRoleValid, setIsRoleValid] = useState(null);
  const [role, setRole] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setIsRoleValid(!!role);
  };

  const onRoleChange = (event) => {
    event.preventDefault();
    setIsRoleValid(!!event.target.value);
    setRole(event.target.value);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h1 className="mb-3">Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Control type="text" placeholder="Email" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Control type="text" placeholder="Password" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom05">
                <Form.Control
                  type="text"
                  placeholder="Confirm Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Passwords doesn't match.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom06">
                <Form.Select isValid={isRoleValid} onChange={onRoleChange}>
                  <option value={null}>Select</option>
                  {UserRoleDropdown.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Role.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
