"use client";
import React, { useContext } from "react";
import styles from "./AchieverBox.module.css";
import { AppContext } from "@/Context/AppContext";
import ScorersCard from "../ScorersCard/ScorersCard";

const AchieverBox = ({ test }) => {
  const { testPrepInfo } = useContext(AppContext);
  const data = testPrepInfo
    .filter((info) => info.Program.toLowerCase() === test.toLowerCase())
    .slice(0, 6);
  return (
    <div className={styles.box}>
      {data.map((admit) => (
        <ScorersCard
          program={admit.Program}
          img={admit.Image}
          name={admit.Name}
          marks={admit.Description}
        />
      ))}
    </div>
  );
};

export default AchieverBox;
