"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Showcase.module.css";
import { AppContext } from "@/Context/AppContext";
import bl from "../../../public/assets/images/blogs.png";
import eve from "../../../public/assets/images/calender.png";
import suc from "../../../public/assets/images/ss.png";
import Image from "next/image";

const Showcase = () => {
  const { blogs, events, admitInfo } = useContext(AppContext);
  const [success, setSuccess] = useState([]);
  const [show, setShow] = useState([]);
  const [clicked, setClicked] = useState("blogs");
  const [click, setClick] = useState("gmat");
  const [showP, setShowP] = useState([]);

  useEffect(() => {
    if (admitInfo && admitInfo.length > 0) {
      const ss = admitInfo.filter((admit) => admit.URLL);
      setSuccess(ss);
      console.log(ss);
    }
  }, [admitInfo]);

  useEffect(() => {
    if (clicked === "blogs" && blogs) {
      setShow(blogs);
    }
    if (clicked === "ss" && success) {
      setShow(success);
    }
    if (clicked === "events" && events) {
      setShow(events);
    }
  }, [clicked, blogs, success, events]);

  useEffect(() => {
    if (show && show.length > 0) {
      if (clicked === "blogs") {
        if (click === "gmat") {
          const data = show.filter((eve) => eve.category === "GMAT");
          setShowP(data);
        }
        if (click === "gre") {
          const data = show.filter((eve) => eve.category === "GRE");
          setShowP(data);
        }
        if (click === "sat") {
          const data = show.filter((eve) => eve.category === "SAT");
          setShowP(data);
        }
        if (click === "ielts") {
          const data = show.filter((eve) => eve.category === "IELTS");
          setShowP(data);
        }
        if (click === "toefl") {
          const data = show.filter((eve) => eve.category === "TOEFL");
          setShowP(data);
        }
      }
      if (clicked === "ss") {
        if (click === "gmat") {
          const data = show.filter((eve) => eve.Program === "GMAT");
          setShowP(data);
        }
        if (click === "gre") {
          const data = show.filter((eve) => eve.Program === "GRE");
          setShowP(data);
        }
        if (click === "sat") {
          const data = show.filter((eve) => eve.Program === "SAT");
          setShowP(data);
        }
        if (click === "ielts") {
          const data = show.filter((eve) => eve.Program === "IELTS");
          setShowP(data);
        }
        if (click === "toefl") {
          const data = show.filter((eve) => eve.Program === "TOEFL");
          setShowP(data);
        }
      }
      if (clicked === "events") {
        if (click === "gmat") {
          const data = show.filter((eve) => eve.Category === "GMAT");
          setShowP(data);
        }
        if (click === "gre") {
          const data = show.filter((eve) => eve.Category === "GRE");
          setShowP(data);
        }
        if (click === "sat") {
          const data = show.filter((eve) => eve.Category === "SAT");
          setShowP(data);
        }
        if (click === "ielts") {
          const data = show.filter((eve) => eve.Category === "IELTS");
          setShowP(data);
        }
        if (click === "toefl") {
          const data = show.filter((eve) => eve.Category === "TOEFL");
          setShowP(data);
        }
      }
    }
  }, [click, show, clicked]);

  return (
    <div className={styles.show}>
      <div>
        <div
          onClick={() => setClicked("blogs")}
          id={clicked === "blogs" && styles.clicked}
        >
          <Image src={bl} alt="" />
          <p>Blogs</p>
        </div>
        <div
          onClick={() => setClicked("ss")}
          id={clicked === "ss" && styles.clicked}
        >
          <Image src={suc} alt="" />
          <p>Success Stories</p>
        </div>
        <div
          onClick={() => setClicked("events")}
          id={clicked === "events" && styles.clicked}
        >
          <Image src={eve} alt="" />
          <p>Events</p>
        </div>
      </div>

      <div>
        <p
          onClick={() => setClick("gmat")}
          id={click === "gmat" && styles.click}
        >
          GMAT
        </p>
        <p onClick={() => setClick("gre")} id={click === "gre" && styles.click}>
          GRE
        </p>
        <p onClick={() => setClick("sat")} id={click === "sat" && styles.click}>
          SAT
        </p>
        <p
          onClick={() => setClick("ielts")}
          id={click === "ielts" && styles.click}
        >
          IELTS
        </p>
        <p
          onClick={() => setClick("toefl")}
          id={click === "toefl" && styles.click}
        >
          TOEFL
        </p>
      </div>
      <div>
        {clicked === "blogs" &&
          showP.map((eve) => (
            <div>
              <img width={320} height={240} src={eve.image} alt="img" />
              <i>{eve.createdAt && Math.floor((new Date() - new Date(eve.createdAt.toDate())) / (1000 * 60 * 60 * 24))} days ago</i>
              <p>"{eve.title}"</p>
            </div>
          ))}
          {clicked === "ss" &&
          showP.map((eve) => (
            <div>
              <img width={320} height={240} src={eve.Image} alt="img" />
              <i>{eve.createdAt && Math.floor((new Date() - new Date(eve.createdAt.toDate())) / (1000 * 60 * 60 * 24))} days ago</i>
              <p>"{eve.Name}, {eve.Program} {eve.College}, {eve.Location}"</p>
            </div>
          ))}
          {clicked === "events" &&
          showP.map((eve) => (
            <div>
              <img width={320} height={240} src={eve.Image} alt="img" />
              <p>"{eve.Title}"</p>
            </div>
          ))}        
      </div>
    </div>
  );
};

export default Showcase;
