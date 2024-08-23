import React from "react";
import styles from "./Contact.module.css";
import Form from "../Form/Form";
import Image from "next/image";
import con from "../../../public/gradlers/10.jpg";
import c1 from "../../../public/assets/images/c1.png";
import c2 from "../../../public/assets/images/c2.png";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { ssr: false });

const Contact = () => {
  const latitude = 17.417990;
  const longitude = 78.459050;

  return (
    <div className={styles.c}>
      <div className={styles.con}>
        <div>
          <h2>Contact us</h2>
          <p>
            Fill our contact form and we will reach out <br /> within 24 hours
          </p>
          <Image src={con} />
        </div>
        <div>
          <Image src={c1} />
        </div>
      </div>
      <div className={styles.con1}>
        <Form />
        <div>
          <Map latitude={latitude} longitude={longitude} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
