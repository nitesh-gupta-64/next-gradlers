import React from "react";
import styles from "./Contact.module.css";
import Form from "../Form/Form";
import Image from "next/image";
import con from "../../../public/assets/images/contact.png";
import c1 from "../../../public/assets/images/c1.png";
import c2 from "../../../public/assets/images/c2.png";
import dynamic from "next/dynamic";

// Dynamically import the Map component with no SSR
const Map = dynamic(() => import("../Map"), { ssr: false });

const Contact = () => {
  const latitude = 40.7128;
  const longitude = -74.006;

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
          <Map latitude={latitude} longitude={longitude} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
