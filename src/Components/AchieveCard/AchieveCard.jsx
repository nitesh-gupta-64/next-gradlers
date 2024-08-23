import React from "react";
import styles from "./AchieveCard.module.css";

const AchieveCard = ({ desc, head, num }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>{head}</div>
      <div className={styles.num}>{num}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default AchieveCard;
