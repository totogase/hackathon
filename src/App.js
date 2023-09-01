import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/material/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

function App() {
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

  const RenderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dayName = dayNames[date.getDay()];
      days.push(
        <div key={i}>
          {month + 1}/{i}（{dayName}）
          <div>
            <label>Start Time:</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div>
            <label>End Time:</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="all-wrapper">
      <RenderDays />
      {/* <div className="card-list">
        <div className="block-date"></div>
        <div className="block-time-picker"></div>
        <div className="block-total-worktime"></div> */}
      {/* // </div> */}
    </div>
  );
}

export default App;
