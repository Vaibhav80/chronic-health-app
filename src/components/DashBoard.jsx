import React from "react";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";

export const Dashboard = () => {
  return (
    <div className="d-flex">
      <SideNavbar />

      <div className="container-fluid p-4">
        <h2>Welcome, David</h2>

        <div className="card mt-3 p-3 shadow-sm">
          <h4>Health Metrics</h4>
          <div className="d-flex justify-content-around mt-3">
            <div className="text-center">
              <h5>82.83 bpm</h5>
              <p>Heart Rate</p>
            </div>

            <div className="text-center">
              <h5>33.90°C</h5>
              <p>Body Temperature</p>
            </div>

            <div className="text-center">
              <h5>114.77 mg/dL</h5>
              <p>Blood Glucose</p>
            </div>
          </div>
        </div>

        <div className="card mt-4 p-3 shadow-sm">
          <h4>Health Tip of the Day</h4>
          <p>
            Stay hydrated! Aim to drink at least 8 glasses of water per day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
