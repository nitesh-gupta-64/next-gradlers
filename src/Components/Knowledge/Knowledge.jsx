import React from "react";
import styles from "./Knowledge.module.css";
import KnowledgeBox from "../KnowledgeBox/KnowledgeBox";

const Knowledge = () => {
  return (
    <div className={styles.cont}>
      <div className="blue-head">Knowledge Center</div>
      <KnowledgeBox />
    </div>
  );
};

export default Knowledge;
