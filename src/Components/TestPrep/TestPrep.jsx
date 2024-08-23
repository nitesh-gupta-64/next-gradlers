"use client";
import React, { useContext } from "react";
import styles from "./TestPrep.module.css";
import Image from "next/image";
import Script from "next/script";
import CountriesBox from "../CountriesBox/CountriesBox";
import Link from "next/link";
import AchieverBox from "../AchieverBox/AchieverBox";
import { AppContext } from "@/Context/AppContext";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";
import FaqItem from "../Accordion/Accordion";

const TestPrep = ({
  nav,
  img,
  test,
  about,
  why,
  whyGradlers,
  who,
  whoIf,
  countries,
  pattern,
  patternDesc,
  ace,
  prep,
  sol,
  faqs,
}) => {
  const { showModal, setShowModal } = useContext(AppContext);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <span style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
          Home
        </span>
        / {nav}
      </div>
      <div className={styles.img}>
        <Image src={img} alt="img" />
        <div className={styles.abs}></div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.about}>
          <div className="blue-head">About {test}</div>
          <div>{about.overview}</div>
          <div>
            <div>{about.info}</div>

            {about.types && (
              <>
                {" "}
                <div>
                  The {test} test is of {about.types.length} types
                </div>
                <ul>
                  {about.types.map((type, i) => (
                    <li>
                      {i + 1}
                      {".  "}
                      {type}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>{about.prep}</div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.why}>
          <div className="blue-head">Why {test}?</div>
          <div className={styles.whyHead}>
            {why.map((head) => (
              <div>{head.Title}</div>
            ))}
          </div>
          <div className={styles.whyDesc}>
            {why.map((head) => (
              <div>{head.Description}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.why2}>
          <div className="blue-head">Why Gradlers {test} Prep?</div>
          <div className={styles.whyBox}>
            {whyGradlers.map((why) => (
              <div className={styles.whyCard}>
                <img src={why.Image} alt="img" />
                <div>{why.Description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div className={styles.who}>
          <div
            style={{ textAlign: "start", lineHeight: "3rem" }}
            className="white-head"
          >
            Who can take the {test} Exam?
          </div>
          {who.map((wh) => (
            <div>~ {wh}</div>
          ))}
          {whoIf.length > 0 && (
            <ul>
              <li>~ {test} can be taken if,</li>
              {whoIf?.map((wh, i) => (
                <li>
                  {i + 1}
                  {". "} {wh}
                </li>
              ))}
            </ul>
          )}
          <div className={styles.yellowText}>
            {test} scores are accepted by countries such as -
          </div>
          <CountriesBox data={countries} num={4} />
          <Link
            style={{ margin: "0" }}
            href="/contact-us"
            className="yellow-button"
          >
            Book A Demo Session
          </Link>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.pattern}>
          <div style={{ textAlign: "start" }} className="blue-head">
            {test} Exam Pattern
          </div>
          {patternDesc.map((pt, i) => (
            <div className={styles.ptDesc} key={i}>
              {pt}
            </div>
          ))}
          <table className={styles.ptTable}>
            <thead>
              <tr>
                <th>Sections</th>
                <th>Tasks</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {pattern.map((section, index) => (
                <tr key={index}>
                  <td>{section.section}</td>
                  <td>{section.tasks}</td>
                  <td>{section.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div className={styles.ace}>
          <div style={{ textAlign: "start" }} className="white-head">
            How to ace the {test}?
          </div>
          <div className={styles.aceBox}>
            {ace.map((ac) => (
              <div className={styles.aceCard}>
                <img src={ac.Image} alt="img" />
                <div>{ac.Description}</div>
              </div>
            ))}
          </div>
          <Link
            style={{ margin: "0" }}
            href="/contact-us"
            className="yellow-button"
          >
            Book Appointment with Trainer
          </Link>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.prep}>
          <div style={{ textAlign: "start" }} className="blue-head">
            Gradlers Prep Courses
          </div>
          <div className={styles.prepBox}>
            {prep.map((pr) => (
              <div className={styles.prepCard}>
                <img src={pr.Image} alt="img" />
                <div>
                  <img src="/grlogo.png" alt="logo" />
                  <div>{pr.Description}</div>
                </div>
              </div>
            ))}
          </div>
          <Link
            // style={{ margin: "0" }}
            href="/contact-us"
            className="yellow-button"
          >
            Join Now
          </Link>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div className={styles.sol}>
          <div style={{ textAlign: "start" }} className="white-head">
            Gradlers Learning Solutions
          </div>
          <div className={styles.solBox}>
            {sol.map((sl) => (
              <div className={styles.solCard}>
                <img src={sl.image} alt="img" />
                <div>{sl.description}</div>
              </div>
            ))}
          </div>
          <Link
            // style={{ margin: "0" }}
            href="/contact-us"
            className="yellow-button"
          >
            Speak to Our Experts
          </Link>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.ach}>
          <div style={{ textAlign: "left" }} className="blue-head">
            Our Achievers
          </div>
          <AchieverBox test={test} />
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
      {/* <div className={styles.form}>
        <form
          class="npf_wgts"
          data-height="400px"
          data-w="126126f4ca07e7566448375bd97faeee"
        ></form>
        <Script type="text/javascript">
          var s=document.createElement("script"); s.type="text/javascript";
          s.async=true; s.src="https://widgets.in8.nopaperforms.com/emwgts.js";
          document.body.appendChild(s);
        </Script>
      </div> */}
      <div onClick={() => setShowModal(true)} className={styles.register}>
        REGISTER NOW
      </div>
    </div>
  );
};

export default TestPrep;
