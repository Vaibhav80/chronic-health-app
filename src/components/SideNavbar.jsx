import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const SideNavbar =()=>{
    const navigate= useNavigate();

    const onLogout =()=>{
          // navigate back to login once loggged out
          Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, logout!",
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login');
            }
          });
    }
    return (
        <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4>Chronic Health</h4>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard">
                Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/profile">
                    My Profile
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">
                    Health Metrics
                </a>
            </li>
            <li className="nav-item">
                    <Link className="nav-link text-white" to="/messages">
                        Messages
                    </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#" onClick={onLogout}>
                    Logout
                </a>
            </li>
        </ul>
    </div>
    )
}

export default SideNavbar;