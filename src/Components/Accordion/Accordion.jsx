"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css";
import drop from "@/../public/assets/images/drop.png";
import Image from "next/image";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faq}>
      <p onClick={toggleOpen} style={{ cursor: "pointer", fontWeight: "500" }}>
        <p>{question}</p>
        {isOpen ? (
          <Image
            style={{
              height: "0.4rem",
              width: "auto",
              transform: "rotate(180deg)",
            }}
            src={drop}
            alt="drop"
          />
        ) : (
          <Image
            style={{ height: "0.38rem", width: "auto" }}
            src={drop}
            alt="drop"
          />
        )}
      </p>
      {isOpen && (
        <p>
          <p>{"→"}</p> <p>{answer}</p>
        </p>
      )}
    </div>
  );
};

export default FaqItem;
