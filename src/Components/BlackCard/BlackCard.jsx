import React from "react";
import styles from './BlackCaard.module.css'

const BlackCard = ({ph}) => {
  return (
    <div className={styles.philCard}>
      <img src={ph.Image} alt="img" />
      <div className={styles.black}>
        <img src={ph.Circle} alt="img" />
        <div>{ph.Heading}</div>
        <div>{ph.Description ? ph.Description : ph.Heading}</div>
      </div>
    </div>
  );
};

export default BlackCard;
