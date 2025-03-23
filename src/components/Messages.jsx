import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "./SideNavbar";

const messagesData = [
  {
    id: 1,
    sender: "HCL Hospital",
    message: "Your test results are available. Please check...",
    fullMessage: "Your test results are available. Please visit our online portal to download the full report.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "HCL Pharmacy",
    message: "Your prescription is ready for pickup...",
    fullMessage: "Your prescription for blood pressure medication is ready for pickup at MediCare Pharmacy.",
    time: "09:15 AM",
  },
  {
    id: 3,
    sender: "HCL Wellness Clinic",
    message: "Reminder: Your annual checkup is scheduled...",
    fullMessage: "Reminder: Your annual checkup is scheduled for March 25 at 10:00 AM. Please confirm your appointment.",
    time: "Yesterday",
  },
];

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="d-flex">
      <SideNavbar/>

      <div className="container-fluid p-4">
        <h2>Messages</h2>
        <div className="row">
          <div className="col-md-4 border-end">
            <div className="list-group">
              {messagesData.map((msg) => (
                <button
                  key={msg.id}
                  className={`list-group-item list-group-item-action ${selectedMessage?.id === msg.id ? "active" : ""}`}
                  onClick={() => setSelectedMessage(msg)}
                >
                  <div className="d-flex justify-content-between">
                    <strong>{msg.sender}</strong>
                    <small>{msg.time}</small>
                  </div>
                  <p className="mb-0 text-truncate">{msg.message}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-8">
            {selectedMessage ? (
              <div className="card p-3">
                <h5>{selectedMessage.sender}</h5>
                <p className="text-muted">{selectedMessage.time}</p>
                <p>{selectedMessage.fullMessage}</p>
                <button className="btn btn-primary">Reply</button>
              </div>
            ) : (
              <p className="text-center text-muted">Select a message to view</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
