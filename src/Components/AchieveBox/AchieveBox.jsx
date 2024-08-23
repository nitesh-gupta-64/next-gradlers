import React from "react";
import styles from "./AchieveBox.module.css";
import AchieveCard from "../AchieveCard/AchieveCard";

const AchieveBox = () => {
  const statsArray = [
    {
      heading: "Students",
      subheading: "3000+",
      description: "Serviced",
    },
    {
      heading: "Top 100 Uni’s",
      subheading: "500+",
      description: "Global Admits",
    },
    {
      heading: "Global Universities",
      subheading: "800+",
      description: "Partnerships",
    },
    {
      heading: "Visa",
      subheading: "98%",
      description: "Success Rate",
    },
  ];

  return (
    <div className={styles.box}>
      {statsArray.map((stat) => (
        <AchieveCard
          head={stat.heading}
          num={stat.subheading}
          desc={stat.description}
        />
      ))}
    </div>
  );
};

export default AchieveBox;
