import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import ab1 from "../../../public/assets/images/ab1.png";
import ab2 from "../../../public/assets/images/ab2.png";
import ab3 from "../../../public/assets/images/ab3.png";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.head}>
        <h2>
          Welcome to <b>Gradlers!</b>
        </h2>
      </div>
      <div className={styles.ab1}>
        <Image src={ab1} />
        <div>
          <h2>About Us</h2>
          <p>
            We at Gradlers are driven by the mission to redefine the structure
            for global education for Indian students.
          </p>
          <p>
            Gradlers was founded in 2019 with the sole purpose of helping out
            Indian students in pursuing their study abroad dream by making the
            process simpler, effective, and less time-consuming.
          </p>
        </div>
      </div>
      <div className={styles.ab2}>
        <div>
          <h2>Why Study Abroad?</h2>
          <ul>
            <li>International Exposure</li>
            <li>Cutting-Edge Research Infrastructure</li>
            <li>International Job Opportunity</li>
            <li>Stellar Networking Opportunity</li>
            <li>Personality Development and Self-Dependent Outlook</li>
          </ul>
          <p>
            <b>Did you know?</b> <br />
            According to research done by IES Abroad, 90% of study abroad alumni
            found their first job within six months of graduating.
          </p>
        </div>
        <Image src={ab2} />
      </div>
      <div className={styles.ab3}>
        <div>
          <h2>Why Gradlers?</h2>
          <p>
            Our founders have studied and worked in the US and UK, bringing
            along with them real-world experiences from across the globe. They
            continuously work on building a talented team and evaluating quality
            partners to expand our reach for students.
          </p>
          <div>
            <b>Few Facts about us</b>
            <ul>
              <li>Partnered with more than 800 top universities worldwide</li>
              <li>Assisted more than 3000 students in the past 3 years</li>
              <li>Personality Development and Self-Dependent Outlook</li>
              <li>Have a 98% visa approval rate</li>
            </ul>
          </div>
        </div>
        <Image src={ab3} />
      </div>
    </div>
  );
};

export default About;
