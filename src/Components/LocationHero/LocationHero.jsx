import React from "react";
import styles from "./LocationHero.module.css";
import Image from "next/image";
import loca from "../../../public/assets/images/loca.png";

const LocationHero = () => {
  return (
    <div className={styles.loc}>
      <div>
        <h2>Join us to get your dreams come true!</h2>
        <p>Join us various locations</p>
      </div>
      <Image src={loca} />
    </div>
  );
};

export default LocationHero;
