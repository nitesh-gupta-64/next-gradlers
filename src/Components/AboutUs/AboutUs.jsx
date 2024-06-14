import React from "react";
import styles from "./AboutUs.module.css";
import data from "@/Data/data";
import Image from "next/image";
import about from "../../../public/assets/images/about.png";
import Banner from "../Banner/Banner";

const AboutUs = () => {
  return (
    <>
      <div className={styles.about} id="aboutus">
        <h5>About Us</h5>
        <div>
          <div>
            <p>
              {data.aboutUs} {data.aboutUs}
            </p>
            <Image width={700} src={about} />
          </div>
        </div>
      </div>
      <marquee behavior="" direction="">
        <div className={styles.ban}>
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </div>
      </marquee>
    </>
  );
};

export default AboutUs;
