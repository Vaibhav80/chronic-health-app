import React from "react";
import { patients } from "../mocks/patients";
import { Table } from "react-bootstrap";

const PatientsDashboard = () => {
  return (
    <div class="d-flex flex-column pl-2 pr-2 pt-3">
      <h4>Patients</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Blood Sugar</th>
            <th>Body Temperature</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((item) => (
            <tr>
              <td>{item.email}</td>
              <td>{item.bloodSugar}</td>
              <td>{item.temperature}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientsDashboard;
