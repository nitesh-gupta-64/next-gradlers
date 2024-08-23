"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./MobileNav.module.css";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import PartnerForm from "@/Components/PartnerForm/PartnerForm";
import { AppContext } from "@/Context/AppContext";

const MobileNav = () => {
  const router = useRouter();
  const { showForm, setShowForm, setIsOpen } = useContext(AppContext);

  return (
    <>
      <div onClick={() => setIsOpen(false)} className={styles.navCon}>
        <div className={styles.nav}>
          <ul>
            <li>
              <h3>Test Prep</h3>
              <ul>
                <li>
                  <h4>English Proficiency Test</h4>
                  <ul>
                    <li>
                      <p>
                        <Link href="/ielts">IELTS</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link href="/toefl">TOEFL</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link href="/pte">PTE</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link href="/duolingo">Duolingo</Link>
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Standardized Tests</h4>
                  <ul>
                    <li>
                      <p>
                        <Link href="/sat">SAT</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link href="/gre">GRE</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link href="/gmat">GMAT</Link>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <h3>
                <h3>Countries</h3>
              </h3>
              <ul>
                <li>
                  <p>
                    <Link href="/usa">USA</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/canada">Canada</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/uk">UK</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/germany">Germany</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/ireland">Ireland</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/australia">Australia</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/new-zealand">New Zealand</Link>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h3>Study</h3>
              <ul>
                <li>
                  <p>
                    <Link href="/ug">Undergrad</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/masters">Masters (MS)</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/mba">MBA</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/phd">Ph.D</Link>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h3>
                <h3>Visas</h3>
              </h3>
              <ul>
                <li>
                  <p>
                    <Link href="/visa/usa">USA</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/visa/uk">UK</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/visa/germany">Germany</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/visa/canada">Canada</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/visa/australia">Australia</Link>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h3>
                <Link href="/counselling">Career Counselling</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link href="/resources">Resources</Link>
              </h3>
              <ul>
                <li>
                  <p>
                    <Link href="/about-us">About Us</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/ourevents">Events</Link>
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
              <h3>
                <Link href="/locations">Our Locations</Link>
              </h3>
            </li>
            <li>
              <h3>
                <a
                  onClick={() => {
                    setShowForm(true);
                    router.back();
                  }}
                >
                  Partner with us
                </a>
              </h3>
            </li>
            <li>
              <h3 style={{ marginBottom: "3rem" }}>
                <Link href="/contact-us">Contact Us</Link>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
