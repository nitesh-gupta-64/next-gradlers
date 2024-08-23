import React from "react";
import styles from "./Commitment.module.css";
import CommitmentBox from "../CommitmentBox/CommitmentBox";
import AchieveBox from "../AchieveBox/AchieveBox";
import Link from "next/link";

const Commitment = () => {
  return (
    <div className={styles.our}>
      <div className={styles.new}>
        <div className="white-head">Gradlers Commitment</div>
        <CommitmentBox />
      </div>
      <AchieveBox />
      <Link href="/contact-us" className="yellow-button">
        Sign-up Now
      </Link>
    </div>
  );
};

export default Commitment;
