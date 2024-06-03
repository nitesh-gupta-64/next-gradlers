import React from "react";
import styles from "./Achievements.module.css";
import TestimonialsSwiper from "../Testimonials/Testimonials";

const Achievements = () => {
  return (
    <div className={styles.achieve}>
      <div>
        <h5>Recent Achievements</h5>
      </div>
      <TestimonialsSwiper />
    </div>
  );
};

export default Achievements;
