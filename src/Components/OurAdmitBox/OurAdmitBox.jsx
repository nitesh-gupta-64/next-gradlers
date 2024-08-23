"use client";
import React, { useContext } from "react";
import styles from "./OurAdmitBox.module.css";
import { AppContext } from "@/Context/AppContext";
import OurAdmitCard from "../OurAdmitCard/OurAdmitCard";

const OurAdmitBox = () => {
  const { admitInfo } = useContext(AppContext);
  const data = admitInfo.slice(0, 4);
  console.log(data);
  return (
    <div className={styles.cards}>
      {data.map((admit) => (
        <OurAdmitCard
          program={admit.Program}
          img={admit.Image}
          name={admit.Name}
          college={admit.College}
        />
      ))}
    </div>
  );
};

export default OurAdmitBox;
