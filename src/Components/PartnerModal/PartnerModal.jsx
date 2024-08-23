// src/Modal.js
import React from "react";
import styles from "../Modal/Modal.module.css";
import Form from "../Form/Form";
import c from "../../../public/assets/images/cous.svg";
import Image from "next/image";
import PartnerForm from "../PartnerForm/PartnerForm";

const PartnerModal = ({ onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.head}>
          <p style={{ fontSize: "24px", fontWeight: '600' }}>  Partner With Us</p>

          <div
            className={styles.abs}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            X
          </div>
        </div>
        <div className={styles.img}>
          <Image src={c} alt="hg" />
          <PartnerForm />
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
