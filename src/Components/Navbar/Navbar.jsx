"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import search from "../../../public/assets/images/search.png";
import Image from "next/image";
import Link from "next/link";
import drop from "../../../public/assets/images/drop.png";
import dropp from "../../../public/assets/images/drop1.png";
import { AppContext } from "@/Context/AppContext";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [drop6, setDrop6] = useState(false);
  const [drop7, setDrop7] = useState(false);
  const [drop8, setDrop8] = useState(false);
  const [drop9, setDrop9] = useState(false);
  const { gm } = useContext(AppContext);
  return (
    <>
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
                        <Link href="/ielts">
                          <p>IELTS</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/toefl">
                          <p>TOEFL</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pte">
                          <p>PTE</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/duolingo">
                          <p>DUOLINGO</p>
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
                        <Link href="/sat">
                          <p>SAT</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gre">
                          <p>GRE</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gmat">
                          <p>GMAT</p>
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
              <h3>Countries</h3>
              <Image src={drop} />
            </div>
            {drop3 && (
              <ul
                onMouseEnter={() => setDrop3(true)}
                onMouseLeave={() => setDrop3(false)}
                className={styles.drop6}
              >
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
              </ul>
            )}
          </li>
          <li>
            <div
              onMouseEnter={() => setDrop4(true)}
              onMouseLeave={() => setDrop4(false)}
            >
              <h3>Study</h3>
              <Image src={drop} />
            </div>
            {drop4 && (
              <ul
                onMouseEnter={() => setDrop4(true)}
                onMouseLeave={() => setDrop4(false)}
                className={styles.drop3}
              >
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
                  <Link href="/phd">Ph.D</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              onMouseEnter={() => setDrop6(true)}
              onMouseLeave={() => setDrop6(false)}
            >
              <h3>Visas</h3>
              <Image src={drop} />
            </div>
            {drop6 && (
              <ul
                onMouseEnter={() => setDrop6(true)}
                onMouseLeave={() => setDrop6(false)}
                className={styles.drop6}
              >
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
            )}
          </li>
          <li>
            <Link href="/counselling">
              <h3>Career Counselling</h3>
            </Link>
          </li>
        </ul>
        <div>
          <Image src={search} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
