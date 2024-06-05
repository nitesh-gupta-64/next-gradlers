import React from "react";
import styles from "./AboutUs.module.css";
import data from "@/Data/data";
import Image from "next/image";
import about from "../../../public/assets/images/about.png";

const AboutUs = () => {
  return (
    <div className={styles.about} id="aboutus">
      <h5>About Us</h5>
      <div>
        <div> 
          <p>{data.aboutUs}</p>
          <Image width={700} src={about} />
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
