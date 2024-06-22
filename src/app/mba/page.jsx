"use client"
import HelpMba from "@/Components/HelpMba/HelpMba";
import MBA from "@/Components/MBA/MBA";
import React, { useContext } from "react";
import styles from "./Mba.module.css";
import TestimonialsSwiper from "@/Components/Testimonials/Testimonials";
import { AppContext } from "@/Context/AppContext";

const page = () => {
  const {admitInfo} = useContext(AppContext)
  return (
    <div className={styles.mba}>
      <MBA />
      <HelpMba />
      <div className={styles.head}>
          <h5>What Our Achievers Say</h5>
        </div>
      <div className={styles.testi}>
        
        <TestimonialsSwiper data = {admitInfo} />
      </div>
    </div>
  );
};

export default page;
