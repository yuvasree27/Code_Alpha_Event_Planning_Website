import React from "react";
import { addEventToFirestore } from "../components/YourComponent ";

const YourComponent = () => {
  const handleAddEvent = async () => {

    const eventData = {
      title: "Team Meeting",
      date: "2023-11-15",
      time: "10:00 AM",
      description: "Discuss project updates and plan for the upcoming sprint.",
      
    };

    try {
      await addEventToFirestore(eventData);
      console.log("Event added successfully!");
    } catch (error) {
      console.error("Error adding event to Firestore:", error);
    }
  };

  return (
    <div>
      <button onClick={handleAddEvent}>Add Event to Firestore</button>
    </div>
  );
};

export default YourComponent;