"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Events.module.css";
import { AppContext } from "@/Context/AppContext";
import Link from "next/link";

const Events = () => {
  const [clicked, setClicked] = useState("up");
  const { events } = useContext(AppContext);
  const [upcoming, setUpcoming] = useState([]);
  const [recent, setRecent] = useState([]);
  const [show, setShow] = useState({});

  const [time, setTime] = useState('');

  // Function to increase the time by one hour
  const increaseTimeByOneHour = (timeStr) => {
    if (!timeStr) return ''; // Ensure timeStr is not undefined or empty
    const timeParts = timeStr.split(':');
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    hours = (hours + 1) % 24;

    return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;
  };

  // Effect to update the time after the component mounts
  useEffect(() => {
    setTime(increaseTimeByOneHour("11:36"));
  }, []);

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
      const recentEvents = events.filter(
        (eve) => new Date(eve.Date.toDate()) < new Date()
      );
      const sortedREvents = [...recentEvents].sort(
        (b, a) => new Date(a.Date.toDate()) - new Date(b.Date.toDate())
      );
      setRecent(sortedREvents);
    }
  }, [events]);

  useEffect(() => {
    if (recent && recent.length > 0 && upcoming && upcoming.length > 0) {
      if (clicked === "re") {
        setShow(recent[0]);
      } else {
        setShow(upcoming[0]);
      }
    }
  }, [clicked]);

  return (
    <div className={styles.events}>
      <h5>Events</h5>
      <div>
        <div>
          <p
            onClick={() => setClicked("up")}
            id={clicked === "up" && styles.clicked}
          >
            Upcoming Events
          </p>
          <p
            onClick={() => setClicked("re")}
            id={clicked === "re" && styles.clicked}
          >
            Recent Events
          </p>
        </div>
        <div>
          <main>
            <p style={{ color: "white" }}>Seminar on</p>
            <div style={{ display: "flex", alignItems: "end", gap: "0.6rem", paddingLeft: '1rem' }}>
              <h1 style={{ fontSize: "80px", lineHeight:'70px' }}>{show?.Category}</h1>
              <p style={{ paddingBottom: "0.9rem", color: "white" }}>in</p>
            </div>
            <h1>INDIA & ABROAD</h1>
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
              <h4>IST {show?.Time} - {increaseTimeByOneHour(show?.Time)}</h4>
            </div>
            <h4>Venue: {show?.Location}</h4>
          </div>
        </div>
        <div>
          <h6>{show?.Description}</h6>
          <img height={120} width={230} src={show?.Image} alt="" />
        </div>
        <div>
          {clicked === "up" && upcoming.length > 0 ? (
            upcoming.slice(0, 2).map((event, index) => (
              <div key={index}>
                <div>
                  <div style={{width: '9rem'}}>
                    <h6 style={{ fontSize: "2.3rem" }}>
                      {new Date(event.Date.toDate()).getDate()}
                    </h6>
                    <h6
                      style={{ fontSize: "1rem", textTransform: "uppercase" }}
                    >
                      {new Date(event.Date.toDate()).toLocaleString("default", {
                        month: "short",
                      })}
                    </h6>
                    <h6>{event.Time}</h6>
                  </div>
                  <div>
                    <h6>Seminar on {event.Category} in India & Abroad</h6>
                    <h6>- {event.Location}</h6>
                  </div>
                </div>
                <p>
                  <Link href="/contactus">REGISTER NOW</Link>
                </p>
              </div>
            ))
          ) : (
            <></>
          )}
          {clicked === "re" && recent.length > 0 ? (
            recent.slice(0, 2).map((event, index) => (
              <div key={index}>
                <div>
                  <div style={{width: '9rem'}}>
                    <h6 style={{ fontSize: "2.3rem" }}>
                      {new Date(event.Date.toDate()).getDate()}
                    </h6>
                    <h6
                      style={{ fontSize: "1rem", textTransform: "uppercase" }}
                    >
                      {new Date(event.Date.toDate()).toLocaleString("default", {
                        month: "short",
                      })}
                    </h6>
                    <h6>{event.Time}</h6>
                  </div>
                  <div>
                    <h6>Seminar on {event.Category} in India & Abroad</h6>
                    <h6>- {event.Location}</h6>
                  </div>
                </div>
                <p>
                  <Link href="/contactus">REGISTER NOW</Link>
                </p>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
