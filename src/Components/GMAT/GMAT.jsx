import React from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/exam.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const GMAT = () => {
  const gmatFaqs = [
    {
      question: "What is the required qualification for GMAT?",
      answer:
        "The GMAC, the governing body for the GMAT has not announced any official statement regarding the qualification you need to have in order to appear for the test. If you are a student planning to enroll in an MBA program, you should have a graduate degree from a recognized university (in any discipline).",
    },
    {
      question: "Is there any upper age limit for GMAT?",
      answer: "No, there is no upper age limit for taking the GMAT.",
    },
    {
      question: "What are the eligibility criteria for GMAT?",
      answer:
        "As per GMAC, the governing body for the GMAT, there are no specific eligibility criteria for appearing for the GMAT. However, before applying to any college or university it is suggested to check what all your college or university demands. When it comes to age, the candidate must have completed 18 years of age; however, there is no upper age limit for the candidate applying to take the GMAT.",
    },
    {
      question: "Can I take the GMAT after 12th or high school?",
      answer:
        "Yes, you may take the GMAT after completing your 12th grade or High school. However, for getting admission into a B-school, you should have a graduate degree from a recognized university and also note that the GMAT score is valid only for 5 years.",
    },
    {
      question: "Is there any age limit for GMAT?",
      answer:
        "There is no upper age limit for the candidate applying to take the GMAT; however, the minimum age limit for the same is 18 years. In certain cases, a candidate below 18 years of age is allowed to take the GMAT provided that they submit a written consent by their parents or legal guardians.",
    },
    {
      question: "Is graduation necessary for the GMAT exam?",
      answer:
        "The GMAC, the governing body for the GMAT has not announced any official statement regarding the qualification you need to have in order to appear for the test. If you are a student planning to enroll in an MBA program, you should have a graduate degree from a recognized university (in any discipline).",
    },
    {
      question: "I don’t have a passport. Can I still take the GMAT?",
      answer:
        "For taking the GMAT at the test center, only a valid passport is accepted as identity proof. However, for the GMAT Online exam, you have the option to use either a valid Passport or an Aadhaar Card for taking the GMAT.",
    },
    {
      question:
        "Is there any limit to the number of times I can take the GMAT?",
      answer:
        "You can retake the GMAT test once every 16 days, up to 5 times in a rolling year and 8 times in a lifetime. This applies even if you cancelled your scores in the previous attempts. Note that you may take the GMAT Online test at most two times and these will be included in the lifetime limits.",
    },
    {
      question: "Is there any academic qualification required for the GMAT?",
      answer:
        "The GMAC, the governing body for the GMAT has not announced any official statement regarding the qualification you need to have in order to appear for the test.",
    },
    {
      question: "How will I get my result?",
      answer: (
        <>
          There are two score reports – Unofficial Score Report and Official
          Score Report. As soon as you complete the test, you will be able to
          see your Unofficial score report. This includes your Quantitative,
          Verbal, Integrated Reasoning, and Total scores. Your Official score
          report will include your AWA score too and will be available on your
          mba.com account. <br />
          • For Test-center exam – within three weeks <br />• For Online exam
          (at home) – within 7 business days
        </>
      ),
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.ie}>
        <div className={styles.c1}>
          <Image src={hm} alt="lt" />
          <div>
            <h2>About GMAT</h2>
            <p>
              The GMAT exam is an admission test used by premier business
              schools across the globe for admissions into their graduate
              business and management programs. The GMAT helps the candidate
              prove their commitment to and eligibility for the MBA or business
              master’s degree that demonstrates their problem-solving abilities
              and critical reasoning skills.
            </p>
            <p>
              Having a strong GMAT score ensures a higher chance of acceptance
              and high probability of getting scholarship from top B-schools.
            </p>
          </div>
        </div>
        <div className={styles.c2}>
          <div>
            <div>
              <h2>Why GMAT?</h2>
              <p>
                Having a strong GMAT score ensures a higher chance of acceptance
                and high probability of getting scholarship from top B-schools.
              </p>
              <ul>
                <li>
                  GMAT is the only exam specifically designed for management
                  related programs that is widely accepted
                </li>
                <li>
                  9/10 MBA new b-school enrolments are made using a GMAT score
                </li>
                <li>
                  A high GMAT score is necessary to get into a top business
                  school
                </li>
                <li>
                  A high GMAT score enhances your chances of getting a
                  scholarship
                </li>
                <li>A high GMAT score leads to a better post MBA salary</li>
              </ul>
            </div>
            <Image src={boy} alt="boy" />
          </div>

          <div>
            <div>
              <h2>Who can take the GMAT Exam?</h2>
              <div>
                <p>
                  The GMAT exam is a prerequisite for aspiring graduates in
                  diverse management programs.
                </p>
                <p>
                  Any candidate, who wants to apply for management programmes
                  and is 18 years or above (if a candidate is between 13 and 17
                  years, he/she may appear for the GMAT after providing written
                  approval or consent by his/her legal guardians or parents),
                  can apply for the GMAT exam 2024.
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>
                  GMAT scores are accepted by countries such as –
                </p>
                <p>
                  The GMAT scores are accepted by over 110 different countries
                  including UK, US, Australia, Germany, Canada and New Zealand
                  etc.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>GMAT Exam Pattern</h2>
              <p>
                The GMAT exam is 2 hours and 15 minutes long (with one optional
                10-minute break) and consists of 64 questions in total:
              </p>
              <p>
                The composite score of the GMAT ranges from 400 to 1600 and is a
                combination of the Reading and Writing section score (200-800) ,
                and Math Section score (200-800). The total duration of the test
                is 2 Hours and 14 minutes. (With breaks).
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>No. of questions</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quantitative Reasoning</td>
                    <td>21 questions</td>
                    <td>45 minutes</td>
                  </tr>

                  <tr>
                    <td>Verbal Reasoning</td>
                    <td>23 questions</td>
                    <td>45 minutes</td>
                  </tr>
                  <tr>
                    <td>Data Insights</td>
                    <td>20 questions</td>
                    <td>45 minutes</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p style={{ fontWeight: "500" }}>Exam Features</p>
                <p>
                  The GMAT gives you control of your testing experience with
                  test taker-friendly features and flexible score sending
                  options.
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "500" }}>Question Review & Edit</p>
                <p>
                  The Question Review & Edit tool gives you more control over
                  the answers to your questions by allowing you to edit
                  responses later in each section. With this tool, you can spend
                  less time on questions you’re unsure about, knowing you can go
                  back to these responses and update them.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2>How to Ace the GMAT?</h2>
              <div>
                <p>
                  Acing the GMAT (Graduate Management Admission Test) requires
                  strategic preparation and focused study. Here are some strong
                  tips to help you excel:
                </p>

                <ul>
                  <li>
                    Understand the Test Format: Familiarize yourself with the
                    GMAT's structure, including the four sections: Analytical
                    Writing Assessment, Integrated Reasoning, Quantitative, and
                    Verbal.
                  </li>
                  <li>
                    Create a Study Plan: Develop a study schedule that allows
                    ample time for each section. Consistent, daily practice is
                    more effective than cramming.
                  </li>
                  <li>
                    Use Official GMAT Prep Materials: Utilize resources from the
                    Graduate Management Admission Council (GMAC), including
                    practice tests and study guides, to get accustomed to the
                    test format and question types.
                  </li>
                  <li>
                    Focus on Weak Areas: Identify your weaknesses through
                    practice tests and concentrate on improving those areas
                    while maintaining your strengths.
                  </li>
                  <li>
                    Practice Time Management: Each section of the GMAT is timed,
                    so practice answering questions under timed conditions to
                    improve your speed and accuracy.
                  </li>
                  <li>
                    Review Basic Concepts: Ensure you have a strong grasp of
                    basic math concepts, grammar rules, and critical reasoning
                    skills.
                  </li>
                  <li>
                    Take Full-Length Practice Tests: Simulate test day
                    conditions with full-length practice exams to build stamina
                    and reduce test-day anxiety.
                  </li>
                  <li>
                    Analyze Practice Tests: After taking practice tests,
                    thoroughly review your answers to understand your mistakes
                    and learn from them.
                  </li>
                  <li>
                    Stay Positive and Confident: A positive mindset can
                    significantly impact your performance. Believe in your
                    preparation and stay confident.
                  </li>
                </ul>
              </div>

              <p>
                By following these tips, you can enhance your preparation and
                improve your chances of achieving a high GMAT score.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>How to Ace the GMAT?</h2>
            <ul>
              <li>
                Understand the Format: Familiarize yourself with <br /> the
                structure, sections, and timing of the GMAT.
              </li>
              <li>
                Study Regularly: Dedicate consistent time to study <br /> each
                week, focusing on weak areas.
              </li>
              <li>
                Practice Tests: Take full-length practice tests to <br />{" "}
                simulate exam conditions.
              </li>
              <li>
                Review Mistakes: Analyze incorrect answers to <br /> understand
                concepts and improve.
              </li>
              <li>
                Utilize Resources: Use official GMAT study guides, <br /> online
                resources, and prep courses.
              </li>
            </ul>

            <button>Book Appointment with Trainer</button>
          </div>
          <div>
            <h2>Why Gradlers GMAT Prep?</h2>
            <ul>
              <li>Best GMAT Study Course</li>
              <li>Best mentor guidance for a perfect score</li>
              <li>High quality Practice Material</li>
              <li>Score Improvement Plan</li>
              <li>Learn Anytime, Anywhere</li>
              <li>Convenient & Flexible timings</li>
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
              <li>Week-end Batches</li>
            </ul>

            <button>Speak to Our Experts</button>
          </div>
          <div>
            <h2>Gradlers Prep Courses</h2>
            <ul>
              <li>GMAT Self-Prep</li>
              <li>GMAT Standard</li>
              <li>GMAT 1-on-1</li>
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
          {gmatFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default GMAT;
