import React from "react";
import styles from "./IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/exam.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import AdmitContainer from "../AdmitContainer/AdmitContainer";

const IELTS = () => {
  return (
    <div className={styles.ie}>
      <div className={styles.c1}>
        <Image src={hm} alt="lt" />
        <div>
          <h2>About IELTS</h2>
          <p>
            The International English Language Testing System (IELTS) stands as
            one of the most recognized English language tests globally. It
            serves as a benchmark for universities, consulates, and employers to
            gauge an individual’s English proficiency. Achieving top IELTS score
            is pivotal to those aspiring to pursue opportunities in English
            Speaking countries. The test is taken by more than 3 million test
            takers worldwide annually and tests an individual{"'"}s ability to
            speak, read and write English fluently. <br />
            The IELTS test is of 2 types <br /> 1.IELTS Academics (For Studies
            Abroad) <br />
            2. IELTS General (For Immigration, PR & Work)
          </p>
          <p>
            Gradlers IELTS prep offers structured and tailored programs designed
            to help you excel in the test. Our course is backed by comprehensive
            training material, expert instructors, and diverse training options
            that makes us the first choice for IELTS preparation.
          </p>
        </div>
      </div>
      <div className={styles.c2}>
        <div>
          <div>
            <h2>Why IELTS?</h2>
            <ul>
              <li>
                More than 10,000 institutions around the world accept IELTS
                scores
              </li>
              <li>
                In India, there are an estimated 1.3 to 1.4 million IELTS test
                takers every year
              </li>
              <li>The IELTS is conducted in 140 countries around the world</li>
              <li>Can be taken in both paper and computer-based formats</li>
              <li>IELTS test score is valid for 2-Years</li>
            </ul>
          </div>
          <Image src={boy} alt="boy" />
        </div>
        <div>
          <div>
            <h2>Why Gradlers?</h2>
            <p>
              Our founders have studied and worked in the US and UK, bringing
              along with them real-world experiences from across the globe. They
              continuously work on building a talented team and evaluating
              quality partners to expand our reach for students.
            </p>
            <p style={{ fontWeight: "500" }}>Few Facts about us</p>
            <ul>
              <li>Partnered with more than 800 top universities worldwide</li>
              <li>Assisted more than 3000 students in the past 3 years</li>
              <li>Personality Development and Self-Dependent Outlook</li>
              <li>Have a 98% visa approval rate</li>
            </ul>
          </div>
          <Image src={girl} alt="girl" />
        </div>
        <div>
          <div>
            <h2>Who can take the IELTS Exam?</h2>
            <div>
              <p>
                Anyone above 16 years old can attempt IELTS. There is no maximum
                cap or prescribed age limit for taking IELTS test. IELTS can be
                taken if,
              </p>
              <ul>
                <li>
                  You are planning to migrate to an English-speaking country
                </li>
                <li>
                  Want to get an admission to a university in another country
                </li>
                <li>
                  Planning to get better career(work) opportunities abroad
                </li>
              </ul>
            </div>
            <div>
              <p>IELTS scores are accepted by countries such as -</p>
              <ul>
                <li>Australia,</li>
                <li>U.K,</li>
                <li>U.S.A,</li>
                <li>New Zealand, &</li>
                <li>Canada</li>
                <li>Many others</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>IELTS Exam Pattern</h2>
            <p>
              The IELTS test is for 2 hours 45 minutes duration and comprises 4
              sections to test the English language ability of the testing
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
          <ul>
            <li>Choose the right prep course</li>
            <li>Set a target score</li>
            <li>Rigorous Self-Practice</li>
            <li>Improve vocabulary</li>
            <li>Regularly attempt section-wise tests</li>
            <li>Take minimum 5 full-length mock tests</li>
          </ul>
          <button>Book Appointment with Trainer</button>
        </div>
        <div>
          <h2>Why Gradlers IELTS Prep?</h2>
          <ul>
            <li>Best fit Study Plans</li>
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
            <li>Morning Batches</li>
            <li>Late Evening Batches</li>
          </ul>
          <button>Speak to Our Experts</button>
        </div>
        <div>
          <h2>Gradlers Prep Courses</h2>
          <ul>
            <li>IELTS Self-Prep</li>
            <li>IELTS Standard</li>
            <li>IELTS Fast-track</li>
            <li>IELTS 1-on-1</li>
          </ul>
          <button>Join Now</button>
        </div>
      </div>
      <h2>Recent Admits</h2>
      <div className={styles.c4}>
        <AdmitContainer />
      </div>
      <h2>Frequently Asked Questions (FAQ’s)</h2>
      <div className={styles.c5}>
        <p>
          How do I register for the IELTS?
          <br />
          You can register online from the official website or visit the nearest
          IDP branch.
        </p>

        <p>
          How many times in a year is the IELTS exam held?
          <br />
          IELTS is conducted 4 times a month and 48 times a year.
        </p>

        <p>
          How many times can I take the IELTS?
          <br />
          IELTS can be taken as many times as one pleases. There is no limit to
          the number of IELTS tests that one can take. However, you will need to
          pay the test fees for each attempt that you take.
        </p>

        <p>
          What is the validity of the IELTS exam?
          <br />
          An IELTS score is valid for 2 years from the date the results were
          published.
        </p>

        <p>
          How soon do I get my IELTS score?
          <br />
          The results come live within 3-5 days for a digital test and after 13
          days for a paper-based test.
        </p>

        <p>
          If I take the IELTS more than once, which score will the universities
          consider?
          <br />
          Universities consider the score that you have mentioned in your
          application. You can mention your highest score if it is valid.
        </p>

        <p>
          Do I need to have an IELTS score when applying to universities?
          <br />A valid IELTS score must be mentioned in your university
          application form.
        </p>

        <p>
          What is IELTS IDP?
          <br />
          IDP (International Development Program) is an organization that offers
          placements for many countries like the UK, Canada, and Australia. IDP
          has branches in 31 countries. The IDP organizes the IELTS exam in 56
          countries. The exam was conducted in 1400 test locations and 260
          computer-authorized test centers worldwide.
        </p>

        <p>
          Is there any difference between IDP IELTS and IELTS?
          <br />
          There is no difference between both the tests.
        </p>

        <p>
          Is PTE easy or IELTS?
          <br />
          PTE and IELTS are English language proficiency tests in high demand.
          These tests assessed the participants' reading, writing, listening,
          and speaking skills. PTE is easier when compared to the IELTS exam.
          PTE has more modulus than that of IELTS. While, the preparation is
          easy when compared to the IELTS. However, some people say that the
          reading portion of PTE is more complicated than IELTS.
        </p>

        <p>
          What is the ideal time for IELTS preparation?
          <br />
          It will take approximately 2 to 3 months to prepare for the IELTS.
          Plan a schedule and work accordingly to clear the exam with a high
          score. Take several mock tests before giving the actual examination.
          The chance of getting a high band score will increase.
        </p>

        <p>
          When can I check the IELTS result?
          <br />
          IELTS Computer-based test results will be released within 3 to 5 days
          and paper-based test results will be made accessible online at 12:00
          a.m. GMT on the 13th day after the test.
        </p>
        <button style={{marginTop: '3rem'}}>Speak to Our Experts</button>
      </div>
    </div>
  );
};

export default IELTS;
