"use client";
import fb from "../../../public/assets/images/facebook.png";
import x from "../../../public/assets/images/twitter.png";
import insta from "../../../public/assets/images/insta.png";
import logo from "../../../public/assets/images/logo.png";
import ham from "../../../public/assets/images/hamburger.png";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.header}>
      <div>
        <div>
          <Link href='/'>
            <Image height={64} src={logo} />
          </Link>
          <Link
            href={clicked ? "/" : "navpage"}
            onClick={() => setClicked(!clicked)}
          >
            <Image height={32} className={styles.ham} src={ham} />
          </Link>
        </div>
        <div>
          <Link href="/blogs">About Us</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/success">Success Stories</Link>
          <Link href="/locations">Our Locations</Link>
          <div>
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
      <Navbar />
    </div>
  );
};

export default Header;
