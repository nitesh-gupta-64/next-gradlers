import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import fb from "../../../public/assets/images/facebook.png";
import x from "../../../public/assets/images/twitter.png";
import insta from "../../../public/assets/images/insta.png";
import li from "../../../public/assets/images/linkedIn.png";
import call from "../../../public/assets/images/call.png";
import addr from "../../../public/assets/images/addr.png";
import mail from "../../../public/assets/images/mail.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Want to get into a college in Abroud?</p>
        <p>Talk to an expert today</p>
      </div>
      <div>
        <div>
          <Image src={logo} />
          <p>
            Gradlers aims to help applicants make informed choices about global
            education opportunities while providing holistic guidance to
            navigate complex admissions processes.
          </p>
          <div>
            <Image src={li} />
            <Image src={fb} />
            <Image src={x} />
            <Image src={insta} />
          </div>
        </div>
        <div>
          <span>Help</span>
          <ul>
            <li>About us</li>
            <li>Branch List</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <span>Explore</span>
          <ul>
            <li>Programs</li>
            <li>Regitration</li>
          </ul>
        </div>
        <div>
          <span>Contact us</span>
          <ul>
            <li>
              <Image src={call} />
              <p>+91-93 552 552 23</p>
            </li>
            <li>
              <Image src={addr} />
              <p>
                REG. OFFICE : 704,7TH FLOOR PALM COURT, MEHRAULI-GURGAON ROAD
                SECTOR 16, GURUGRAM, HARYANA (122007)
              </p>
            </li>
            <li>
              <Image src={mail} />
              <p>admin@Gradlers.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>COPYRIGHT ©GRADLERS. ALL RIGHTS RESERVED</h2>
        <div>
            <p>Terms and Conditions</p>
            <p>Privacy and policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;