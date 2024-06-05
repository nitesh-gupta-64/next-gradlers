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
      console.log(upcomingEvents[0].Title);
      const recentEvents = events.filter(
        (eve) => new Date(eve.Date.toDate()) < new Date()
      );
      const sortedREvents = [...recentEvents].sort(
        (b, a) => new Date(a.Date.toDate()) - new Date(b.Date.toDate())
      );
      setRecent(sortedREvents);
      console.log("Upcoming", upcomingEvents);
      console.log("Recent", recentEvents);
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
            <div style={{ display: "flex", alignItems: "end", gap: "0.6rem" }}>
              <h1 style={{ fontSize: "80px" }}>{show.Category}</h1>
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
              <h4>IST {show.Time}</h4>
            </div>
            <h4>Venue: {show.Location}</h4>
          </div>
        </div>
        <div>
          <h6>{show.Description}</h6>
          <img height={130} width={250} src={show.Image} alt="" />
        </div>
        <div>
          {clicked === "up" && upcoming.length > 0 ? (
            upcoming.slice(0, 2).map((event, index) => (
              <div key={index}>
                <div>
                  <div>
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
                    <h6>Seminar on {event.Category} in INDIA & ABROAD</h6>
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
                  <div>
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
                    <h6>Seminar on {event.Category} in INDIA & ABROAD</h6>
                    <h6>- {event.Location}</h6>
                  </div>
                </div>
                <p>
                  <Link href="contactus">REGISTER NOW</Link>
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
