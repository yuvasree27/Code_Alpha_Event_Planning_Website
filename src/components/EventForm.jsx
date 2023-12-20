import React, { useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "events"), (snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
    });

    return () => unsubscribe();
  }, []);

  const handleCreateEvent = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "events"), {
        name: eventName,
        date: eventDate.toISOString(), // Store date as a string in ISO format
      });
      console.log("Event created with ID:", docRef.id);

      setEventName("");
      setEventDate(new Date());
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteDoc(doc(db, "events", eventId));
      console.log("Event deleted with ID:", eventId);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <DatePicker selected={eventDate} onChange={(date) => setEventDate(date)} />
        <button type="submit">Create Event</button>
      </form>

      <h2>Delete Event</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {new Date(event.date).toLocaleDateString()}
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventForm;