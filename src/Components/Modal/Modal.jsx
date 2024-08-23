// src/Modal.js
import React from "react";
import styles from "./Modal.module.css";
import Form from "../Form/Form";
import c from "../../../public/assets/images/cous-cropped.svg";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.head}>
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "600",
              marginBottom: "0.6rem",
            }}
          >
            Tell us about you!!
          </p>
          <p style={{ fontSize: "0.8rem", fontWeight: "300" }}>
            Please tell a bit about you so that we can help you better
          </p>

          <div
            className={styles.abs}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            <RxCross2 style={{fontSize: '2rem'}} />
          </div>
        </div>
        <div className={styles.img}>
          <Form />
          <Image src={c} alt="hg" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
