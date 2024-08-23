import React from "react";
import styles from "./NewAbout.module.css";
import Link from "next/link";
import BlackCard from "../BlackCard/BlackCard";

const NewAbout = () => {
  const phil1 = [
    {
      Image: "/phil1.png",
      Heading: "Commitment to Excellence",
    },
    {
      Image: "/phil2.png",
      Heading: "Empowerment",
    },
    {
      Image: "/phil3.png",
      Heading: "Passion",
    },
    {
      Image: "/phil4.png",
      Heading: "Bias for Action",
    },
    {
      Image: "/phil5.png",
      Heading: "Collaboration",
    },
    {
      Image: "/phil6.png",
      Heading: "Unlearn & Relearn",
    },
  ];

  const phil = [
    {
      Image: "/ab11.png",
      Heading: "Commitment to Excellence",
      Circle: "/ab12.png",
      Description: "Set high standards in everything we do",
    },
    {
      Image: "/ab21.png",
      Heading: "Empowerment",
      Circle: "/ab22.png",
      Description: "Empowering all stakeholders students, institutions and the team for growth and success",
    },
    {
      Image: "/ab31.png",
      Heading: "Passion",
      Circle: "/ab32.png",
      Description: "Our only passion is ‘student first and student success’",
    },
    {
      Image: "/ab41.png",
      Heading: "Bias for Action",
      Circle: "/ab42.png",
      Description: "Enabling Individuals to take initiatives and make decision without prejudice",
    },
    {
      Image: "/ab51.png",
      Heading: "Collaboration",
      Circle: "/ab52.png",
      Description: "Promote open communication and sharing of ideas to foster innovation and solve problems effectively",
    },
    {
      Image: "/ab61.png",
      Heading: "Unlearn & Relearn",
      Circle: "/ab62.png",
      Description: "Encourage curiosity and the pursuit of knowledge to stay ahead in the dynamic field of education",
    },
  ];

  const how = [
    {
      Image: "/how1.png",
      Heading: "Discover Your Edge",
      Description:
        "We help you identify what makes you truly unique and sets you apart from other applicants.",
    },
    {
      Image: "/how2.png",
      Heading: "Rise to the Challenge",
      Description:
        "We guide you through a personalized journey of continuous improvement, pushing your boundaries and maximizing your potential.",
    },
    {
      Image: "/how3.png",
      Heading: "Navigate the Path to Success",
      Description:
        "With our insider knowledge of international admissions, we equip you with the tools and strategies to gain acceptance into the world's top universities.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/" style={{ cursor: "pointer" }}>
          Home
        </Link>
        / About us
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.main}>
          <div className="blue-head" style={{ position: "relative" }}>
            About us{" "}
            <span
              style={{ left: "calc(50% - 5.5rem)" }}
              className={styles.line}
            ></span>
          </div>
          <div className={styles.desc}>
            Gradlers is a student first overseas education specialist, where
            your global education dreams are shaped and fulfilled seamlessly.
            The parent company College Connect was incepted in the year 2018
            with a sole aim to make quality overseas education accessible to
            aspirational Indian students in a trusted and hassle-free manner. It
            is founded by a team of passionate professionals who have
            experienced studying abroad firsthand, and are dedicated to guiding
            you through every step of your international academic pursuits. Our
            mission is to empower students with personalized support, expert
            advice, and comprehensive services tailored to their unique needs.
            With our extensive network of top universities and a commitment to
            excellence, we ensure you have the tools and confidence to achieve
            your dreams.
          </div>
          <div className={styles.desc}>
            Join us and embark on a transformative educational experience that
            transcends borders and opens doors to a world of opportunities.
          </div>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div className={styles.main}>
          <div
            className="white-head"
            style={{ position: "relative", textAlign: "start" }}
          >
            Gradlers Mission
            <span
              style={{ backgroundColor: "white", left: "0" }}
              className={styles.line}
            ></span>
          </div>
          <div className={styles.desc1}>
            Empowering students with expert mentoring, personalized support and
            comprehensive services tailored to the unique needs of every
            student.
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.main}>
          <div
            className="blue-head"
            style={{ position: "relative", textAlign: "right" }}
          >
            Gradlers Vision
            <span style={{ right: "0" }} className={styles.line}></span>
          </div>
          <div className={styles.desc2}>
            To be the trusted leaders in global education domain by connecting
            and supporting students, institutions, and communities to create
            transformative international education experiences.
          </div>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div style={{ width: "90%" }} className={styles.phil}>
          <div className="white-head">Gradlers Philosophy</div>
          <div className={styles.philBox}>
            {phil.map((ph) => (
              <BlackCard ph={ph} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.how}>
          <div className="blue-head">
            How do we make your <br /> Dream a Reality?
          </div>
          <div className={styles.desc}>
            Gradlers enables students to achieve their academic dreams and
            become impactful leaders by providing comprehensive mentoring,
            in-depth test preparation and admissions counseling. We help you
            unlock your potential to achieve the extraordinary.
          </div>
          <div className={styles.howBox}>
            {how.map((cd) => (
              <div className={styles.howCard}>
                <img src={cd.Image} alt="icon" />
                <div>{cd.Heading}</div>
                <div>{cd.Description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAbout;
