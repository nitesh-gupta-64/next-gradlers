"use client"
import React from "react";
import styles from "./navpage.module.css";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

const NavPage = () => {
  const router = useRouter();
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <h3>Test Prep</h3>
          <ul>
            <li>
              <p>
                <Link href="gmat">GMAT</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/counselling">IELTS</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/counselling">TOEFL</Link>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <Link href="/resources">Resources</Link>
          </h3>
          <ul>
            <li>
              <p>
                <Link href="/blogs">Blogs</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/success">Success Stories</Link>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h3>Admissions</h3>
          <ul>
            <li>
              <p>
                <Link href="/mba">MBA</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/counselling">Masters (MS)</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/counselling">Undergrad</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/counselling">PHD</Link>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <Link href="/counselling">Career and Counselling</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/locations">Our Locations</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/contactus">Contact Us</Link>
          </h3>
        </li>
      </ul>
      <div onClick={() => router.back()}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default NavPage;
