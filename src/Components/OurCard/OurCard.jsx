import React from "react";
import styles from "./OurCard.module.css";

const OurCard = ({ head, img }) => {
  return (
    <div className={styles.card}>
      <img alt="img" src={img} />
      <div className={styles.head}>{head}</div>
    </div>
  );
};

export default OurCard;
