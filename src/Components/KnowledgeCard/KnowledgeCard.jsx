import React from "react";
import styles from "./KnowledgeCard.module.css";

const KnowledgeCard = ({ img, title, day, desc, onClick }) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <img alt="img" src={img} />
      <div className={styles.day}>
        <img src="/assets/images/clock.png" />
        {day} {" "}
        days ago
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc.slice(0,80)}...</div>
    </div>
  );
};

export default KnowledgeCard;
