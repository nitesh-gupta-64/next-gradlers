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
      {/* <div>
        <p>Want to get into a college in Abroad?</p>
        <p>
          <Link href="/contact-us">Talk to an expert today</Link>
        </p>
      </div> */}
      <div>
        <div>
          <Image style={{ height: "auto", width: "10rem" }} src={logo} />
          <p>
            Credible, and transparent overseas education specialists providing
            swift and holistic services to all study abroad aspirants
          </p>
          <div>
            <a
              href="https://www.linkedin.com/company/gradlers/posts/?feedView=all"
              target="_blank"
            >
              <Image height={35} src={li} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61560948807769&mibextid=ZbWKwL"
              target="_blank"
            >
              <Image height={35} src={fb} />
            </a>
            <a
              href="https://www.instagram.com/collegeconnecteducation?igsh=MWYxeHB0ZjVrYWo4dw=="
              target="_blank"
            >
              <Image height={35} src={insta} />
            </a>
          </div>
        </div>
        <div>
          <span>Help</span>
          <ul>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
            <li>
              <Link href="/counselling">Get Counselling</Link>
            </li>
            <li>
              <Link href="/locations">Our Locations</Link>
            </li>
          </ul>
        </div>
        <div>
          <span>Test Prep</span>
          <ul>
            <li>
              <Link href="/ielts">IELTS</Link>
            </li>
            <li>
              <Link href="/toefl">TOEFL</Link>
            </li>
            <li>
              <Link href="/pte">PTE</Link>
            </li>
            <li>
              <Link href="/duolingo">Duolingo</Link>
            </li>
            <li>
              <Link href="/sat">SAT</Link>
            </li>
            <li>
              <Link href="/gre">GRE</Link>
            </li>
            <li>
              <Link href="/gmat">GMAT</Link>
            </li>
            <span>Visa</span>
            <li>
              <Link href="/visa/usa">USA</Link>
            </li>
            <li>
              <Link href="/visa/uk">UK</Link>
            </li>
            <li>
              <Link href="/visa/germany">Germany</Link>
            </li>
            <li>
              <Link href="/visa/canada">Canada</Link>
            </li>
            <li>
              <Link href="/visa/australia">Australia</Link>
            </li>
          </ul>
        </div>
        <div>
          <span>Countries</span>
          <ul>
            <li>
              <Link href="/usa">USA</Link>
            </li>
            <li>
              <Link href="/canada">Canada</Link>
            </li>
            <li>
              <Link href="/uk">UK</Link>
            </li>
            <li>
              <Link href="/germany">Germany</Link>
            </li>
            <li>
              <Link href="/ireland">Ireland</Link>
            </li>
            <li>
              <Link href="/australia">Australia</Link>
            </li>
            <li>
              <Link href="/new-zealand">New Zealand</Link>
            </li>
            <span>Study</span>
            <li>
              <Link href="/ug">Undergrad</Link>
            </li>
            <li>
              <Link href="/masters">Masters</Link>
            </li>
            <li>
              <Link href="/mba">MBA</Link>
            </li>
            <li>
              <Link href="/phd">PhD</Link>
            </li>
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
              <Image src={call} />
              <p>+91 522-4004344</p>
            </li>
            <li>
              <Image src={addr} />

              <p>
                Lucknow 9 Shahnajaf Road 1st Floor, Hazratganj UP, Lucknow
                226006
              </p>
            </li>
            <li>
              <Image src={call} />
              <p>+91 97694 78930</p>
            </li>

            <li>
              <Image src={addr} />

              <p>
                Mumbai Thane C/o Rasika Decorators, Chendani Koliwada, Mith
                Bunder Road, Thane East, Mumbai 400603
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
          <Link href="/terms-of-service">
            <p>Terms of Service</p>
          </Link>
          <Link href="privacy-policy">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
