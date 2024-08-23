import React from "react";
import styles from "./CommitmentBox.module.css";
import CommitmentCard from "../CommitmentCard/CommitmentCard";

const CommitmentBox = () => {
  const servicesArray = [
    {
      heading: "Provide Holistic Services",
      description:
        "Application to Accommodation we have you covered with all inclusive study abroad solutions for a stress free experience.",
    },
    {
      heading: "Personalized Guidance",
      description:
        "We ensure you get best fit study options and access to institutions that are unique to your academic needs and career aspirations.",
    },
    {
      heading: "Zero Compromise on Quality",
      description:
        "We take pride in providing quality services to our clients and have zero tolerance for non-quality.",
    },
    {
      heading: "Speed of Execution",
      description:
        "Our expert team provides comprehensive solutions with utmost accuracy and speed so that you do not miss out any deadlines, after all your win is our win.",
    },
    {
      heading: "Get you to Top ROI Universities",
      description:
        "Our aim is to get students access to premier educational institutions and scholarships through top university placements and partnerships and help them achieve good ROI.",
    },
  ];

  return (
    <div className={styles.cards}>
      {servicesArray.map((co) => (
        <CommitmentCard head={co.heading} desc={co.description} />
      ))}
    </div>
  );
};

export default CommitmentBox;
