"use client";
import React, { useContext } from "react";
import styles from "./ScorersBox.module.css";
import { AppContext } from "@/Context/AppContext";
import ScorersCard from "../ScorersCard/ScorersCard";

const ScorersBox = () => {
  const { testPrepInfo } = useContext(AppContext);
  const data = testPrepInfo.slice(0, 6);
  console.log(data);
  return (
    <div className={styles.cards}>
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

export default ScorersBox;
