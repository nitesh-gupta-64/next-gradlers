// src/Modal.js
import React from "react";
import styles from "./Modal.module.css";
import Form from "../Form/Form";
import c from "../../../public/assets/images/pop.png";
import Image from "next/image";

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.head}>
          <div>
            <p style={{ fontSize: "20px" }}>Tell us about you</p>
            <p style={{ fontSize: "12px", fontWeight: "300" }}>
              Please tell a bit about you so that we can help you better
            </p>
          </div>
          <div onClick={onClose} style={{cursor: 'pointer'}}>X</div>
        </div>
        <div className={styles.img}>
          <Image src={c} alt="hg" />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;
