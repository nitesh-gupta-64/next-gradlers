"use client";
import { AppContext } from "@/Context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  const { events } = useContext(AppContext);
  const [upcoming, setUpcoming] = useState([]);
  const [show, setShow] = useState({});

  // Function to increase the time by one hour
  const increaseTimeByOneHour = (timeStr) => {
    if (!timeStr) return ""; // Ensure timeStr is not undefined or empty
    const timeParts = timeStr.split(":");
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    hours = (hours + 1) % 24;

    return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`;
  };

  useEffect(() => {
    if (events && events.length > 0) {
      const upcomingEvents = events.filter(
        (eve) => new Date(eve.Date.toDate()) >= new Date()
      );
      const sortedUEvents = [...upcomingEvents].sort(
        (a, b) => new Date(a.Date.toDate()) - new Date(b.Date.toDate())
      );
      setUpcoming(sortedUEvents);
      setShow(sortedUEvents[0]);
    }
  }, [events]);

  return (
    <div className={styles.banner}>
      <main>
        <img src={show.Image} alt="b" />
      </main>
      <main>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "0.6rem",
            paddingLeft: "1rem",
          }}
        >
          <h1
            style={{ fontSize: "50px", lineHeight: "70px", color: "#FECB02" }}
          >
            {show.Category}
          </h1>
        </div>
        <h1
          style={{
            color: "#FECB02",
            fontSize: '30px'
          }}
        >
          INDIA & ABROAD
        </h1>
      </main>
      <div>
        <div>
          <h4 style={{ textTransform: "uppercase" }}>
            {show.Date && new Date(show.Date.toDate()).getDate()}TH{" "}
            {show.Date &&
              new Date(show.Date.toDate()).toLocaleString("default", {
                month: "short",
              })}{" "}
            {show.Date && new Date(show.Date.toDate()).getFullYear()}
          </h4>
          <h4>
            IST {show.Time} - {increaseTimeByOneHour(show.Time)}
          </h4>
        </div>
        <h4>Venue: {show.Location}</h4>
      </div>
    </div>
  );
};

export default Banner;
