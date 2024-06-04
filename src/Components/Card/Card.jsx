import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div>
        <Image src={data.img} />
      </div>
      <div>
        <p>{data.head}</p>
        <p>{data.para}</p>
      </div>
    </div>
  );
};

export default Card;
