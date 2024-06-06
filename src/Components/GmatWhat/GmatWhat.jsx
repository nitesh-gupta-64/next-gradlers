import React from "react";
import styles from "./GmatWhat.module.css";
import data from "@/Data/data";
import Image from "next/image";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";

const GmatWhat = () => {
  return (
    <div className={styles.what}>
      <div className={styles.boy}>
        <div>
          <h2>What is GMAT?</h2>
          <p>{data.gmat1}</p>
          <p>{data.gmat2}</p>
        </div>
        <div>
          <Image src={boy} />
        </div>
      </div>
      <div className={styles.girl}>
        <div>
          <Image src={girl} />
        </div>
        <div>
          <h2>Why GMAT is required?</h2>
          <p>{data.gmat3}</p>
        </div>
      </div>
    </div>
  );
};

export default GmatWhat;
