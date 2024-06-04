import React from "react";
import styles from "./CounsellingHero.module.css";
import Image from "next/image";
import coun from "../../../public/assets/images/coun.png";
import Link from "next/link";

const CounsellingHero = () => {
  return (
    <div className={styles.cou}>
      <div>
        <h2>Get career counselling from our experts</h2>
        <p><Link href='contactus'>BOOK A CALL</Link></p>
      </div>
      <Image src={coun} />
    </div>
  );
};

export default CounsellingHero;
