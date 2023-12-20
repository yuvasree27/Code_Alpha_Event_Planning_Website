import React from "react";
import { Link } from "react-router-dom";
import '../index.css'; 

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Event Planner App</h1>
      <p>Plan and manage your events effortlessly!</p>

      <div className="links-container">
        <Link to="/create-event">Create Event</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/calendar">View Calendar</Link>
      </div>
    </div>
  );
};

export default Home;