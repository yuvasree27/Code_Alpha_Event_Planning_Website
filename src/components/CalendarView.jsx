import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "events");
        const eventsSnapshot = await getDocs(eventsCollection);
        const eventsData = eventsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="CalendarView">
      <h2>View Calendar</h2>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        calendarClassName="calendar-with-dots" 
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div>
            <button onClick={decreaseMonth}>{'<'}</button>
            <span>{date.toLocaleDateString()}</span>
            <button onClick={increaseMonth}>{'>'}</button>
          </div>
        )}
        renderDayContents={(day, dateEvents) => {
          const eventDot = dateEvents.length > 0 ? <div className="event-dot" /> : null;
          return (
            <div>
              <span>{day}</span>
              {eventDot}
            </div>
          );
        }}
      />

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarView;