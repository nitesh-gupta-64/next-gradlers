"use client"
import React, { useContext } from "react";
import styles from "./Achievements.module.css";
import TestimonialsSwiper from "../Testimonials/Testimonials";
import { AppContext } from "@/Context/AppContext";

const Achievements = () => {
  
  const {admitInfo, testPrepInfo, visaInfo} = useContext(AppContext);

  return (
    <>
      <div className={styles.achieve}>
        <div>
          <h5>Admit Testimonials</h5>
        </div>
        <TestimonialsSwiper data = {admitInfo} />
      </div>
      <div className={styles.achieve}>
        <div>
          <h5>Test-Prep Testimonials</h5>
        </div>
        <TestimonialsSwiper data = {testPrepInfo}  />
      </div>
      <div className={styles.achieve}>
        <div>
          <h5>Visa Testimonials</h5>
        </div>
        <TestimonialsSwiper data = {visaInfo}  />
      </div>
    </>
  );
};

export default Achievements;
