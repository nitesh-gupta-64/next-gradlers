import React from "react";
import styles from "./AboutUs.module.css";
import data from "@/Data/data";
import Image from "next/image";
import about from "../../../public/assets/images/about.png";

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <h5>About Us</h5>
      <div>
        <div>
          <Image src={about} />
          <p>{data.aboutUs}</p>
        </div>
        <p>{data.aboutUs1}</p>
      </div>
    </div>
  );
};

export default AboutUs;
