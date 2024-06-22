import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../../public/assets/images/lg1.png";
import fb from "../../../public/assets/images/facebook.png";
import x from "../../../public/assets/images/twitter.png";
import insta from "../../../public/assets/images/insta.png";
import li from "../../../public/assets/images/linkedIn.png";
import call from "../../../public/assets/images/call.png";
import addr from "../../../public/assets/images/addr.png";
import mail from "../../../public/assets/images/mail.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Want to get into a college in Abroad?</p>
        <p>
          <Link href="/contactus">Talk to an expert today</Link>
        </p>
      </div>
      <div>
        <div>
          <Image style={{ height: "auto", width: "10rem" }} src={logo} />
          <p>
            Gradlers aims to help applicants make informed choices about global
            education opportunities while providing holistic guidance to
            navigate complex admissions processes.
          </p>
          <div>
            <Image height={45} src={li} />
            <Image height={45} src={fb} />
            <Image height={45} src={x} />
            <Image height={45} src={insta} />
          </div>
        </div>
        <div>
          <span>Help</span>
          <ul>
            <li>
              <Link href="/#aboutus">About us</Link>
            </li>
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
              <p>040-45066171</p>
            </li>
            <li>
              <Image src={addr} />
              <p>
                5th Floor, 502, Vista Grand Tower, Raj Bhavan Rd, Raj Bhavan
                Quarters Colony, Somajiguda, Hyderabad, Telangana 500082
              </p>
            </li>
            <li>
              <Image src={mail} />
              <p>info@gradlers.com</p>
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
