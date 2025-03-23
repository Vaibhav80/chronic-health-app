import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";

const Profile = () => {
  return (
    <div className="d-flex">

      <SideNavbar />
      <div className="container mt-5">
        <div className="card p-4 shadow-sm" style={{ maxWidth: "600px", margin: "auto" }}>
          <h2 className="text-center mb-4">My Profile</h2>
          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <div className="text-center">
                <input type="text" className="form-control mx-auto" style={{ maxWidth: "400px" }} value="David Warner" disabled />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <div className="text-center">
                <input type="email" className="form-control mx-auto" style={{ maxWidth: "400px" }} value="david@hcltech.com" disabled />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Phone Number</label>
              <div className="text-center">
                <input type="text" className="form-control mx-auto" style={{ maxWidth: "400px" }} value="81798776058" disabled />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Date of Birth</label>
              <div className="text-center">
                <input type="text" className="form-control mx-auto" style={{ maxWidth: "400px" }} value="19-04-1997" disabled />
              </div>
            </div>

            <div className="text-center mt-3">
              <button type="button" className="btn btn-primary">Edit Profile</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Profile;
