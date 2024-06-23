"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./EventHome.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { AppContext } from "@/Context/AppContext";
import can from "../../../public/assets/images/can.png";

SwiperCore.use([Navigation, Pagination]);

const EventHome = () => {
  const { mb, events, admitInfo } = useContext(AppContext);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [clicked, setClicked] = useState("a");
  const [show, setShow] = useState([]);

  useEffect(() => {
    if (clicked === "a") {
      const data = admitInfo;
      setShow(data);
    }
    if (clicked === "gm") {
      const data = admitInfo.filter((eve) => eve.Program === "GMAT");
      setShow(data);
    }
    if (clicked === "gr") {
      const data = admitInfo.filter((eve) => eve.Program === "GRE");
      setShow(data);
    }
    if (clicked === "sa") {
      const data = admitInfo.filter((eve) => eve.Program === "SAT");
      setShow(data);
    }
    if (clicked === "ie") {
      const data = admitInfo.filter((eve) => eve.Program === "IELTS");
      setShow(data);
    }
    if (clicked === "to") {
      const data = admitInfo.filter((eve) => eve.Program === "TOEFL");
      setShow(data);
    }
  }, [admitInfo, clicked]);

  useEffect(() => {
    if (events && events.length > 0) {
      const data = [...events].sort(
        (b, a) => new Date(a.Date.toDate()) - new Date(b.Date.toDate())
      );
      setSortedEvents(data);
    }
  }, [events]);
  return (
    <div className={styles.event}>
      <h2>Webinars & Events</h2>
      <div className={styles.slide}>
        <Swiper
          style={{
            width: "100%",
            height: "480px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-ne",
            prevEl: ".swiper-button-pr",
          }}
          slidesPerView={mb ? 3 : 1}
          loop={true}
        >
          {sortedEvents.map((eve) => (
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  width: "340px",
                  height: "390px",
                  padding: "1rem",
                  backgroundColor: "#0A5495",
                  color: "white",
                }}
              >
                <img
                  src={eve.Image}
                  alt={can}
                  style={{
                    objectFit: "cover",
                    width: "300px",
                    height: "230px",
                  }}
                />
                <div
                  style={{
                    height: "150px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "16px",
                      width: "100%",
                      textAlign: "center",
                      borderBottom: "1px solid white",
                      paddingBottom: "1rem",
                      paddingTop: "0.6rem",
                    }}
                  >
                    {eve.Title}
                    <br />- {eve.Location}
                  </h2>
                  {/* <h2 style={{ fontSize: "20px" }}>
                    {"- "}
                    {eve.Location}
                  </h2> */}
                  <h2 style={{ fontSize: "14px" }}>
                    {eve.Date && new Date(eve.Date.toDate()).getDate()}-
                    {eve.Date &&
                      new Date(eve.Date.toDate()).toLocaleString("default", {
                        month: "short",
                      })}
                    -{eve.Date && new Date(eve.Date.toDate()).getFullYear()}
                  </h2>
                  <button
                    style={{
                      fontSize: "16px",
                      padding: "0.5rem",
                      width: "256px",
                      border: "none",
                      borderRadius: "12px",
                    }}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.but}>
          <div className="swiper-button-pr">{"<"}</div>
          <div className="swiper-button-ne">{">"}</div>
        </div>
      </div>
      {/* <h2>Admissions</h2>
      <div className={styles.banner}>
        <h2
          onClick={() => setClicked("a")}
          id={clicked === "a" && styles.clicked}
        >
          All
        </h2>
        <h2
          onClick={() => setClicked("gm")}
          id={clicked === "gm" && styles.clicked}
        >
          GMAT
        </h2>
        <h2
          onClick={() => setClicked("gr")}
          id={clicked === "gr" && styles.clicked}
        >
          GRE
        </h2>
        <h2
          onClick={() => setClicked("sa")}
          id={clicked === "sa" && styles.clicked}
        >
          SAT
        </h2>
        <h2
          onClick={() => setClicked("ie")}
          id={clicked === "ie" && styles.clicked}
        >
          IELTS
        </h2>
        <h2
          onClick={() => setClicked("to")}
          id={clicked === "to" && styles.clicked}
        >
          TOEFL
        </h2>
      </div>
      <div className={styles.admit}>
        {show.map((ad) => (
          <div>
            <img
              width={300}
              height={216}
              style={{ backgroundSize: "contain" }}
              src={ad.Image}
              alt=""
            />
            <h2 style={{ fontSize: "19px", width: "300px" }}>
              {ad.Name} {" - "} <b>{ad.Program}</b>{", "} {ad.College}
            </h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default EventHome;
