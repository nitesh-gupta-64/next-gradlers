import React from "react";
import styles from "./CommitmentCard.module.css";

const CommitmentCard = ({ head, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>{head}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default CommitmentCard;
