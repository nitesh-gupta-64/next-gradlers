import React from "react";
import styles from "./Contact.module.css";
import Form from "../Form/Form";
import Image from "next/image";
import con from "../../../public/assets/images/contact.png";
import c1 from "../../../public/assets/images/c1.png";
import c2 from "../../../public/assets/images/c2.png";

const Contact = () => {
  return (
    <div className={styles.c}>
      <div className={styles.con}>
        <div>
          <h2>Contact us</h2>
          <p>Fill our contact form and we will reach out within 24 hours</p>
          <Image src={con} />
        </div>
        <Form />
      </div>
      <div className={styles.con1}>
        <div>
          <Image src={c1} />
        </div>
        <div>
          <Image src={c2} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
