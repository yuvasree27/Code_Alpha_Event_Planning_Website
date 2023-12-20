import React, { useState } from "react";

const RSVP = () => {
  const [rsvpStatus, setRsvpStatus] = useState("Not Responded");

  const handleRsvp = (status) => {
    setRsvpStatus(status);
  };

  return (
    <div className="RSVP-container">
      <h2>RSVP Functionality</h2>
      <p>Your RSVP Status: {rsvpStatus}</p>

      <button className="btn-container" onClick={() => handleRsvp("Going")}>RSVP Going</button>
      <button className="btn-container" onClick={() => handleRsvp("Not Going")}>RSVP Not Going</button>
      <button className="btn-container" onClick={() => handleRsvp("Not Responded")}>Reset RSVP</button>
    </div>
  );
};

export default RSVP;