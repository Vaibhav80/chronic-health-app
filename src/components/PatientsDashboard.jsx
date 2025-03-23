import React from "react";
import { Table } from "react-bootstrap";
import { useGetPatientQuery } from "../../store/apiSlice";

const PatientsDashboard = () => {
  const { data: patients, isFetching } = useGetPatientQuery();

  if (isFetching) {
    return <p>Loading</p>;
  }

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
            <tr key={item.id}>
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
