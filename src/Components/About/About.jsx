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
            Gradlers is a student first overseas education specialist, where
            your global education dreams are shaped and fulfilled seamlessly.
          </p>
          <p>
            We are Empowering students with expert mentoring, personalized
            support and comprehensive services tailored to the unique needs of
            every student. <br /> Our Vision is, To be the trusted leaders in
            global education domain by connecting and supporting students,
            institutions, and communities to create transformative international
            education experiences.
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
            Gradlers enables students to achieve their academic dreams and
            become impactful leaders by providing comprehensive mentoring,
            in-depth test preparation and admissions counseling. We help you
            unlock your potential to achieve the extraordinary.
          </p>
          <div>
            <b>Our Values</b>
            <ol>
              <li>
                Commitment to Excellence – Set high standards in everything we
                do
              </li>
              <li>
                Empowerment – Empowering all stakeholders students, institutions
                and the team for growth and success
              </li>
              <li>
                Passion: Our only passion is ‘student first and student success’
              </li>
              <li>
                Bias for Action – Enabling Individuals to take initiatives and
                make decision without prejudice
              </li>
              <li>
                Collaboration – Promote open communication and sharing of ideas
                to foster innovation and solve problems effectively.
              </li>
              <li>
                Unlearn & Relearn – Encourage curiosity and the pursuit of
                knowledge to stay ahead in the dynamic field of education
              </li>
            </ol>
          </div>
        </div>
        <Image src={ab3} />
      </div>
    </div>
  );
};

export default About;
