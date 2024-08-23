import React from "react";
import styles from "./OurAdmits.module.css";
import OurAdmitBox from "../OurAdmitBox/OurAdmitBox";
const OurAdmits = () => {
  return (
    <div className={styles.our}>
      <div className="blue-head">Our Proud Admits</div>
      <OurAdmitBox />
    </div>
  );
};

export default OurAdmits;
