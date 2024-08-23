import React from "react";
import styles from "./IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/exam.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";
import Descriptor from "../Descriptor/Descriptor";
import mba1 from "../../../public/assets/images/mba1.png";
import mba2 from "../../../public/assets/images/mba2.png";
import mba3 from "../../../public/assets/images/mba3.png";
import mba4 from "../../../public/assets/images/mba4.png";
import mba5 from "../../../public/assets/images/mba5.png";
import mba6 from "../../../public/assets/images/mba6.png";
import SmlDesc from "../SmlDesc/SmlDesc";
import BlueDescriptor from "../BlueDescriptor/BlueDescriptor";

const IELTS = () => {
  const ieltsFaqs = [
    {
      question: "How do I register for the IELTS?",
      answer:
        "You can register online from the official website or visit the nearest IDP branch.",
    },
    {
      question: "How many times in a year is the IELTS exam held?",
      answer: "IELTS is conducted 4 times a month and 48 times a year.",
    },
    {
      question: "How many times can I take the IELTS?",
      answer:
        "IELTS can be taken as many times as one pleases. There is no limit to the number of IELTS tests that one can take. However, you will need to pay the test fees for each attempt that you take.",
    },
    {
      question: "What is the validity of the IELTS exam?",
      answer:
        "An IELTS score is valid for 2 years from the date the results were published.",
    },
    {
      question: "How soon do I get my IELTS score?",
      answer:
        "The results come live within 3-5 days for a digital test and after 13 days for a paper-based test.",
    },
    {
      question:
        "If I take the IELTS more than once, which score will the universities consider?",
      answer:
        "Universities consider the score that you have mentioned in your application. You can mention your highest score if it is valid.",
    },
    {
      question:
        "Do I need to have an IELTS score when applying to universities?",
      answer:
        "A valid IELTS score must be mentioned in your university application form.",
    },
    {
      question: "What is IELTS IDP?",
      answer:
        "IDP (International Development Program) is an organization that offers placements for many countries like the UK, Canada, and Australia. IDP has branches in 31 countries. The IDP organizes the IELTS exam in 56 countries. The exam was conducted in 1400 test locations and 260 computer-authorized test centers worldwide.",
    },
    {
      question: "Is there any difference between IDP IELTS and IELTS?",
      answer: "There is no difference between both the tests.",
    },
    {
      question: "Is PTE easier than IELTS?",
      answer:
        "PTE and IELTS are English language proficiency tests in high demand. PTE is considered easier than the IELTS by some due to its modular structure and easier preparation. However, opinions vary, and some find the reading section of PTE more challenging than IELTS.",
    },
    {
      question: "What is the ideal time for IELTS preparation?",
      answer:
        "It will take approximately 2 to 3 months to prepare for the IELTS. Plan a schedule and work accordingly to clear the exam with a high score. Take several mock tests before giving the actual examination. The chance of getting a high band score will increase.",
    },
    {
      question: "When can I check the IELTS result?",
      answer:
        "IELTS Computer-based test results will be released within 3 to 5 days and paper-based test results will be made accessible online at 12:00 a.m. GMT on the 13th day after the test.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.ie}>
        <div className={styles.c1}>
          <Image src={hm} alt="lt" />
          <div>
            <h2>About IELTS</h2>
            <p>
              The International English Language Testing System (IELTS) stands
              as one of the most recognized English language tests globally. It
              serves as a benchmark for universities, consulates, and employers
              to gauge an individual’s English proficiency. Achieving top IELTS
              score is pivotal to those aspiring to pursue opportunities in
              English Speaking countries. The test is taken by more than 3
              million test takers worldwide annually and tests an individual
              {"'"}s ability to speak, read and write English fluently. <br />
              The IELTS test is of 2 types <br /> 1.IELTS Academics (For Studies
              Abroad) <br />
              2. IELTS General (For Immigration, PR & Work)
            </p>
            <p>
              Gradlers IELTS prep offers structured and tailored programs
              designed to help you excel in the test. Our course is backed by
              comprehensive training material, expert instructors, and diverse
              training options that makes us the first choice for IELTS
              preparation.
            </p>
          </div>
        </div>
        <div className={styles.c2}>
          <div>
            <div>
              <h2>Why IELTS?</h2>
              <ul>
                <li imag={mba1}>
                  More than 10,000 institutions around the world accept IELTS
                  scores
                </li>
                <li>
                  In India, there are an estimated 1.3 to 1.4 million IELTS test
                  takers every year
                </li>
                <li>
                  The IELTS is conducted in 140 countries around the world
                </li>
                <li>Can be taken in both paper and computer-based formats</li>
                <li>IELTS test score is valid for 2-Years</li>
              </ul>
            </div>
            <Image src={boy} alt="boy" />
          </div>

          <div>
            <div>
              <h2>Who can take the IELTS Exam?</h2>
              <div>
                <p>
                  Anyone above 16 years old can attempt IELTS. There is no
                  maximum cap or prescribed age limit for taking IELTS test.
                  IELTS can be taken if,
                </p>

                <section>
                  <Descriptor imag={mba1}>
                    You are planning to migrate to an English-speaking country
                  </Descriptor>
                  <Descriptor imag={mba2}>
                    Want to get an admission to a university in another country
                  </Descriptor>
                  <Descriptor imag={mba3}>
                    Planning to get better career(work) opportunities abroad
                  </Descriptor>
                </section>
                <div style={{paddingTop: '2rem'}}>{" "}</div>
                <h2>IELTS scores are accepted by countries such as -</h2>
                <section>
                  <SmlDesc imag={mba1}>Australia</SmlDesc>
                  <SmlDesc imag={mba2}>U.K</SmlDesc>
                  <SmlDesc imag={mba3}>U.S.A</SmlDesc>
                  <SmlDesc imag={mba4}>New Zealand</SmlDesc>
                  <SmlDesc imag={mba5}>Canada</SmlDesc>
                  <SmlDesc imag={mba6}>Many others</SmlDesc>
                </section>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>IELTS Exam Pattern</h2>
              <p>
                The IELTS test is for 2 hours 45 minutes duration and comprises
                4 sections to test the English language ability of the testing
                individual. Reading, listening, speaking, Writing skills will be
                tested during the exam.
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>Sections</th>
                    <th>Tasks</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Reading</td>
                    <td>3 Passages, 40 questions</td>
                    <td>60 Mins.</td>
                  </tr>
                  <tr>
                    <td>Writing</td>
                    <td>2 tasks, 1 question each</td>
                    <td>60 Mins</td>
                  </tr>
                  <tr>
                    <td>Listening</td>
                    <td>4 recordings, 1 question in each</td>
                    <td>30 Mins. + 10 Mins transfer time</td>
                  </tr>
                  <tr>
                    <td>Speaking</td>
                    <td>3 Parts, questions vary</td>
                    <td>11-14 Mins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>How to Ace the IELTS?</h2>
            <section>
              <BlueDescriptor imag={mba1}>
                Choose the right prep course
              </BlueDescriptor>
              <BlueDescriptor imag={mba2}>Set a target score</BlueDescriptor>
              <BlueDescriptor imag={mba3}>
                Rigorous Self-Practice
              </BlueDescriptor>
              <BlueDescriptor imag={mba4}>Improve vocabulary</BlueDescriptor>
              <BlueDescriptor imag={mba5}>
                Regularly attempt section-wise tests
              </BlueDescriptor>
              <BlueDescriptor imag={mba6}>
                Take minimum 5 full-length mock tests
              </BlueDescriptor>
            </section>
            <button>Book Appointment with Trainer</button>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>Why Gradlers IELTS Prep?</h2>
            <section>
              <Descriptor imag={mba1}>Best fit Study Plans</Descriptor>
              <Descriptor imag={mba2}>
                Best guidance for a perfect score
              </Descriptor>
              <Descriptor imag={mba3}>
                High quality Practice Material
              </Descriptor>
              <Descriptor imag={mba4}>Score Improvement Plan</Descriptor>
              <Descriptor imag={mba5}>Learn Anytime, Anywhere</Descriptor>
              <Descriptor imag={mba6}>Convenient & Flexible timings</Descriptor>
              <Descriptor imag={mba2}>Experienced Trainers</Descriptor>
              <Descriptor imag={mba1}>Classroom and LIVE training</Descriptor>
            </section>
            <button>Book A Demo Session</button>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>Gradlers Learning Solutions</h2>
            <section>
              <BlueDescriptor imag={mba1}>In-Class Training</BlueDescriptor>
              <BlueDescriptor imag={mba2}>LIVE Online Training</BlueDescriptor>
              <BlueDescriptor imag={mba3}>
                Private Tutoring (1-on-1)
              </BlueDescriptor>
              <BlueDescriptor imag={mba4}>Morning Batches</BlueDescriptor>
              <BlueDescriptor imag={mba5}>Late Evening Batches</BlueDescriptor>
            </section>
            <button>Speak to Our Experts</button>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>Gradlers Prep Courses</h2>
            <section>
              <Descriptor imag={mba1}>IELTS Self-Prep</Descriptor>
              <Descriptor imag={mba2}>IELTS Standard</Descriptor>
              <Descriptor imag={mba3}>IELTS Fast-track</Descriptor>
              <Descriptor imag={mba4}>IELTS 1-on-1</Descriptor>
            </section>
            <button>Join Now</button>
          </div>
        </div>
        <h2>Recent Admits</h2>
        <div className={styles.c4}>
          <AdmitContainer />
        </div>
        <div className={styles.c6}>
          <h3>Frequently Asked Questions (FAQs)</h3>
          {ieltsFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default IELTS;
