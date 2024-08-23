"use client";
import fb from "../../../public/assets/images/facebook.png";
import x from "../../../public/assets/images/twitter.png";
import insta from "../../../public/assets/images/insta.png";
import li from "../../../public/assets/images/linkedIn.png";
import logo from "../../../public/assets/images/lg1.png";
import ham from "../../../public/assets/images/hamburger.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import PartnerForm from "../PartnerForm/PartnerForm";
import { AppContext } from "@/Context/AppContext";
import { useRouter } from "next/navigation";
import PartnerModal from "../PartnerModal/PartnerModal";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const { showForm, setShowForm, isOpen, setIsOpen, showModal, setShowModal } = useContext(AppContext);
  const {} = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <>
      {showModal && <Modal onClose={closeModal} />}
      {showForm && <PartnerModal onClose={closeForm} />}
      <div className={styles.header}>
        <div>
          {/* <div>
            <Link href="/">
              <Image height={60} src={logo} />
            </Link>
            <Link href="/navpage">
              <Image height={32} className={styles.ham} src={ham} />
            </Link>
          </div> */}
          <div>
            <Link href="/">
              <Image height={60} src={logo} />
            </Link>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={styles.burger}
              id={isOpen && styles.burgerr}
            >
              <div className={styles.strip}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div id={styles.hid}>
            <Link href="/about-us">About Us</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/locations">Our Locations</Link>
            <Link href="/contact-us">Contact Us</Link>
            <div>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setShowForm(true)}
              >
                Partner With Us
              </a>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=61560948807769&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <Image height={30} src={fb} />
                </a>
                <a
                  href="https://www.linkedin.com/company/gradlers/posts/?feedView=all"
                  target="_blank"
                >
                  <Image height={30} src={li} />
                </a>
                <a
                  href="https://www.instagram.com/collegeconnecteducation?igsh=MWYxeHB0ZjVrYWo4dw=="
                  target="_blank"
                >
                  <Image height={30} src={insta} />
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <Navbar />
      </div>
      {isOpen && <MobileNav />}
    </>
  );
};

export default Header;
