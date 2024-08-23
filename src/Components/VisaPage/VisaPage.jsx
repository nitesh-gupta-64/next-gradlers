"use client";
import React, { useContext } from "react";
import styles from "./VisaPage.module.css";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { AppContext } from "@/Context/AppContext";
import Modal from "../Modal/Modal";
import WhyGradlers from "../WhyGradlers/WhyGradlers";
import FaqItem from "../Accordion/Accordion";
import { useRouter } from "next/navigation";
import BlackCard from "../BlackCard/BlackCard";

const VisaPage = ({
  img,
  country,
  mainDesc,
  visaDesc,
  visa,
  eligibility,
  requirement,
  steps,
  fees,
  feesDesc,
  services,
  heading,
}) => {
  const { showModal, setShowModal, admitInfo, visaInfo } =
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
        / Visa/ {country}
      </div>
      <div className="blue-head" style={{ fontSize: "3.5rem" }}>
        {heading}
      </div>
      <div>
        <div className={styles.img}>
          <Image src={img} alt="ihdi" />
        </div>
        <div className={styles.mainPara}>{mainDesc}</div>
      </div>
      <div className={styles.blueContainer}>
        <div className={styles.visa}>
          <div className="white-head">{country} Student Visa Types</div>
          <div className={styles.visaDesc}>{visaDesc}</div>
          <div className={styles.visaBox1}>
         
              {visa.map((vi) => (
                <div className={styles.vis}>
                  <BlackCard ph={vi} />
                  <div className={styles.visaCard2}>
                    {vi.Types.map((typ) => (
                      <div className={styles.visaType}>
                        <span style={{ fontWeight: "600" }}>{typ.Type}: </span>
                        {typ.Description}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
         
          </div>
        </div>
      </div>
      {eligibility.Description.length > 0 && (
        <div className={styles.whiteContainer}>
          <div className={styles.elg}>
            <div className="blue-head">{country} Student Visa Eligibility</div>
            <div className={styles.elgBox}>
              <div>{eligibility.Heading}</div>
              {eligibility.Description.map((el) => (
                <div style={{ marginLeft: "1rem" }}>• {el}</div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.whiteContainer}>
        <div className={styles.elg}>
          <div className="blue-head">{country} Student Visa Requirements</div>
          <div className={styles.elgBox}>
            <div>{requirement.Heading}</div>
            {requirement.Description.map((el) => (
              <div style={{ marginLeft: "1rem" }}>• {el}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div className={styles.step}>
          <div className="white-head">
            How to apply for a {country} Student Visa?
          </div>
          <div className={styles.stepBox}>
            {steps.map((st, i) => (
              <div className={styles.stepCard}>
                <div>{i + 1}</div>
                <div>{st}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.fees}>
          <div className="blue-head">Cost of {country} Student Visa?</div>
          <div className={styles.feesDesc}>{feesDesc}</div>
          <div className={styles.feesBox}>
            {fees.map((fee) => (
              <div className={styles.feesCard}>
                <div>{fee.Heading}</div>
                <div>{fee.Description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div className={styles.ser}>
          <div className="white-head">Gradlers Visa Services</div>
          <div className={styles.serBox}>
            {services.map((se) => (
              <BlackCard ph={se} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.suc}>
          <div className="blue-head">Our Recent Visa Successes</div>
          <div className={styles.sucBox}>
            {successes.map((su) => (
              <div className={styles.sucCard}>
                <img src={su.Image} alt="visa" />
                <div>{su.Name}</div>
                <div>{su.Description.slice(0, 150)}...</div>
              </div>
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

export default VisaPage;
