import HelpMba from "@/Components/HelpMba/HelpMba";
import MBA from "@/Components/MBA/MBA";
import React from "react";
import styles from './Mba.module.css'
import TestimonialsSwiper from "@/Components/Testimonials/Testimonials";

const page = () => {
  return (
    <div className={styles.mba}>
      <MBA />
      <HelpMba />
      <div className={styles.testi}>
        <p>What Our Achievers Say</p>
        <TestimonialsSwiper />
      </div>
    </div>
  );
};

export default page;
