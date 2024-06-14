"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import search from "../../../public/assets/images/search.png";
import Image from "next/image";
import Link from "next/link";
import drop from "../../../public/assets/images/drop.png";
import dropp from "../../../public/assets/images/drop1.png";

const Navbar = () => {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <div
            onMouseEnter={() => setDrop1(true)}
            onMouseLeave={() => setDrop1(false)}
          >
            <h3>Test Prep</h3>
            <Image src={drop} />
          </div>

          {drop1 && (
            <ul
              onMouseEnter={() => setDrop1(true)}
              onMouseLeave={() => setDrop1(false)}
              className={styles.drop1}
            >
              <li>
                <div
                  onMouseEnter={() => setDrop2(true)}
                  onMouseLeave={() => setDrop2(false)}
                >
                  <p>English Profiency</p>
                  <Image src={dropp} />
                </div>
                {drop2 && (
                  <ul
                    onMouseEnter={() => setDrop2(true)}
                    onMouseLeave={() => setDrop2(false)}
                    className={styles.drop2}
                  >
                    <li>
                      <Link href="/counselling">
                        <p>IELTS Academics</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/counselling">
                        <p>PTE Academics</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/counselling">
                        <p>TOEFL IBT</p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div
                  onMouseEnter={() => setDrop5(true)}
                  onMouseLeave={() => setDrop5(false)}
                >
                  <p> Standardised Test</p>
                  <Image src={dropp} />
                </div>
                {drop5 && (
                  <ul
                    onMouseEnter={() => setDrop5(true)}
                    onMouseLeave={() => setDrop5(false)}
                    className={styles.drop5}
                  >
                    <li>
                      <Link href="/counselling">
                        <p>IELTS Academics</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/counselling">
                        <p>PTE Academics</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/counselling">
                        <p>TOEFL IBT</p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            onMouseEnter={() => setDrop3(true)}
            onMouseLeave={() => setDrop3(false)}
          >
            <h3>Admissions</h3>
            <Image src={drop} />
          </div>
          {drop3 && (
            <ul
              onMouseEnter={() => setDrop3(true)}
              onMouseLeave={() => setDrop3(false)}
              className={styles.drop3}
            >
              <li>
                <Link href="/success">Success Stories</Link>
              </li>
              <li>
                <Link href="/blogs/categoryId/blogId">Blogs</Link>
              </li>
              <li>
                <Link href="/ourevents">Events</Link>
              </li>
              <li>
                <Link href="/counselling">Undergrad</Link>
              </li>
              <li>
                <Link href="/counselling">Masters (MS)</Link>
              </li>
              <li>
                <Link href="/mba">MBA</Link>
              </li>
              <li>
                <Link href="/counselling">PHD</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/contactus">
            <h3>Visa Guidance</h3>
          </Link>
        </li>
        <li>
          <Link href="/counselling">
            <h3>Career and Counselling</h3>
          </Link>
        </li>
        <li>
          <div
            onMouseEnter={() => setDrop4(true)}
            onMouseLeave={() => setDrop4(false)}
          >
            <h3>Diag Test</h3>
            <Image src={drop} />
          </div>
          {drop4 && (
            <ul
              onMouseEnter={() => setDrop4(true)}
              onMouseLeave={() => setDrop4(false)}
              className={styles.drop4}
            >
              <li>
                <Link href="/gmat">GMAT</Link>
              </li>
              <li>
                <Link href="/counselling">IELTS</Link>
              </li>
              <li>
                <Link href="/counselling">TOEFL</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div>
        <Image src={search} />
      </div>
    </div>
  );
};

export default Navbar;
