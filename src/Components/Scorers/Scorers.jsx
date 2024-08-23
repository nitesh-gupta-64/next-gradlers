import React from "react";
import styles from "./Scorers.module.css";
import ScorersBox from "../ScorersBox/ScorersBox";

const Scorers = () => {
  return (
    <div className={styles.our}>
      <div className="blue-head">Our High scorers</div>
      <ScorersBox />
    </div>
  );
};

export default Scorers;
