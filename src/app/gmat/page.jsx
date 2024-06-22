"use client"
import React, { useContext } from "react";
import styles from "./Gmat.module.css";
import GMAT from "@/Components/GMAT/GMAT";
import TestimonialsSwiper from "@/Components/Testimonials/Testimonials";
import GmatWhat from "@/Components/GmatWhat/GmatWhat";
import { AppContext } from "@/Context/AppContext";

const page = () => {
  const { admitInfo } = useContext(AppContext);
  return (
    <div className={styles.gmat}>
      <GMAT />
      <GmatWhat />
      <div className={styles.testi}>
        <p>What Our Achievers Say</p>
        <TestimonialsSwiper data={admitInfo} />
      </div>
    </div>
  );
};

export default page;
