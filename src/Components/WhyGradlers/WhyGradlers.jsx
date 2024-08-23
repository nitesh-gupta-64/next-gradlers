import React from "react";
import styles from "./WhyGradlers.module.css";
import WhyCard from "../WhyCard/WhyCard";
import Link from "next/link";

const WhyGradlers = () => {
  const contentArray = [
    {
      image: "/why1.png",
      heading: "One Stop Solution",
      description:
        "Gradlers is your single stop shop for all overseas education needs from selection to joining of University.",
    },
    {
      image: "/why2.png",
      heading: "Quality Work",
      description:
        "Quality work is our hallmark and we ensure quality in everything we do right from counseling to visas.",
    },
    {
      image: "/why3.png",
      heading: "Accuracy & Speed",
      description:
        "At Gradlers we deliver your admissions with utmost accuracy and speed so that you are not left behind.",
    },
    {
      image: "/why4.png",
      heading: "Inclusive & Transparent",
      description:
        "We believe in inclusivity and maintain transparency in our work. Our counselors will keep you involved & updated at every stage of Admission.",
    },
    {
      image: "/why5.png",
      heading: "Top Advisors",
      description:
        "Our team of passionate student advisors work with Student first motto and with a sole aim of student success.",
    },
    {
      image: "/why6.png",
      heading: "Excellence",
      description:
        "Our student success is a testimony of our work. We are proud of our student placements and aim to find a right fit placement for every student.",
    },
  ];

  return (
    <div className={styles.why} id="whyGradlers">
      <div className={styles.abs}></div>
      <div className="white-head">Why Gradlers?</div>
      <div className={styles.cards}>
        {contentArray.map((why) => (
          <WhyCard img={why.image} desc={why.description} head={why.heading} />
        ))}
      </div>
      <Link href='/contact-us' className="yellow-button">Get FREE Counselling</Link>
    </div>
  );
};

export default WhyGradlers;
