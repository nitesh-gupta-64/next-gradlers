"use client"
import React, { useContext } from "react";
import styles from "./AdmitContainer.module.css";
import { AppContext } from "@/Context/AppContext";
import AdmitCard from "../AdmitCard";

const AdmitContainer = () => {
  const { admitInfo } = useContext(AppContext);
  const data = admitInfo.slice(0,6)

  return (
    <div className={styles.ac}>
      {
        data.map((admit) => (<AdmitCard admit={admit} />))
      }
    </div>
  );
};

export default AdmitContainer;
