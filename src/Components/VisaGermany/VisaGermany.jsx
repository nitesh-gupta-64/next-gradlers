"use client";
import React, { useContext } from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/home1.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import TestimonialsSwiper from "../Testimonials/Testimonials";
import { AppContext } from "@/Context/AppContext";

const VisaGermany = () => {
  const { visaInfo } = useContext(AppContext);
  return (
    <div className={styles.ie}>
      <div className={styles.c1}>
        <Image src={hm} alt="lt" />
        <div>
          <h2>Germany Student Visa</h2>
          <p>
            The Germany student visa allows international students to pursue
            their studies at German universities and educational institutions.
            Applicants must have an offer from a recognized institution, proof
            of financial resources to cover living expenses, and health
            insurance. The visa permits students to work part-time during their
            studies and offers opportunities for post-graduation work. Germany
            is renowned for its high-quality education system, innovative
            research opportunities, and vibrant cultural experiences. With
            affordable tuition fees and numerous scholarships available, a
            Germany student visa opens doors to a world-class education and a
            bright future in Europe’s economic powerhouse.
          </p>
        </div>
      </div>
      <div className={styles.c2}>
        <div>
          <div>
            <h2>Germany Student Visa Types</h2>
            <p>
              International students looking to study in Germany can apply for
              different types of visas based on their specific needs and the
              duration of their stay. Here are the main types of Germany student
              visas:
            </p>
            <div>
              <ol>
                <li>
                  <strong>
                    Student Applicant Visa (Visum zur Studienbewerbung)
                  </strong>
                  <ul>
                    <li>
                      Purpose: For students who need to be in Germany to apply
                      for university admission in person or complete other
                      formalities required for admission.
                    </li>
                    <li>Duration: Valid for up to 9 months.</li>
                    <li>
                      Requirements: Proof of prior academic qualifications,
                      evidence of sufficient funds, and a letter from the
                      university indicating the need for the student to be
                      present in Germany to complete the application process.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Student Visa (Visum zu Studienzwecken)</strong>
                  <ul>
                    <li>
                      Purpose: For students who have already received admission
                      to a German university or preparatory course
                      (Studienkolleg).
                    </li>
                    <li>
                      Duration: Initially issued for three months, then
                      converted to a residence permit for the duration of the
                      study program.
                    </li>
                    <li>
                      Requirements: Proof of admission, proof of financial
                      resources, health insurance, and evidence of previous
                      academic qualifications.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Language Course Visa (Visum zur Teilnahme an einem
                    Sprachkurs)
                  </strong>
                  <ul>
                    <li>
                      Purpose: For students planning to attend a language course
                      in Germany that lasts between 3 months and 1 year.
                    </li>
                    <li>
                      Duration: Valid for the duration of the language course.
                    </li>
                    <li>
                      Requirements: Proof of enrollment in a language course,
                      proof of financial resources, and health insurance.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Student Residence Permit (Aufenthaltserlaubnis zu
                    Studienzwecken)
                  </strong>
                  <ul>
                    <li>
                      Purpose: Once in Germany, students need to convert their
                      student visa to a residence permit for study purposes.
                    </li>
                    <li>
                      Duration: Typically issued for one to two years and can be
                      renewed.
                    </li>
                    <li>
                      Requirements: Proof of ongoing enrollment, adequate
                      financial resources, health insurance, and proof of
                      satisfactory academic progress.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Preparatory Course Visa (Visum zur Teilnahme am
                    Studienkolleg)
                  </strong>
                  <ul>
                    <li>
                      Purpose: For students who need to attend a preparatory
                      course (Studienkolleg) before enrolling in a full degree
                      program.
                    </li>
                    <li>
                      Duration: Valid for the duration of the preparatory
                      course, typically one year.
                    </li>
                    <li>
                      Requirements: Proof of acceptance into a Studienkolleg,
                      proof of financial resources, and health insurance.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Research Visa</strong>
                  <ul>
                    <li>
                      Purpose: For postgraduate students and researchers who
                      wish to conduct research or pursue a doctoral degree in
                      Germany.
                    </li>
                    <li>
                      Duration: Based on the duration of the research project or
                      doctoral program.
                    </li>
                    <li>
                      Requirements: Proof of acceptance into a research program
                      or doctoral program, proof of financial resources, and
                      health insurance.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <p>
              <strong>Financial Resources:</strong> Students typically need to
              demonstrate that they have at least €11,208 per year (2023) to
              cover living expenses through blocked account
            </p>
            <p>
              <strong>Health Insurance:</strong> Proof of health insurance
              coverage is mandatory for all types of student visas.
            </p>
            <p>
              <strong>Language Proficiency: </strong>Depending on the course and
              institution, proof of German or English language proficiency may
              be required.
            </p>
            <p>
              By understanding these different visa types, Indian students can
              better navigate the application process and choose the visa that
              best fits their academic goals in Germany.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2>Eligibility for German student visa </h2>
            <div>
              <ul>
                <li>Must have scored 70% and above in your previous study.</li>
                <li>Transcripts and certificates of your academics.</li>
                <li>An interview with the corresponding university.</li>
                <li>Must clear the GRE or GMAT exams as required.</li>
                <li>
                  Must clear any of the English language proficiency tests
                  IELTS, TOEFL, or PTE if you are a non-native English speaker.
                </li>
                <li>
                  If your language medium is German, you must clear Testdaf
                  (German language test).
                </li>
                <li>
                  Completing the ACS process before applying for German Student
                  visa.
                </li>
                <li>
                  Go through the university's official portal for information
                  regarding the additional requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>German Student Visa Requirements</h2>
            <div>
              <ul>
                <li>Visa Application form</li>
                <li>Declaration</li>
                <li>Statement of Purpose</li>
                <li>Proof of admission</li>
                <li>Academic transcripts</li>
                <li>ACS certificate</li>
                <li>Blocked account as financial cover proof</li>
                <li>Health Insurance</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>How to apply for Germany student visa</h2>
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  Step 1: Check your eligibility for a German student Visa.
                </li>
                <li>Step 2: Arrange all the required documents.</li>
                <li>Step 3: Apply for an ACS Certificate.</li>
                <li>Step 4: Apply for a German visa online.</li>
                <li>Step 5: Wait for the approval status.</li>
                <li>Step 6: Fly to Germany for your education.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>German student visa validity</h2>
            <p>
              German study visas are usually issued for 3 to 6 months. Students
              must travel to Germany and complete the official educational
              formalities during this period. After that, they apply for a
              German resident permit, which is issued for the duration of their
              course. Depending on the need, the resident license can also be
              extended.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2>Cost of Germany Student Visa</h2>
            <p>
              The cost of obtaining a Germany student visa for Indian students
              involves several components. Here’s a breakdown:
            </p>
            <div>
              <ol>
                <li>
                  <strong>Visa Application Fee</strong>
                  <ul>
                    <li>Student Applicant Visa: €75 (approx. ₹6,500)</li>
                    <li>Student Visa: €75 (approx. ₹6,500)</li>
                    <li>Language Course Visa: €75 (approx. ₹6,500)</li>
                    <li>Research Visa: €75 (approx. ₹6,500)</li>
                  </ul>
                </li>
                <li>
                  <strong>Additional Costs</strong>
                  <ul>
                    <li>
                      Health Insurance: Around €80-€160 per month (approx.
                      ₹7,000-₹14,000)
                    </li>
                    <li>
                      Proof of Financial Resources: Students need to demonstrate
                      sufficient funds, typically €11,208 per year (approx.
                      ₹9,65,000). This can be done through:
                      <ul>
                        <li>A blocked account (Sperrkonto)</li>
                        <li>Scholarship award letters</li>
                        <li>
                          Declaration of commitment by someone living in Germany
                        </li>
                      </ul>
                    </li>
                    <li>
                      Travel Expenses: Costs associated with traveling to the
                      German consulate for the visa interview.
                    </li>
                    <li>
                      Document Preparation and Translation: Costs for obtaining,
                      translating, and notarizing required documents.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Example Cost Calculation for the Visa Application:
                  </strong>
                  <ul>
                    <li>Visa Application Fee: €75</li>
                    <li>Health Insurance (1 year): €960-€1,920</li>
                    <li>
                      Proof of Financial Resources (1 year): €11,208 (held in a
                      blocked account)
                    </li>
                    <li>
                      Total: €12,243-€13,203 (approx. ₹10,55,000-₹11,36,000)
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Gradlers Visa Services</h2>
            <div>
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <strong>Visa Consultation and Counseling:</strong>
                  <ul>
                    <li>
                      Personalized Guidance: One-on-one sessions to understand
                      students' educational and career goals, helping them
                      choose the appropriate visa type.
                    </li>
                    <li>
                      Eligibility Assessment: Evaluating students' eligibility
                      for various visa categories based on their academic
                      background and future plans.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Visa Application Assistance:</strong>
                  <ul>
                    <li>
                      Form Filling: Helping students accurately complete the
                      visa application form.
                    </li>
                    <li>
                      Document Preparation: Assisting with the collection and
                      organization of required documents, such as the
                      Confirmation of Acceptance, ACS certificate, financial
                      statements, and academic transcripts.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Financial Proof Assistance:</strong>
                  <ul>
                    <li>
                      Blocked Account Setup: Guiding students on how to open and
                      fund a blocked account (Sperrkonto) to demonstrate
                      sufficient financial resources.
                    </li>
                    <li>
                      Scholarship and Funding Guidance: Providing information on
                      available scholarships and financial aid options.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Health Insurance Guidance:</strong>
                  <ul>
                    <li>
                      Health Insurance Enrollment: Assisting students in
                      enrolling in a suitable health insurance plan that meets
                      German visa requirements.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Interview Preparation:</strong>
                  <ul>
                    <li>
                      Mock Interviews: Conducting practice interviews to help
                      students become familiar with the types of questions they
                      may be asked.
                    </li>
                    <li>
                      Tips and Strategies: Providing advice on how to answer
                      questions confidently and what documents to take.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Visa Appointment Scheduling:</strong>
                  <ul>
                    <li>
                      Appointment Booking: Helping students schedule their visa
                      interview appointments at the nearest German Embassy or
                      Consulate.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Pre-Departure Briefing:</strong>
                  <ul>
                    <li>
                      Travel Preparation: Offering guidance on travel
                      arrangements, what to pack, and cultural adjustments.
                    </li>
                    <li>
                      Arrival Procedures: Informing students about what to
                      expect upon arrival in Germany, including immigration
                      procedures and transportation options.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.c9}>
        <h2>Our Recent Visa Successes</h2>
        <TestimonialsSwiper data={visaInfo} />
      </div>
    </div>
  );
};

export default VisaGermany;
