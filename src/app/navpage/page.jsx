"use client";
import React, { useContext } from "react";
import styles from "./navpage.module.css";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { AppContext } from "@/Context/AppContext";

const NavPage = () => {
  const router = useRouter();
  const { gm } = useContext(AppContext);
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
                <Link href="/aboutus">About Us</Link>
              </p>
            </li>
            <li>
              <p>
                <Link
                  href={`/blogs/gmat/${
                    gm[0] && Object.keys(gm[0]).length === 0
                      ? "noblog"
                      : gm[0]?.slug || "noblog"
                  }`}
                >
                  Blogs
                </Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/success">Success Stories</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/ourevents">Events</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/countries">USA</Link>
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
