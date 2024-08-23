"use client";
import React, { useContext } from "react";
import styles from "./StudyPage.module.css";
import Image from "next/image";
import { AppContext } from "@/Context/AppContext";
import FaqItem from "../Accordion/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import BlackCard from "../BlackCard/BlackCard";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StudyPage = ({
  img,
  study,
  mainDesc,
  smallStudy,
  why,
  trend,
  trendDesc1,
  trendDesc2,
  eligibility,
  faqs,
  destinations,
}) => {
  const { showModal, setShowModal, admitInfo, visaInfo, mb, tb } =
    useContext(AppContext);
  const admits = admitInfo.slice(0, 6);
  const successes = visaInfo.slice(0, 4);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <span style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
          Home
        </span>
        / Study/ {study}
      </div>
      <div className="blue-head" style={{ fontSize: "3rem" }}>
        {study} Abroad
      </div>
      <div className={styles.main}>
        <div className={styles.img}>
          <Image src={img} alt="main" />
        </div>
        <div className={styles.mainPara}>{mainDesc}</div>
      </div>
      <div className={styles.blueContainer}>
        <div style={{ width: "90%" }} className={styles.why}>
          <div className="white-head">Why {smallStudy} Degree Abroad?</div>
          <div className={styles.whyBox}>
            {why.map((ph) => (
              <BlackCard ph={ph} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div style={{ width: "90%" }} className={styles.trend}>
          <div className="blue-head">
            Most Trending {study} Courses Globally
          </div>
          <div className={styles.trendDesc}>{trendDesc1}</div>
          <ol className={styles.trendBox}>
            {trend.map((tr) => (
              <li>
                <span>{tr.Heading}{tr.Description !== "" && ": "} </span> {tr.Description}
              </li>
            ))}
          </ol>
          <div className={styles.trendDesc}>{trendDesc2}</div>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div style={{ width: "90%" }} className={styles.dest}>
          <div className="white-head">
            Best Study Destinations for {smallStudy} Abroad
          </div>
          <div className={styles.destBox}>
            <Swiper
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              spaceBetween={40}
              grabCursor={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              slidesPerView={tb ? 4 : mb ? 2 : 1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {destinations.map((dt) => (
                <SwiperSlide
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.destCard}>
                    <img src={dt.image} alt="country" />
                    <div>{dt.country}</div>
                    <div>{dt.description}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div style={{ width: "90%" }} className={styles.elg}>
          <div className="blue-head">
            Eligibility Criteria for {smallStudy} Admissions Abroad
          </div>
          <div className={styles.elgBox}>
            {eligibility.map((el) => (
              <div className={styles.elgCard}>
                <div className={styles.elgTitle}>{el.title}</div>
                <div className={styles.elgDesc}>{el.description}</div>
                <ul
                  style={{ listStyleType: "disc" }}
                  className={styles.elgPtBox}
                >
                  {el.points.map((pt) => (
                    <li>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.faqs}>
          <div className="blue-head">Frequently Asked Questions (FAQs)</div>
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <div onClick={() => setShowModal(true)} className={styles.register}>
        REGISTER NOW
      </div>
    </div>
  );
};

export default StudyPage;
