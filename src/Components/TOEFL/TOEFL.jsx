import React from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/exam.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const TOEFL = () => {
  const toeflFaqs = [
    {
      question: "How can I prepare for the TOEFL test?",
      answer:
        "To prepare for the TOEFL test, practice extensively with numerous online practice tests from different institutions. Utilize official practice tests to simulate the real test experience, review and answer questions, and receive scores within 24 hours.",
    },
    {
      question: "How many questions are there on the TOEFL test?",
      answer:
        "Reading – 30 to 40 Questions<br />Listening – 28 to 39 Questions<br />Speaking – 4 Tasks<br />Writing- 2 Tasks. The number of test questions and the test duration may vary between test administrations. Reading and listening sections may include additional unscored questions.",
    },
    {
      question: "What are the late fee charges for TOEFL?",
      answer:
        "If registration is not completed 7 days prior to the test date, a late fee of US $40 applies. Late registration closes 2 days before the test date.",
    },
    {
      question: "What is the eligibility criterion for TOEFL 2024?",
      answer:
        "There is no specific eligibility criterion for the TOEFL exam. Anyone wishing to work or study abroad can take the exam to demonstrate English language proficiency. Generally, those who have completed high school or equivalent are eligible.",
    },
    {
      question: "What will I need to be admitted to the TOEFL test center?",
      answer:
        "You will need an admission ticket or official authorization, your official identification document, and a completed photo file record with a recent photo attached.",
    },
    {
      question:
        "When will my TOEFL test scores be mailed? Can I receive them early?",
      answer:
        "Official score reports are sent to designated recipients within 11 days after the test. You can view your scores online or via the TOEFL official app approximately 6 days after the test.",
    },
    {
      question: "How many times in a year is the TOEFL exam held?",
      answer: "TOEFL is conducted more than 60 times a year globally.",
    },
    {
      question: "How many times can I take the TOEFL?",
      answer:
        "You can take the TOEFL as many times as you want, with a minimum 12-day interval between test dates.",
    },
    {
      question: "What is the validity of the TOEFL exam?",
      answer: "TOEFL scores are valid for two years from the test date.",
    },
    {
      question: "How soon do I get my score?",
      answer:
        "TOEFL scores are available within 4 to 8 days after taking the test.",
    },
    {
      question: "How do I pass on my score to the colleges?",
      answer:
        "You can send your TOEFL scores through your ETS account by selecting the “Send Additional Score Reports” option.",
    },
    {
      question:
        "Do universities consider photocopies of the TOEFL scorecard? Do I have to send scores through ETS?",
      answer:
        "Universities do not accept photocopies of TOEFL scorecards. Scores must be sent through ETS.",
    },
    {
      question:
        "Do I need to have a TOEFL score when applying to universities?",
      answer:
        "Yes, a valid TOEFL score is required for university applications.",
    },
    {
      question:
        "Is the TOEFL mandatory for applying to undergraduate programs outside India?",
      answer:
        "TOEFL or other English language proficiency tests like IELTS or PTE are generally required for undergraduate programs outside India.",
    },
    {
      question: "What is the minimum TOEFL score that I need?",
      answer:
        "Minimum TOEFL scores required vary by institution, ranging typically from 61 to 109 points.",
    },
    {
      question: "How much time does TOEFL preparation take?",
      answer:
        "TOEFL preparation typically takes 1 to 3 months, depending on individual skills and proficiency level.",
    },
    {
      question: "What is a good score in TOEFL?",
      answer:
        "A score of 85-100 is considered good on the TOEFL exam, though requirements may vary by university.",
    },
    {
      question: "What is TOEFL iBT?",
      answer:
        "TOEFL iBT (Test of English as a Foreign Language Internet-based Test) is the English language proficiency test used by non-native English speakers seeking admission to international universities.",
    },
    {
      question: "Is TOEFL harder than IELTS?",
      answer:
        "The difficulty level of TOEFL and IELTS varies based on perspective. Generally, TOEFL is considered more challenging in its reading section, which focuses on academic texts.",
    },
    {
      question: "How much time does TOEFL preparation take?",
      answer:
        "TOEFL preparation typically takes 1 to 3 months, depending on individual skills and proficiency level. Establishing a study schedule and taking practice tests can aid in achieving a high score.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.ie}>
        <div className={styles.c1}>
          <Image src={hm} alt="lt" />
          <div>
            <h2>About TOEFL</h2>
            <p>
              Test of English as a Foreign Language (TOEFL), is the most widely
              accepted English language test that can help you “go anywhere”.
              Universities, workplaces and immigration departments across the
              English speaking world use TOEFL to gauge English comprehension
              abilities of candidates. TOEFL scores are accepted by more than
              10,000 universities and other institutions in over 150 countries,
              including Australia, Canada, New Zealand, the US, the UK and all
              across Europe and Asia. Infact, it is the only test that simulates
              university classroom and campus life and was developed with the
              help of leading universities.
            </p>
            <p>
              Gradlers TOEFL prep offers structured and tailored programs
              designed to help you excel in the real test. Our course is backed
              by comprehensive training material, expert instructors, and
              diverse training options that make us the first choice for TOEFL
              preparation.
            </p>
          </div>
        </div>
        <div className={styles.c2}>
          <div>
            <div>
              <h2>Why TOEFL?</h2>
              <ul>
                <li>TOEFL is accepted in more than 10000+ universities</li>
                <li>150 plus countries accept TOEFL scores</li>
                <li>
                  Yearly, more than 2.3 million aspirants take the TOEFL test
                </li>
                <li>
                  The exam is conducted in 4,500 test centers all over the world
                </li>
              </ul>
              <p>
                TOEFL is meant to check the language abilities of non-native
                English speakers who wish to enroll in foreign universities and
                are seeking to migrate to work. More than 11000 universities in
                190 plus countries accept TOEFL scores. Education Testing
                Service (ETS) organizes the TOEFL exam in 4,500 test centers in
                over 190 countries and territories. Yearly, more than 2.3
                million aspirants take the TOEFL test.
              </p>
            </div>
            <Image src={boy} alt="boy" />
          </div>
          <div>
            <div>
              <h2>Who can take the TOEFL Exam?</h2>
              <div>
                <p style={{ fontWeight: "600" }}>TOEFL Exam eligibility</p>
                <ul>
                  <li>
                    Age limit: Must be 18 years old. There is no age restriction
                    on the upper age limit.
                  </li>
                  <li>
                    Educational Qualification: Applicants must have completed
                    10+2/intermediate from any recognized board.
                  </li>
                  <li>
                    Candidates below the age limit of 18 must submit their
                    parent's consent.
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>TOEFL can be taken if,</p>
                <ul>
                  <li>
                    You are planning to migrate to an English-speaking country
                  </li>
                  <li>
                    Want to get an admission to a university in another country
                  </li>
                  <li>
                    Planning to get better career (work) opportunities abroad
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>TOEFL can be taken if,</p>
                <ul>
                  <li>U.S.A</li>
                  <li>Canada</li>
                  <li>UK</li>
                  <li>Australia</li>
                  <li>New Zealand</li>
                  <li>Many others</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>TOEFL Syllabus</h2>
              <div>
                <p style={{ fontWeight: "500" }}>Reading Test Syllabus</p>
                <ul>
                  <li>2 passages</li>
                  <li>Number of questions: 20 (10 from each passage)</li>
                  <li>Duration: 35 minutes</li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: "500" }}>Listening Test Syllabus</p>
                <ul>
                  <li>
                    2 ConverTOEFLions with 5 questions from each. A total of 10
                    questions will be covered in this section.
                  </li>
                  <li>Number of questions from the listening section: 28</li>
                  <li>Duration: 36 minutes</li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: "500" }}>Speaking Test Syllabus</p>
                <ul>
                  <li>
                    1 Independent topic will be given with a preparation time of
                    15 to 30 seconds. The response time should be 45 to 60
                    seconds.
                  </li>
                  <li>
                    Three integrated tasks: Read/Listen/Speak with a preparation
                    time of 15 - 30 seconds. The response time should be 45 to
                    60 seconds.
                  </li>
                  <li>Number of questions from the speaking section: 4</li>
                  <li>Duration: 16 minutes</li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: "500" }}>Writing Test Syllabus</p>
                <ul>
                  <li>
                    1 Integrated task of Read/Listen/Write takes 20 minutes.
                    Reading time: 3 min; Listening time: 2 min; and writing: 15
                    min
                  </li>
                  <li>
                    1 Writing for an Academic Discussion task takes 10 minutes
                  </li>
                  <li>Number of questions: 2</li>
                  <li>Duration: 30 minutes</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>TOEFL Exam Pattern</h2>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <td>Sections</td>
                    <td>TOEFL Exam Pattern (outdated)</td>
                    <td>TOEFL Exam Pattern (current) (From July 2023)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TOEFL Reading Section</td>
                    <td>
                      Duration: 54 – 72 minutes
                      <br />
                      Questions: 30-40
                    </td>
                    <td>
                      Duration: 35 minutes
                      <br />
                      Questions: 20
                    </td>
                  </tr>
                  <tr>
                    <td>TOEFL Listening Section</td>
                    <td>
                      Duration: 41-57 minutes
                      <br />
                      Questions: 28 – 39
                    </td>
                    <td>
                      Duration: 36 minutes
                      <br />
                      Questions: 28
                    </td>
                  </tr>
                  <tr>
                    <td>TOEFL Speaking Section</td>
                    <td>
                      Duration: 17 minutes
                      <br />
                      Questions: 4 tasks
                    </td>
                    <td>
                      Duration: 16 minutes
                      <br />
                      Questions: 4 tasks
                    </td>
                  </tr>
                  <tr>
                    <td>TOEFL Writing Section</td>
                    <td>
                      Duration: 50 minutes
                      <br />
                      Questions: 2 tasks
                    </td>
                    <td>
                      Duration: 29 minutes
                      <br />
                      Questions: 2 tasks
                    </td>
                  </tr>
                  <tr>
                    <td>Total Duration</td>
                    <td>162 – 196 minutes</td>
                    <td>116 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h2>TOEFL Score Range</h2>
              <p style={{ fontWeight: "500" }}>
                TOEFL scores range from 0 to 120.{" "}
              </p>
              <ul>
                <li>Above 90: Excellent</li>
                <li>82: Average</li>
                <li>100 – 110: Good</li>
                <li>83 – 90: Above average</li>
                <li>0 – 81: Below average</li>
              </ul>
              <p>
                Most universities consider a score above 90 or higher, which
                showcase the high level of English proficiency. Many
                international universities require 90 – 100 points or 100 total
                points on the iBT or 580 or 600 on the PBT.
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>CEFR level</th>
                    <th>TOEFL Essentials overall band score (1-12)</th>
                    <th>TOEFL iBT total score (0-120)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>C2</td>
                    <td>12</td>
                    <td>114–120</td>
                  </tr>
                  <tr>
                    <td>C1</td>
                    <td>10–11.5</td>
                    <td>95–113</td>
                  </tr>
                  <tr>
                    <td>B2</td>
                    <td>8–9.5</td>
                    <td>72–94</td>
                  </tr>
                  <tr>
                    <td>B1</td>
                    <td>5–7.5</td>
                    <td>42–71</td>
                  </tr>
                  <tr>
                    <td>A2</td>
                    <td>3–4.5</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>A1</td>
                    <td>2–2.5</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Below A1</td>
                    <td>1–1.5</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontWeight: "500" }}>TOEFL Validity</p>
              <p>
                TOEFL score is valid for 2 years from the date you took the
                exam. There is no upper age limit for attempting TOEFL. You can
                write the exam as many times as you need. You can try the test
                with a 12-day gap in between.
              </p>
              <p style={{ fontWeight: "500" }}>TOEFL Requirements</p>
              <ul>
                <li>You must be at least 18 years old</li>
                <li>Must have completed 10+2 from an approved institution</li>
                <li>Have valid Identity proof</li>
                <li>Have your signature on the ID</li>
                <li>Have a recent photograph</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>How to Ace the TOEFL?</h2>
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
            <h2>Why Gradlers TOEFL Prep?</h2>
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
              <li>TOEFL Self-Prep</li>
              <li>TOEFL Standard</li>
              <li>TOEFL 1-on-1</li>
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
          {toeflFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default TOEFL;
