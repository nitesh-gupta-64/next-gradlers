import HelpMba from "@/Components/HelpMba/HelpMba";
import MBA from "@/Components/MBA/MBA";
import React from "react";
import styles from "./Mba.module.css";
import TestimonialsSwiper from "@/Components/Testimonials/Testimonials";

const page = () => {
  return (
    <div className={styles.mba}>
      <MBA />
      <HelpMba />
      <div className={styles.head}>
          <h5>What Our Achievers Say</h5>
        </div>
      <div className={styles.testi}>
        
        <TestimonialsSwiper />
      </div>
    </div>
  );
};

export default page;
