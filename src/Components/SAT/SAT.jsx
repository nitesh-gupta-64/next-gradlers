import React from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/exam.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const SAT = () => {
  const satFaqs = [
    {
      question: "What is the SAT?",
      answer:
        "The SAT is a standardized test widely used for college admissions in the United States. It assesses a student's readiness for college.",
    },
    {
      question: "Who administers the SAT?",
      answer:
        "The SAT is developed and administered by the College Board, a non-profit organization.",
    },
    {
      question: "What does the SAT test?",
      answer:
        "The SAT tests skills in reading, writing and language, and math, including algebra, problem-solving, and data analysis.",
    },
    {
      question: "How long is the SAT?",
      answer:
        "The SAT is 3 hours long, plus an optional Essay section that adds 50 minutes.",
    },
    {
      question: "When is the SAT offered?",
      answer:
        "The SAT is offered several times a year, typically in August, October, November, December, March, May, and June.",
    },
    {
      question: "How do I register for the SAT?",
      answer:
        "Registration is done online through the College Board website. You'll choose a test date and location, fill out personal information, and pay the registration fee.",
    },
    {
      question: "How much does the SAT cost?",
      answer:
        "As of my last update, the SAT registration fee is around $52 for the basic test, with additional fees for the Essay section and other services.",
    },
    {
      question: "When do I get my SAT scores?",
      answer:
        "Scores are usually available about two to three weeks after the test date. You can view them online through your College Board account.",
    },
    {
      question: "How are SAT scores reported?",
      answer:
        "Scores are reported on a scale from 400 to 1600, combining scores from the Math and Evidence-Based Reading and Writing sections.",
    },
    {
      question: "How should I prepare for the SAT?",
      answer:
        "Effective preparation involves studying the content tested, taking practice tests, reviewing mistakes, and familiarizing yourself with the test format and timing.",
    },
    {
      question: "Are there resources available for SAT preparation?",
      answer:
        "Yes, there are many resources available, including official SAT study guides, online practice tests, prep courses, and tutoring services.",
    },
    {
      question: "What should I bring on test day?",
      answer:
        "You should bring your admission ticket, acceptable photo ID, No. 2 pencils, an eraser, and an approved calculator for the Math section.",
    },
    {
      question: "Can I bring snacks or drinks?",
      answer:
        "Yes, you can bring snacks and drinks for breaks, but they must be consumed outside the testing room during breaks.",
    },
    {
      question: "Should I take the optional Essay section?",
      answer:
        "It depends on the requirements of the colleges you're applying to. Check their admissions guidelines to determine if the Essay section is necessary.",
    },
    {
      question: "How is the SAT Essay scored?",
      answer:
        "The Essay is scored separately on a scale from 6 to 24, based on reading, analysis, and writing skills demonstrated in the essay.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.ie}>
        <div className={styles.c1}>
          <Image src={hm} alt="lt" />
          <div>
            <h2>About SAT</h2>
            <p>
              SAT is a standardized entrance exam for admissions to UG programs
              and is used by most colleges and universities to make their
              admissions decisions. The new digital SAT is a multiple-choice,
              computer-based test created and is administered by the College
              Board.
            </p>
            <p>
              The purpose of the SAT is to measure a high school student's
              readiness for college, and provide colleges with one common data
              point that can be used to compare all applicants. College
              admissions officers will review standardized test scores alongside
              the high school GPA, the subjects’ student took in high school,
              letters of recommendation from teachers or mentors,
              extracurricular activities, admissions interviews, and personal
              essays. The importance of SAT scores in the college application
              process varies from school to school. Overall, the higher you
              score on the SAT the more options for attending and paying for
              college will be available to the students.
            </p>
          </div>
        </div>
        <div className={styles.c2}>
          <div>
            <div>
              <h2>Why SAT?</h2>
              <ul>
                <li>
                  SAT test is considered as a measure of a high school student's
                  readiness for college, and provide colleges with a
                  standardized parameter along with many other parameters to
                  evaluate students and compare all applicants.
                </li>
                <li>
                  SAT is conducted by College Board 7 times a year and there are
                  two types of SAT exams. The first test is the SAT general test
                  that is developed to evaluate the written, verbal and
                  mathematical skills of the candidates. The second test, SAT 2
                  is a subject test. It is used to demonstrate your knowledge of
                  a particular subject.
                </li>
              </ul>
            </div>
            <Image src={boy} alt="boy" />
          </div>
         
          <div>
            <div>
              <h2>Who can take the SAT Exam?</h2>
              <div>
                <p>
                  The SAT exam does not have specific age requirements.
                  Generally, students aged 17 to 19 are the most common
                  test-takers. However, the College Board has outlined
                  eligibility criteria for students below 13 years of age or
                  studying below eighth grade. Notably, there is no defined
                  minimum or maximum SAT age limit for the exam set by the
                  administering body. Regarding age-based SAT exam eligibility
                  criteria:
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
                <ul>
                  <li>
                    Test-takers aged 12 years or younger can register through
                    mail.
                  </li>
                  <li>
                    Test-takers aged 13 years or younger can register by
                    creating a free account.
                  </li>
                  <li>
                    Test-takers aged 21 or younger need to present a
                    Government-issued photo ID, driver’s license, or passport
                    during registration.
                  </li>
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>
                  SAT scores accepted country-wise –
                </p>
                <p>
                  The SAT test comes with benefits like scholarships or reduced
                  fees for the test registration. Being a globally recognized
                  test, the SAT score is accepted by colleges worldwide in
                  countries like the{" "}
                </p>
                <ul>
                  <li>US</li>
                  <li>the UK</li>
                  <li>Canada</li>
                  <li>Australia</li>
                  <li>
                    India, those which come under the alliance with the College
                    Board
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>SAT Exam Pattern</h2>
              <p>
                The structure, content, and multistage adaptiveness of the SAT
                serve as a measure of students’ college readiness and as a
                reliable predictor of students’ university performance outcomes.
                For those seeking SAT exam details, understanding these aspects
                is crucial.
              </p>
              <p>
                The composite score of the SAT ranges from 400 to 1600 and is a
                combination of the Reading and Writing section score (200-800) ,
                and Math Section score (200-800). The total duration of the test
                is 2 Hours and 14 minutes. (With breaks).
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Reading and Writing</th>
                    <th>Math</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Administration</td>
                    <td>
                      Two-stage adaptive test design: one Reading and Writing
                      section administered via two separately timed modules
                    </td>
                    <td>
                      Two-stage adaptive test design: one Math section
                      administered via two separately timed modules
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Test length (number of operational and pretest questions)
                    </td>
                    <td>
                      1st module: 25 operational questions and 2 pretest
                      questions
                      <br />
                      2nd module: 25 operational questions and 2 pretest
                      questions
                    </td>
                    <td>
                      1st module: 20 operational questions and 2 pretest
                      questions
                      <br />
                      2nd module: 20 operational questions and 2 pretest
                      questions
                    </td>
                  </tr>
                  <tr>
                    <td>Time per module</td>
                    <td>
                      1st module: 32 minutes
                      <br />
                      2nd module: 32 minutes
                    </td>
                    <td>
                      1st module: 35 minutes
                      <br />
                      2nd module: 35 minutes
                    </td>
                  </tr>
                  <tr>
                    <td>Total number of questions</td>
                    <td>54 questions</td>
                    <td>44 questions</td>
                  </tr>
                  <tr>
                    <td>Total time allotted</td>
                    <td>64 minutes</td>
                    <td>70 minutes</td>
                  </tr>
                  <tr>
                    <td>Average time per question</td>
                    <td>1.19 minutes</td>
                    <td>1.59 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h2>SAT Exam Pattern Highlights</h2>
              <p>
                The SAT consists of two main components: the Reading and Writing
                section, and Math Section. According to the new multistage
                adaptive model, the Reading and Writing section consists of two
                modules with 20 questions each with 30 minutes per module. The
                Math section also consists of two modules with 20 questions each
                with 35 minutes per module. The table below illustrates the SAT
                test pattern.
              </p>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>Format</th>
                    <th>Reading and Writing (RW) Section</th>
                    <th>Math Section</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Test length (number of operational and pretest questions)
                    </td>
                    <td>
                      1st module: 25 operational questions and 2 pretest
                      questions
                      <br />
                      2nd module: 25 operational questions and 2 pretest
                      questions
                    </td>
                    <td>
                      1st module: 20 operational questions and 2 pretest
                      questions
                      <br />
                      2nd module: 20 operational questions and 2 pretest
                      questions
                    </td>
                  </tr>
                  <tr>
                    <td>Time per stage</td>
                    <td>
                      1st module: 32 minutes
                      <br />
                      2nd module: 32 minutes
                    </td>
                    <td>
                      1st module: 35 minutes
                      <br />
                      2nd module: 35 minutes
                    </td>
                  </tr>
                  <tr>
                    <td>Total number of questions</td>
                    <td>54 Questions</td>
                    <td>44 Questions</td>
                  </tr>
                  <tr>
                    <td>Total time allotted</td>
                    <td>64 minutes</td>
                    <td>70 minutes</td>
                  </tr>
                  <tr>
                    <td>Question type(s) used</td>
                    <td>Four-option multiple-choice</td>
                    <td>
                      Four-option multiple choice (≈75%) and student-produced
                      response (SPR) (≈25%)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h2>What is tested on the SAT Exam?</h2>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>Characteristic</th>
                    <th>Reading and Writing (RW) Section</th>
                    <th>Math Section</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Scores reported</td>
                    <td>
                      Total score Section scores (Reading and Writing; Math)
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Question type(s) used</td>
                    <td>Discrete; four-option multiple-choice</td>
                    <td>
                      Discrete; four-option multiple-choice (≈75%) and
                      student-produced response (SPR) (≈25%)
                    </td>
                  </tr>
                  <tr>
                    <td>Stimulus subject areas</td>
                    <td>
                      Literature, history/social studies, humanities, science
                    </td>
                    <td>Science, social studies, real-world topics</td>
                  </tr>
                  <tr>
                    <td>Word count</td>
                    <td>25–150 (6-character) words per stimulus text</td>
                    <td>
                      Approximately 30% of questions are in context; a majority
                      of in-context questions have 50 (6-character) words or
                      fewer
                    </td>
                  </tr>
                  <tr>
                    <td>Informational graphics</td>
                    <td>Yes; tables, bar graphs, line graphs</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Text complexity bands</td>
                    <td>
                      Grades 6–8, grades 9–11, grades 12–14 (Grades 12–14
                      excluded from PSAT 8/9)
                    </td>
                    <td>N/A (see section 2.3.12)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h2>How to Ace the SAT?</h2>
              <div>
                <h2>Preparation:</h2>
                <ul>
                  <li>
                    Understand the Format: Familiarize yourself with the
                    structure, sections, and timing of the SAT.
                  </li>
                  <li>
                    Study Regularly: Dedicate consistent time to study each
                    week, focusing on weak areas.
                  </li>
                  <li>
                    Practice Tests: Take full-length practice tests to simulate
                    exam conditions.
                  </li>
                  <li>
                    Review Mistakes: Analyze incorrect answers to understand
                    concepts and improve.
                  </li>
                  <li>
                    Utilize Resources: Use official SAT study guides, online
                    resources, and prep courses.
                  </li>
                </ul>
              </div>

              <div>
                <h2>Test-Taking Strategies:</h2>
                <ul>
                  <li>
                    Manage Time: Pace yourself during the test; don't spend too
                    long on any single question.
                  </li>
                  <li>
                    Answer Easy Questions First: Start with questions you find
                    easier to maximize points.
                  </li>
                  <li>
                    Skip and Return: If unsure about a question, skip it and
                    return if time permits.
                  </li>
                  <li>
                    Process of Elimination: Use POE to eliminate obviously wrong
                    answers, increasing odds of choosing the correct one.
                  </li>
                  <li>
                    Read Carefully: Pay attention to details in questions and
                    answer choices to avoid careless mistakes.
                  </li>
                </ul>
              </div>

              <div>
                <h2>Subject-Specific Tips:</h2>
                <ul>
                  <li>
                    Math: Practice fundamental math skills and formulas.
                    Understand how to use the calculator effectively.
                  </li>
                  <li>
                    Reading: Skim passages for main ideas before answering
                    questions. Focus on understanding the author's tone and
                    purpose.
                  </li>
                  <li>
                    Writing and Language: Brush up on grammar rules and sentence
                    structure. Practice editing for clarity and conciseness.
                  </li>
                </ul>
              </div>

              <div>
                <h2>Test Day:</h2>
                <ul>
                  <li>
                    Rest and Nutrition: Get a good night's sleep before the
                    test. Eat a balanced breakfast.
                  </li>
                  <li>
                    Arrive Early: Reach the test center early to avoid stress
                    from rushing.
                  </li>
                  <li>
                    Stay Positive: Maintain a positive mindset and confidence in
                    your preparation.
                  </li>
                </ul>
              </div>

              <div>
                <h2>After the Test:</h2>
                <ul>
                  <li>
                    Score Review: Understand your score report and identify
                    areas for improvement.
                  </li>
                  <li>
                    Future Planning: Determine if you need to retake the SAT
                    based on your goals and score results.
                  </li>
                  <li>
                    Continued Learning: Keep practicing and learning even after
                    the test to maintain knowledge.
                  </li>
                </ul>
              </div>

              <p>
                By following these strategies and staying disciplined in your
                preparation, you can maximize your chances of acing the SAT
                exam.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.c3}>
          <div>
            <h2>How to Ace the SAT?</h2>
            <ul>
              <li>
                Understand the Format: Familiarize yourself with <br /> the
                structure, sections, and timing of the SAT.
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
                Utilize Resources: Use official SAT study guides, <br /> online
                resources, and prep courses.
              </li>
            </ul>

            <button>Book Appointment with Trainer</button>
          </div>
          <div>
            <h2>Why Gradlers SAT Prep?</h2>
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
              <li>Week-end Batches</li>
            </ul>

            <button>Speak to Our Experts</button>
          </div>
          <div>
            <h2>Gradlers Prep Courses</h2>
            <ul>
              <li>SAT Self-Prep</li>
              <li>SAT Standard</li>
              <li>SAT 1-on-1</li>
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
          {satFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default SAT;
