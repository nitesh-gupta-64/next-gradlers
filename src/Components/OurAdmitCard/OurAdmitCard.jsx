import React from "react";
import styles from "./OurAdmitCard.module.css";

const OurAdmitCard = ({ img, name, college, program }) => {
  return (
    <div className={styles.card}>
      <img alt="img" src={img} />
      <div className={styles.name}>{name}</div>
      <div className={styles.col}>{college}</div>
      <div className={styles.program}>{program}</div>
    </div>
  );
};

export default OurAdmitCard;
