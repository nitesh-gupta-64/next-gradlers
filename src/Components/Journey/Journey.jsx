"use client";
import React, { useState } from "react";
import styles from "./Journey.module.css";
import Image from "next/image";
import study from "../../../public/assets/images/study1.png";
import data from "@/Data/data";

const Journey = () => {
  const [clicked, setClicked] = useState("testprep");

  return (
    <div className={styles.journey}>
      <h5>Begin your journey to the world's top universities</h5>
      <div>
        <div>
          <div>
            <div onClick={() => setClicked("testprep")} id={clicked === "testprep" && styles.clicked}>
              <p>Test Prep</p>
            </div>
            <div onClick={() => setClicked("programs")} id={clicked === "programs" && styles.clicked}>
              <p>Programs</p>
            </div>
            <div onClick={() => setClicked("country")} id={clicked === "country" && styles.clicked}>
              <p>Country</p>
            </div>
          </div>
          <div>
            {clicked === "testprep" &&
              data.testPrep.map((val) => (
                <div>
                  <p>{val}</p>
                </div>
              ))}
            {clicked === "programs" &&
              data.programs.map((val) => (
                <div>
                  <p>{val}</p>
                </div>
              ))}
            {clicked === "country" &&
              data.country.map((val) => (
                <div>
                  <p>{val}</p>
                </div>
              ))}
          </div>
        </div>
        <Image src={study} />
      </div>
    </div>
  );
};

export default Journey;
