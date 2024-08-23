import React from "react";
import styles from "./WhyCard.module.css";
import Image from "next/image";

const WhyCard = ({ img, head, desc }) => {
  return (
    <div className={styles.card}>
      <img alt="img" src={img} />
      <div className={styles.head}>{head}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default WhyCard;
