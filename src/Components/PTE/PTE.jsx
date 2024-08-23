import React from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/exam.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const PTE = () => {
  const pteFaqs = [
    {
      question: "About the test",
      answer:
        "Launched in 2009. Endorsed by the Graduate Management Admission Council (GMAC).",
    },
    {
      question: "Who accepts?",
      answer: "Most universities accept PTE scores for admission purposes.",
    },
    {
      question: "Who should give this test?",
      answer: "Those who wish to apply to colleges or universities abroad.",
    },
    {
      question: "Eligibility criterion",
      answer: "Candidates must be at least 18 years old or above.",
    },
    {
      question: "Exam Format",
      answer:
        "Similar to IELTS, the PTE test consists of 4 sections – Reading, Listening, Speaking, Writing.",
    },
    {
      question: "Validity of Score",
      answer:
        "PTE scores are valid for 2 years from the date of issue of the result.",
    },
    {
      question: "When is the exam held?",
      answer:
        "The PTE exam is held in more than 200 locations globally, on more than 360 days a year.",
    },
    {
      question: "Who conducts the test?",
      answer:
        "The PTE exam is conducted by Pearson Language Tests and is endorsed by the Graduate Management Admission Council (GMAC).",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.ie}>
        <div className={styles.c1}>
          <Image src={hm} alt="lt" />
          <div>
            <h2>About PTE</h2>
            <p>
              The Pearson Test of English (PTE) is an international standardized
              English proficiency test dedicated to assessing and evaluating the
              English language usage of a non-native speaker of English who
              wishes to study, work or migrate to an English speaking country.
              The PTE score plays an important role in securing admission, a
              visa, or a job in leading English-speaking countries. Gradlers PTE
              prep is designed to help you achieve your dream of studying or
              settling abroad.
            </p>
            <p>
              The PTE score is accepted by various academic institutes worldwide
              including Harvard Business School, INSEAD and Yale University. A
              good PTE score can greatly improve your chances of success.
            </p>
          </div>
        </div>
        <div className={styles.c2}>
          <div>
            <div>
              <h2>Benefits of taking PTE</h2>
              <ul>
                <li>
                  Flexible: Test dates are available for almost 360 days a year
                  in over 250 centers worldwide
                </li>
                <li>
                  Fast: Results are declared typically within 5 working days
                </li>
                <li>
                  Fair: Since the test uses computerized marking, it ensures
                  that all test takers are scored accurately and impartially
                </li>
                <li>
                  Secure: Various measures are taken to ensure test security,
                  like randomized test forms, palm-vein scanning, and data
                  forensics
                </li>
                <li>
                  Unlimited: Test takers can send their test results to as many
                  Universities or Institutions as they like with no extra
                  payment
                </li>
              </ul>
            </div>
            <Image src={boy} alt="boy" />
          </div>

          <div>
            <div>
              <h2>Who can take the PTE Exam?</h2>
              <div>
                <p>
                  Candidates meeting the following eligibility criteria can
                  appear for the PTE test:
                </p>
                <ul>
                  <li>You must be at least 16 years old.</li>
                  <li>You must have completed your secondary education.</li>
                  <li>
                    If you are under 18, you must provide the parent consent
                    letter.
                  </li>
                  <li>
                    There is no upper age limit or qualification for the PTE
                    exam.
                  </li>
                  <li>Also, there is no limit on the number of attempts.</li>
                </ul>
              </div>
              <div>
                <p>PTE can be taken if:</p>
                <ul>
                  <li>
                    You are planning to migrate to an English-speaking country.
                  </li>
                  <li>
                    Want to get admission to a university in another country.
                  </li>
                  <li>
                    Planning to pursue better career opportunities abroad.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  PTE scores are accepted by the following countries for PR:
                </p>
                <ul>
                  <li>Australia</li>
                  <li>New Zealand</li>
                  <li>Canada</li>
                  <li>Many European Countries</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>PTE Exam</h2>
              <p>
                PTE is a computer-based English proficiency test. The exam tests
                a person's English speaking, reading, listening, and writing
                skills. PTE Exam Syllabus
              </p>
              <p>
                Having complete knowledge of the syllabus before appearing for
                the PTE exam is good. The PTE academic exam and PTE general exam
                syllabi are mentioned in the following.
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>PTE Section</th>
                    <th>PTE Exam Syllabus</th>
                    <th>Total Questions/Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="8">PTE Speaking & Writing Section</td>
                    <td>Personal Introduction</td>
                    <td rowspan="8">
                      Total Number of Questions: 28 - 36
                      <br />
                      Duration: 54 – 67 minutes
                    </td>
                  </tr>
                  <tr>
                    <td>Read Aloud</td>
                  </tr>
                  <tr>
                    <td>Repeat Sentence</td>
                  </tr>
                  <tr>
                    <td>Describe Image</td>
                  </tr>
                  <tr>
                    <td>Re-Tell Lecture</td>
                  </tr>
                  <tr>
                    <td>Answer Short Questions</td>
                  </tr>
                  <tr>
                    <td>Summarize Written Text</td>
                  </tr>
                  <tr>
                    <td>Essay</td>
                  </tr>
                  <tr>
                    <td rowspan="5">PTE Reading Section</td>
                    <td>Reading & Writing: Fill in the Blanks</td>
                    <td rowspan="5">
                      Total Number of Questions: 13 - 18
                      <br />
                      Duration: 29 – 30 minutes
                    </td>
                  </tr>
                  <tr>
                    <td>Multiple Choice, Multiple Answer</td>
                  </tr>
                  <tr>
                    <td>Re-order Paragraphs</td>
                  </tr>
                  <tr>
                    <td>Fill in the Blanks</td>
                  </tr>
                  <tr>
                    <td>Multiple Choice, Single Answer</td>
                  </tr>
                  <tr>
                    <td rowspan="10">PTE Listening Section</td>
                    <td>Summarize Spoken Text</td>
                    <td rowspan="10">
                      Total Number of Questions: 12 - 20
                      <br />
                      Duration: 30 – 43 minutes
                    </td>
                  </tr>
                  <tr>
                    <td>Multiple Choice, Multiple Answers</td>
                  </tr>
                  <tr>
                    <td>Fill in the Blanks</td>
                  </tr>
                  <tr>
                    <td>Highlight Correct Summary</td>
                  </tr>
                  <tr>
                    <td>Multiple Choice, Single Answer</td>
                  </tr>
                  <tr>
                    <td>Select Missing Word</td>
                  </tr>
                  <tr>
                    <td>Highlight Incorrect Words</td>
                  </tr>
                  <tr>
                    <td>Write From Dictation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h2>Syllabus for PTE General:</h2>
              <p>
                PTE General is the international certification examination used
                to assess the ability to communicate in English. This test
                includes speaking, listening, writing, and reading skills.
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>PTE (General) Section</th>
                    <th>Skills measured / Total marks</th>
                    <th>Total Questions/Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Written Section</td>
                    <td>
                      listening, reading, and writing skills
                      <br />
                      Total score: 75
                    </td>
                    <td>
                      Total Number of Questions: 9 tasks
                      <br />
                      Duration: Varies
                    </td>
                  </tr>
                  <tr>
                    <td>Spoken Interview</td>
                    <td>
                      speaking skills
                      <br />
                      Total score: 25
                    </td>
                    <td>
                      Total Number of Questions: 4 sections
                      <br />
                      Duration: Varies
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h2>PTE Format</h2>
              <p>
                PTE is the computer-based English proficiency test that
                international universities or institutes use for study, work,
                and visa purposes. The format of the test is as follows
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>PTE Format</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PTE Exam Pattern</td>
                    <td>
                      Speaking & Writing Skills (54 – 67 minutes)
                      <br />
                      Reading skills (29 – 30 minutes)
                      <br />
                      Listening skills (30 – 43 minutes)
                    </td>
                  </tr>
                  <tr>
                    <td>PTE Duration</td>
                    <td>2 Hours 15 minutes and a Single test session</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>Computer-based test with headset</td>
                  </tr>
                  <tr>
                    <td>Mode</td>
                    <td>Taken in a test center / Home Edition</td>
                  </tr>
                  <tr>
                    <td>Test Type</td>
                    <td>Assesses real-life English</td>
                  </tr>
                  <tr>
                    <td>Test Layout</td>
                    <td>20 question types</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>PTE Score</strong>
              </p>
              <p>
                PTE score ranges from 10 to 90. There is no specific passing
                score for the PTE exam, but a score of 65 to 75 is considered
                good by international universities. Some universities may accept
                scores between 50 to 63. Scores are considered based on the
                admitting university's requirements.
              </p>

              <p>
                <strong>PTE Score Chart</strong>
              </p>
              <ul>
                <li>50-58: Average</li>
                <li>58-65: Competent</li>
                <li>65-79: Good</li>
                <li>79-85: Very good</li>
                <li>85-90: Expert</li>
              </ul>
              <p>
                With a PTE score ranging from 50 to 59, you will be admitted to
                universities with low English proficiency requirements. Your PTE
                score should be above 65 to get admission to the best
                universities.
              </p>

              <p>
                <strong>PTE Score Validity</strong>
              </p>
              <p>
                {" "}
                Your PTE score is valid for 2 years from the date you took the
                exam. After completing 2 years, you cannot access your score.
              </p>

              <p>
                <strong>PTE Test Fees</strong>
              </p>
              <p>
                The PTE fee for PTE Academic and PTE Academic Online is ₹15,900,
                including taxes. This fee must be paid during registration for
                the exam. Late bookings, made within 48 hours of the exam date,
                require an additional late booking fee.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.c3}>
          <div>
            <h2>How to Ace the PTE?</h2>
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
            <h2>Why Gradlers PTE Prep?</h2>
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
            </ul>

            <button>Speak to Our Experts</button>
          </div>
          <div>
            <h2>Gradlers Prep Courses</h2>
            <ul>
              <li>PTE Self-Prep</li>
              <li>PTE Standard</li>
              <li>PTE Fast-track</li>
              <li>PTE 1-on-1</li>
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
          {pteFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default PTE;
