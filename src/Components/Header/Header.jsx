"use client";
import fb from "../../../public/assets/images/facebook.png";
import x from "../../../public/assets/images/twitter.png";
import insta from "../../../public/assets/images/insta.png";
import logo from "../../../public/assets/images/lg1.png";
import ham from "../../../public/assets/images/hamburger.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 90000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <Modal onClose={closeModal} />}
      <div className={styles.header}>
        <div>
          <div>
            <Link href="/">
              <Image height={60} src={logo} />
            </Link>
            <Link href="/navpage">
              <Image height={32} className={styles.ham} src={ham} />
            </Link>
          </div>
          <div>
            <Link href="/aboutus">About Us</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/locations">Our Locations</Link>
            <div>
              <Link href="/contactus">Contact Us</Link>
              <div>
                <Image height={30} src={fb} />
                <Image height={30} src={x} />
                <Image height={30} src={insta} />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
