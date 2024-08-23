import React from "react";
import styles from "./SmlDesc.module.css";
import Image from "next/image";

const SmlDesc = ({ children, imag }) => {
  return (
    <div className={styles.card} id={styles.card}>
      <Image src={imag} alt="icon" />
      <p>{children}</p>
    </div>
  );
};

export default SmlDesc;
