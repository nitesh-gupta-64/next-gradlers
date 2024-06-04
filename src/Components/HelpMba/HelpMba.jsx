import React from "react";
import styles from "./HelpMba.module.css";
import Image from "next/image";
import mba1 from "../../../public/assets/images/mba1.png";
import mba2 from "../../../public/assets/images/mba2.png";
import mba3 from "../../../public/assets/images/mba3.png";
import mba4 from "../../../public/assets/images/mba4.png";
import mba5 from "../../../public/assets/images/mba5.png";
import mba6 from "../../../public/assets/images/mba6.png";

const HelpMba = () => {
  return (
    <div className={styles.help}>
      <h5>How We Help You Get Into Your Dream MBA Program?</h5>
      <div>
        <Image src={mba1} />
        <Image src={mba2} />
        <Image src={mba3} />
        <Image src={mba4} />
        <Image src={mba5} />
        <Image src={mba6} />
      </div>
    </div>
  );
};

export default HelpMba;
