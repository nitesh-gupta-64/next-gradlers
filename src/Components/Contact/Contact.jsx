import React from "react";
import styles from "./Contact.module.css";
import Form from "../Form/Form";
import Image from "next/image";
import con from "../../../public/assets/images/contact.png";

const Contact = () => {
  return (
    <div className={styles.con}>
      <div>
        <h2>Contact us</h2>
        <p>Fill our contact form and we will reach out within 24 hours</p>
        <Image src={con} />
      </div>
      <Form />
    </div>
  );
};

export default Contact;
