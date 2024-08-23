"use client";
import React, { useContext } from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/home1.png";
import TestimonialsSwiper from "../Testimonials/Testimonials";
import { AppContext } from "@/Context/AppContext";

const VisaUK = () => {
  const { visaInfo } = useContext(AppContext);
  return (
    <div className={styles.ie}>
      <div className={styles.c1}>
        <Image src={hm} alt="lt" />
        <div>
          <h2>UK Student Visa</h2>
          <p>
            The UK student visa, also known as the Tier 4 (General) student
            visa, allows international students to pursue their studies at
            accredited UK institutions. Applicants must have an offer from a
            licensed sponsor and demonstrate sufficient funds to cover tuition
            and living expenses. The visa permits full-time study and limited
            work hours during term time, with more flexibility during holidays.
            Additionally, the UK offers a Graduate Route, allowing students to
            stay and work for up to two years after completing their degree.
            This visa opens doors to world-class education and vibrant cultural
            experiences in the UK.
          </p>
        </div>
      </div>
      <div className={styles.c2}>
        <div>
          <div>
            <h2>UK Student Visa Types</h2>
            <p>
              There are several types of UK student visas catering to different
              needs and circumstances. Here are the primary types:
            </p>
            <div>
              <ol>
                <li>
                  <strong>
                    Student Visa (formerly Tier 4 (General) Student Visa)
                  </strong>
                  <ul>
                    <li>
                      Purpose: For students aged 16 or over who wish to study at
                      a higher education institution in the UK.
                    </li>
                    <li>
                      Requirements: Offer from a licensed student sponsor, proof
                      of English language proficiency, and sufficient funds to
                      cover tuition and living expenses.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Child Student Visa</strong>
                  <ul>
                    <li>
                      Purpose: For children aged 4 to 17 who wish to study at an
                      independent school in the UK.
                    </li>
                    <li>
                      Requirements: Offer from a licensed independent school,
                      proof of sufficient funds, and parental or guardian
                      consent.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Short-term Study Visa</strong>
                  <ul>
                    <li>
                      Purpose: For students who wish to take a short course of
                      study or an English language course in the UK for up to 6
                      months, or an English language course for up to 11 months.
                    </li>
                    <li>
                      Requirements: Proof of acceptance onto a course,
                      sufficient funds for the duration of the stay, and plans
                      to leave the UK at the end of the study period.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Graduate Route Visa</strong>
                  <ul>
                    <li>
                      Purpose: For students who have successfully completed a
                      degree at a UK higher education provider to stay and work
                      in the UK for two years (three years for PhD graduates).
                    </li>
                    <li>
                      Requirements: Successful completion of a degree at a UK
                      higher education provider with a track record of
                      compliance.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Student Route (including Doctorate Extension Scheme)
                  </strong>
                  <ul>
                    <li>
                      Purpose: For students seeking to extend their stay to
                      complete a degree or pursue post-doctoral work.
                    </li>
                    <li>
                      Requirements: Proof of ongoing study or research,
                      sufficient funds, and a track record of compliance with
                      visa conditions.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Eligibility for UK Tier 4 Visa</h2>
            <div>
              <ul>
                <li>
                  Must have scored above 60% to 75% in your previous study
                </li>
                <li>
                  CAS (Confirmation of Acceptance for Studies) from the UK
                </li>
                <li>University acceptance letter</li>
                <li>Previous academic transcripts</li>
                <li>
                  IELTS with 6 bands or above or any other language proficiency
                  proof (depending on the university)
                </li>
                <li>Proof of travel and medical insurance</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>UK Student Visa Requirements</h2>
            <div>
              <ul>
                <li>
                  Proof of funds to manage the living expenses during the course
                </li>
                <li>
                  Funds should be maintained for at least 28 days, including the
                  tuition fees and living expenses.
                </li>
                <li>Confirmation of acceptance reference number</li>
                <li>Documents required to obtain CAS</li>
                <li>Medical wellness certificates</li>
                <li>
                  Refer to university's requirements list for any specific visa
                  requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>How to apply for a UK Student Visa?</h2>
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li>Step 1: Check if you can apply for the UK Visa.</li>
                <li>Step 2: Get ready with all the required documents.</li>
                <li>Step 3: Apply for a UK visa online.</li>
                <li>Step 4: Wait for the approval status.</li>
                <li>Step 5: Fly to the UK for your education.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Cost of UK Student Visa</h2>
            <p>
              The cost of applying for a UK student visa for Indian students
              involves several components. Here’s a breakdown of the primary
              costs
            </p>
            <div>
              <ol>
                <li>
                  <strong>Visa Application Fee</strong>
                  <ul>
                    <li>
                      Student Visa (formerly Tier 4): £363 (approx. ₹36,000)
                    </li>
                    <li>
                      Short-term Study Visa (up to 6 months): £97 (approx.
                      ₹9,600)
                    </li>
                    <li>
                      Short-term Study Visa (11 months English Language Course):
                      £186 (approx. ₹18,400)
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Immigration Health Surcharge (IHS)</strong>
                  <ul>
                    <li>
                      The IHS is £470 per year of study. For example, a 3-year
                      course would cost £1,410 (approx. ₹140,000).
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Additional Costs</strong>
                  <ul>
                    <li>
                      Biometric Enrollment Fee: Included in the visa application
                      fee, covers the cost of providing fingerprints and a
                      photo.
                    </li>
                    <li>
                      Priority Visa Service (optional): An additional fee of
                      £220 (approx. ₹21,800) for faster processing.
                    </li>
                    <li>
                      Super Priority Visa Service (optional): An additional fee
                      of £956 (approx. ₹94,800) for next-day processing.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <p>
              Indian students should ensure they have sufficient funds to cover
              both the application costs and the financial requirements for the
              visa, which includes proof of funds to cover tuition and living
              expenses.
            </p>
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
                      Document Preparation: Assisting with the collection,
                      organization, and expert review of required documents,
                      such as Confirmation of Acceptance for Studies (CAS),
                      financial statements, and academic transcripts.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Immigration Health Surcharge (IHS) Payment:</strong>
                  <ul>
                    <li>
                      IHS Guidance: Assisting students in understanding and
                      paying the IHS fee, ensuring they receive the necessary
                      confirmation for their visa application.
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
                      interview appointments at the UK Visa Application Centre
                      (VAC).
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
                      expect upon arrival in the UK, including immigration
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

export default VisaUK;
