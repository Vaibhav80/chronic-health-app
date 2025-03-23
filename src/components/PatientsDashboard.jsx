import React from "react";
import { Table } from "react-bootstrap";
import { useGetPatientQuery } from "../../store/apiSlice";
import SideNavbar from "./SideNavbar";

const PatientsDashboard = () => {
  const { data: patients, isFetching } = useGetPatientQuery();

  return (
    <div className="d-flex">
      <SideNavbar />

      <div className="container-fluid p-4">
        <div className="d-flex flex-column pl-2 pr-2 pt-3">
          <h4>Patients</h4>
          {isFetching ? (
            <span>Loading...</span>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientsDashboard;
