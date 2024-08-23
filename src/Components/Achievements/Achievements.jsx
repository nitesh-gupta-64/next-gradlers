"use client";
import React, { useContext } from "react";
import styles from "./Achievements.module.css";
import TestimonialsSwiper from "../Testimonials/Testimonials";
import { AppContext } from "@/Context/AppContext";

const Achievements = () => {
  const { admitInfo, testPrepInfo, visaInfo } = useContext(AppContext);

  return (
    <>
      <div className={styles.achieve}>
        <div>
          <h5>Recent Top Admits</h5>
        </div>
        <TestimonialsSwiper data={admitInfo} />
      </div>
      <div className={styles.achieve}>
        <div>
          <h5>Recent Top Scores</h5>
        </div>
        <TestimonialsSwiper data={testPrepInfo} />
      </div>
    </>
  );
};

export default Achievements;
