import React from "react";
import styles from "./HelpMba.module.css";
import Image from "next/image";
import mba1 from "../../../public/assets/images/mba1.png";
import mba2 from "../../../public/assets/images/mba2.png";
import mba3 from "../../../public/assets/images/mba3.png";
import mba4 from "../../../public/assets/images/mba4.png";
import mba5 from "../../../public/assets/images/mba5.png";
import mba6 from "../../../public/assets/images/mba6.png";
import Card from "../Card/Card";

const HelpMba = () => {
  const data = [
    {
      head: "Profile Building",
      para: "Undivided attention by a dedicated team of mentors, editors, and counsellors to build a unique and robust profile that is sure to stand out",
      img: mba1,
    },
    {
      head: "Expert Review",
      para: "Unlimited brainstorming sessions with admission experts to perfect your application",
      img: mba2,
    },
    {
      head: "University Shortlisting",
      para: "Database-driven shortlisting to match you with universities that are the right fit for you",
      img: mba3,
    },
    {
      head: "Interview Trainning",
      para: "Targetted mock interview training that is one-on-one, panel, informative, and evaluative",
      img: mba4,
    },
    {
      head: "Alumni Network",
      para: "With 170,000+ Jamboree alumni at universities across the globe, you will always have access to a ready network wherever you go",
      img: mba5,
    },
    {
      head: "Post Admission Services",
      para: "Visa documentation, pre-departure orientation, and an all-inclusive post-admit services like loans, forex, sim cards, and much more",
      img: mba6,
    },
  ];
  return (
    <div className={styles.help}>
      <h5>How We Help You Get Into Your Dream MBA Program?</h5>
      <div>
        {data.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </div>
  );
};

export default HelpMba;
