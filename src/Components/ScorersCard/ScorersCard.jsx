import React from "react";
import styles from "./ScorersCard.module.css";

const ScorersCard = ({ img, name, marks, program }) => {
  return (
    <div className={styles.card}>
      <img alt="img" src={img} />
      <div className={styles.right}>
        <div className={styles.name}>{name}</div>
        <div className={styles.rightIn}>
          <div className={styles.col}>{program}</div>
          <div className={styles.program}>{marks}</div>
        </div>
      </div>
    </div>
  );
};
export default ScorersCard;
