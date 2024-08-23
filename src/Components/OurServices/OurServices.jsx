import React from "react";
import styles from "./OurServices.module.css";
import OurCard from "../OurCard/OurCard";
import Link from "next/link";

const OurServices = () => {
  const servicesArray = [
    {
      image: "/our1.png",
      heading: "Career Counselling",
    },
    {
      image: "/our2.png",
      heading: "Profile Building",
    },
    {
      image: "/our3.png",
      heading: "Test Preparation Coaching",
    },
    {
      image: "/our4.png",
      heading: "Admissions",
    },
    {
      image: "/our5.png",
      heading: "VISA Guidance",
    },
    {
      image: "/our6.png",
      heading: "Study Loan Assistance",
    },
  ];

  return (
    <div className={styles.our}>
      <div className="white-head">Our Services</div>
      <div className={styles.cards}>
        {servicesArray.map((ser) => (
          <OurCard img={ser.image} head={ser.heading} />
        ))}
      </div>
      <Link href='/contact-us' className="yellow-button">Connect with Experts</Link>
    </div>
  );
};

export default OurServices;
