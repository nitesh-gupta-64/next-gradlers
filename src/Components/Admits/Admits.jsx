"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Admits.module.css";
import { AppContext } from "@/Context/AppContext";

const Admits = () => {
  const { admitInfo } = useContext(AppContext);
  const [success, setSuccess] = useState([]);
  const [click, setClick] = useState("gm");
  const [show, setShow] = useState([]);

  useEffect(() => {
    if (admitInfo && admitInfo.length > 0) {
      const ss = admitInfo.filter((admit) => admit.URLL);
      setSuccess(ss);
      console.log(ss);
    }
  }, [admitInfo]);

  useEffect(() => {
    if (success && success.length > 0) {
      if (click === "gm") {
        const data = success.filter((eve) => eve.Program === "GMAT");
        setShow(data);
      }
      if (click === "gr") {
        const data = success.filter((eve) => eve.Program === "GRE");
        setShow(data);
      }
      if (click === "sa") {
        const data = success.filter((eve) => eve.Program === "SAT");
        setShow(data);
      }
      if (click === "ie") {
        const data = success.filter((eve) => eve.Program === "IELTS");
        setShow(data);
      }
      if (click === "to") {
        const data = success.filter((eve) => eve.Program === "TOEFL");
        setShow(data);
      }
    }
  }, [success, click]);

  return (
    <div className={styles.admit}>
      <h2>Admits Testimonials</h2>
      <div>
        <h2 onClick={() => setClick("gm")} id={click === "gm" && styles.click}>
          GMAT
        </h2>
        <h2 onClick={() => setClick("gr")} id={click === "gr" && styles.click}>
          GRE
        </h2>
        <h2 onClick={() => setClick("sa")} id={click === "sa" && styles.click}>
          SAT
        </h2>
        <h2 onClick={() => setClick("ie")} id={click === "ie" && styles.click}>
          IELTS
        </h2>
        <h2 onClick={() => setClick("to")} id={click === "to" && styles.click}>
          TOEFL
        </h2>
      </div>
      <div>
        {show &&
          show.map((admit) => (
            <div>
              <img src={admit.Image} alt="" />
              <div>
                <p>{admit.Name}</p>
                <p>{admit.Program} from {admit.College}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admits;
