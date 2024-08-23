"use client";
import React, { useContext } from "react";
import styles from "./CountriesPage.module.css";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { AppContext } from "@/Context/AppContext";
import Modal from "../Modal/Modal";
import WhyGradlers from "../WhyGradlers/WhyGradlers";
import FaqItem from "../Accordion/Accordion";
import { useRouter } from "next/navigation";

const CountriesPage = ({
  img,
  country,
  mainDesc,
  why,
  how,
  tests,
  flag,
  top,
  faqs,
}) => {
  const { showModal, setShowModal, admitInfo } = useContext(AppContext);
  const admits = admitInfo.slice(0, 6);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <span style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
          Home
        </span>
        / Countries/ {country}
      </div>
      <div className="blue-head" style={{ fontSize: "3.5rem" }}>
        Study in {country}
      </div>
      <div className={styles.mainPara}>{mainDesc}</div>
      <div>
        <div className={styles.img}>
          <Image src={img} alt="ihdi" />
        </div>
        <div className={styles.blueContainer} style={{ marginTop: "-1rem" }}>
          <div className={styles.why}>
            <div className="white-head">Why Study in {country}?</div>
            <div className={styles.whyDesc}>{why.desc}</div>
            <div className={styles.whySub}>
              So, what draws Indian and other international students to the{" "}
              {country}?
            </div>
            <div className={styles.whyBox}>
              {why.card.map((cd) => (
                p
              ))}
            </div>
            <Link
              href="/contact-us"
              className="yellow-button"
              style={{ marginTop: "1.3rem" }}
            >
              Download Destination Guide
            </Link>
          </div>
        </div>
        <div className={styles.whiteContainer}>
          <div className={styles.how}>
            <div className="blue-head">
              How do we make your Dream a Reality?
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
            <Link
              href="/contact-us"
              className="yellow-button"
              style={{ marginTop: "0.6rem" }}
            >
              Connect to Expert
            </Link>
          </div>
        </div>
        <div className={styles.blueContainer}>
          <div className={styles.req}>
            <div className="white-head">
              Tests required to study in {country}
            </div>
            <div className={styles.reqBox}>
              {tests.length === 6 ? (
                <>
                  <div className={styles.reqLeft}>
                    <div className={styles.test}>{tests[0]}</div>
                    <div className={styles.test}>{tests[1]}</div>
                    <div className={styles.test}>{tests[2]}</div>
                  </div>
                  <Image src={flag} alt="flag" />
                  <div className={styles.reqRight}>
                    {tests.slice(3).map((te) => (
                      <div className={styles.test}>{te}</div>
                    ))}
                  </div>
                </>
              ) : tests.length === 5 ? (
                <>
                  <div className={styles.reqLeft}>
                    <div className={styles.test}>{tests[0]}</div>
                    <div className={styles.test}>{tests[1]}</div>
                    <div className={styles.test}>{tests[2]}</div>
                  </div>
                  <Image src={flag} alt="flag" />
                  <div className={styles.reqRight}>
                    <div className={styles.test}>{tests[3]}</div>
                    <div></div>
                    <div id={styles.mr} className={styles.test}>{tests[4]}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.reqLeft}>
                    <div className={styles.test}>{tests[0]}</div>
                    <div></div>
                    <div className={styles.test}>{tests[1]}</div>
                  </div>
                  <Image src={flag} alt="flag" />
                  <div className={styles.reqRight}>
                    <div className={styles.test}>{tests[2]}</div>
                    <div></div>
                    <div className={styles.test}>{tests[3]}</div>
                  </div>
                </>
              )}
            </div>
            <Link
              href="/contact-us"
              className="yellow-button"
              style={{ marginTop: "0.6rem" }}
            >
              Get FREE Counselling
            </Link>
          </div>
        </div>
        <div className={styles.whiteContainer}>
          <div className={styles.top}>
            <div className="blue-head">Top Courses to Study in {country}</div>
            <div className={styles.topBox}>
              {top.map((cd) => (
                <div className={styles.topCard}>
                  <img src={cd.Image} alt="icon" />
                  <div>{cd.Heading}</div>
                </div>
              ))}
            </div>
            <Link
              href="/contact-us"
              className="yellow-button"
              style={{ marginTop: "0.6rem" }}
            >
              Speak to Expert
            </Link>
          </div>
        </div>
        <div className={styles.blueContainer}>
          <div className={styles.admit}>
            <div className="white-head">Our Top Admits</div>
            <div className={styles.admitBox}>
              {admits.map((cd) => (
                <div className={styles.admitCard}>
                  <img src={cd.Image} alt="icon" />
                  <div>{cd.Name}</div>
                </div>
              ))}
            </div>
            <Link
              href="/contact-us"
              className="yellow-button"
              style={{ marginTop: "0.6rem" }}
            >
              Speak to Expert
            </Link>
          </div>
        </div>
        <div style={{ marginTop: "-3rem" }}>
          <WhyGradlers />
        </div>
        <div className={styles.whiteContainer}>
          <div className={styles.faqs}>
            <div className="blue-head">Frequently Asked Questions (FAQs)</div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      <div onClick={() => setShowModal(true)} className={styles.register}>
        REGISTER NOW
      </div>
    </div>
  );
};

export default CountriesPage;
