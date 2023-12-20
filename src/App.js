import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";
import Home from "./components/Home";
import EventForm from "./components/EventForm";
import RSVP from "./components/RSVP";
import CalendarView from "./components/CalendarView";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/authdetails" element={<AuthDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-event" element={<EventForm />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;