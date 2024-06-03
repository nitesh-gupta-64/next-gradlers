import fb from "../../../public/assets/images/facebook.png";
import x from "../../../public/assets/images/twitter.png";
import insta from "../../../public/assets/images/insta.png";
import li from "../../../public/assets/images/linkedIn.png";
import logo from "../../../public/assets/images/logo.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div>
          <Image height={64} src={logo} />
        </div>
        <div>
          <Link href="/aboutus">About Us</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/locations">Our Locations</Link>
          <div >
            <Link href="/contactus">Contact Us</Link>
            <div>
              <Image height={34} src={fb} />
              <Image height={34} src={x} />
              <Image height={34} src={insta} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Navbar/>
    </div>
  );
};

export default Header;
