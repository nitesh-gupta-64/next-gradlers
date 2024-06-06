import React from "react";
import styles from "./Gmat.module.css";
import GMAT from "@/Components/GMAT/GMAT";
import TestimonialsSwiper from "@/Components/Testimonials/Testimonials";
import GmatWhat from "@/Components/GmatWhat/GmatWhat";

const page = () => {
  return (
    <div className={styles.gmat}>
      <GMAT />
      <GmatWhat/>
      <div className={styles.testi}>
        <p>What Our Achievers Say</p>
        <TestimonialsSwiper />
      </div>
    </div>
  );
};

export default page;
