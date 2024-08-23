import React from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/exam.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const GRE = () => {
  const greFaqs = [
    {
      question: "Why should I take the GRE?",
      answer:
        "GRE scores are used by admissions or fellowship panels to supplement your undergraduate records, recommendation letters and other qualifications for graduate-level study.",
    },
    {
      question: "When is it offered?",
      answer:
        "The GRE revised General Test is given year-round at computer-based test centres in most locations around the world. Appointments are scheduled on a first-come, first-served basis.",
    },
    {
      question: "How many times can you take the GRE?",
      answer:
        "You can take the GRE revised General Test (computer-based and paper-based) once every 21 days, but no more than five times within any continuous rolling 12-month period. This applies even if you canceled your scores on a test has taken previously.",
    },
    {
      question: "What is the duration of the GRE Test?",
      answer: "The new GRE test is around 1 hour 58 minutes.",
    },
    {
      question: "How is the GRE designed?",
      answer:
        "GRE is now a multi-stage or adaptive by section. This means that how you perform on the first Verbal Reasoning section will determine the difficulty level of the second Verbal Reasoning section. The same goes for Quantitative Reasoning.",
    },
    {
      question: "What is the test order?",
      answer:
        "The Analytical Writing Assessment section will always be first. The Verbal Reasoning and Quantitative Reasoning sections may appear in any order.",
    },
    {
      question: "How is the GRE scored?",
      answer:
        "The Verbal and Quantitative sections of the GRE are scored between 130 and 170 in one-point increments. The Analytical Writing Assessment (AWA) section is scored on a scale from 0 to 6 in half-point increments.",
    },
    {
      question: "How long are the GRE scores valid?",
      answer: "The GRE scores are valid for 5 years.",
    },
  ];

  return (
    <div className="flexx">
      {" "}
      <div className={styles.ie}>
        <div className={styles.c1}>
          <Image src={hm} alt="lt" />
          <div>
            <h2>About GRE</h2>
            <p>
              The Graduate Record Examination (GRE) is a standardized test
              widely used for admission to graduate schools and business
              programs globally. Administered by the Educational Testing Service
              (ETS), the GRE assesses verbal reasoning, quantitative reasoning,
              and analytical writing skills. The exam aims to evaluate a
              candidate's readiness for advanced academic work and is accepted
              by thousands of institutions worldwide.
            </p>
            <p>
              Test-takers can choose between the computer-based and paper-based
              formats, with the computer-based version being more common.
              Preparing for the GRE typically involves rigorous study, practice
              tests, and sometimes, preparatory courses. High scores on the GRE
              can significantly enhance a candidate’s application profile.
            </p>
          </div>
        </div>
        <div className={styles.c2}>
          <div>
            <div>
              <h2>Why GRE?</h2>
              <ul>
                <li>
                  Graduate School Admission: Many graduate programs require GRE
                  scores as part of their admissions process, making it
                  essential for applicants.
                </li>
                <li>
                  Scholarships and Fellowships: High GRE scores can make
                  candidates eligible for various scholarships, fellowships, and
                  financial aid opportunities.
                </li>
                <li>
                  Career Advancement: Earning a graduate degree can open doors
                  to higher-level positions, specialized roles, and increased
                  earning potential.
                </li>
                <li>
                  Program Flexibility: The GRE is accepted by thousands of
                  institutions worldwide, offering applicants a wide range of
                  programs and schools to choose from.
                </li>
                <li>
                  Skill Demonstration: The GRE tests verbal reasoning,
                  quantitative reasoning, and analytical writing skills,
                  allowing applicants to showcase their strengths in these
                  areas.
                </li>
              </ul>
            </div>
            <Image src={boy} alt="boy" />
          </div>

          <div>
            <div>
              <h2>Who can take the GRE Exam?</h2>
              <div>
                <p>
                  There are no specific eligibility criteria for the GRE exam,
                  the GRE test is accessible to all aspirants. Since GRE score
                  is exclusively used for master's admission, a candidate must
                  have an undergraduate degree in the relevant subject as it is
                  a primary requirement for masters at top universities abroad.
                </p>
                <p>
                  More than 90 countries accept the GRE exam scores. Some of the
                  main countries accepting these test scores are the US, Canada,
                  the UK, China, Australia, Denmark, Germany, Japan, the Czech
                  Republic, Ireland, France, India, Hong Kong, Sweden and many
                  others.
                </p>
              </div>
              <div>
                <p>GRE Test Format</p>
                <ul>
                  <li>
                    It is a multi-stage adaptive-by-section test where students
                    performance on first section determines the difficulty of
                    the subsequent sections.
                  </li>
                  <li>
                    One have an option to skip questions within a section, go
                    back and change answers, and have control to tackle the
                    questions within a section you want to answer first.
                  </li>
                  <li>
                    The overall testing time for the computer-delivered GRE®
                    General Test is about 1 hours and 58 minutes.{" "}
                  </li>
                  <li>
                    The GRE has three test sections. Here is the structure of
                    the computer-delivered test.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>GRE Exam Pattern</h2>
              <p>
                According to the latest announcement by ETS, there will be five
                sections in the ETS GRE exam. Questions in these sections will
                assess the Analytical writing, verbal reasoning and quantitative
                reasoning skills of the candidates. Below, is the updated GRE
                test pattern.
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>Sections</th>
                    <th>Total Number of Questions</th>
                    <th>Alloted Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Analytical Writing (One section)</td>
                    <td>One “Analyze an Issue” task</td>
                    <td>30 minutes</td>
                  </tr>
                  <tr>
                    <td>Quantitative Reasoning (Two sections)</td>
                    <td>Section 1: 12 questions</td>
                    <td>Section 1: 18 minutes</td>
                  </tr>
                  <tr>
                    <td>Quantitative Reasoning (Two sections)</td>
                    <td>Section 2: 15 questions</td>
                    <td>Section 2: 23 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>How to Ace the GRE?</h2>
            <ul>
              <li>Familiarize yourself with test content</li>
              <li>Use the mark and review feature</li>
              <li>Work on the English Vocabulary</li>
              <li>Pacing on the test is important so pay attention to time</li>
              <li>
                Regularly take GRE mock tests to familiarize <br /> yourself
                with the testing experience
              </li>
              <li>Review what you write for errors</li>
            </ul>
            <button>Book Appointment with Trainer</button>
          </div>
          <div>
            <h2>Why Gradlers Gre Prep?</h2>
            <ul>
              <li>Best fit GRE Study Plans</li>
              <li>Best guidance for a perfect score</li>
              <li>High quality Practice Material</li>
              <li>Score Improvement Plan</li>
              <li>Learn Anytime, Anywhere</li>
              <li>Convenient & Flexible timings</li>
              <li>Experienced Trainers</li>
              <li>Classroom and LIVE training</li>
            </ul>
            <button>Book A Demo Session</button>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>Gradlers Learning Solutions</h2>
            <ul>
              <li>In-Class Training</li>
              <li>LIVE Online Training</li>
              <li>Private Tutoring (1-on-1)</li>
              <li>Week-end Batches</li>
            </ul>
            <button>Speak to Our Experts</button>
          </div>
          <div>
            <h2>Gradlers Prep Courses</h2>
            <ul>
              <li>GRE Self-Prep</li>
              <li>GRE Standard</li>
              <li>GRE 1-on-1</li>
            </ul>
            <button>Join Now</button>
          </div>
        </div>
        <h2>Recent Admits</h2>
        <div className={styles.c4}>
          <AdmitContainer />
        </div>
        <div className={styles.c6}>
          <h3>Frequently Asked Questions (FAQs)</h3>
          {greFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default GRE;
