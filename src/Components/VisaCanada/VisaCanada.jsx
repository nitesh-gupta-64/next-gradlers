"use client";
import React, { useContext } from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/home1.png";
import TestimonialsSwiper from "../Testimonials/Testimonials";
import { AppContext } from "@/Context/AppContext";

const VisaCanada = () => {
  const { visaInfo } = useContext(AppContext);
  return (
    <div className={styles.ie}>
      <div className={styles.c1}>
        <Image src={hm} alt="lt" />
        <div>
          <h2>Canada Student Visa</h2>
          <p>
            The Canada student visa, also known as the study permit, allows
            international students to pursue their education at designated
            learning institutions (DLIs) across Canada. Applicants must have an
            acceptance letter from a DLI, prove sufficient funds for tuition and
            living expenses, and pass a medical exam if required. The visa
            typically allows part-time work opportunities during studies and
            options for post-graduation work permits. Canada's welcoming
            environment, diverse culture, and high-quality education system make
            it a popular choice for students globally. A Canada student visa
            opens doors to enriching academic experiences and future career
            opportunities in a vibrant international setting.
          </p>
        </div>
      </div>
      <div className={styles.c2}>
        <div>
          <div>
            <h2>Canada Student Visa Types</h2>
            <div>
              <ul>
                <li>
                  <strong>Student Permit:</strong> Permits to Study in Canadian
                  Universities for up to 3 months <br /> (Student Direct Stream
                  (SDS) program: Faster application process for eligible
                  candidates)
                </li>
                <li>
                  <strong>Quebec Acceptance Certificate (CAQ):</strong> Study
                  permit for colleges in Quebec
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Canada Student Visa Requirements</h2>
            <div>
              <ul>
                <li>Educational Transcripts</li>
                <li>Academic references</li>
                <li>
                  Attestation Letter from the province or territory where you
                  plan to study
                </li>
                <li>Study Permit Application</li>
                <li>Employer references</li>
                <li>SOP (Statement of Purpose)</li>
                <li>Certificates of extracurricular achievements</li>
                <li>An acceptance letter from your educational institution</li>
                <li>
                  DLI has to confirm every LOA submitted (applicant outside
                  Canada)
                </li>
                <li>Proof of payment</li>
                <li>Proof of financial funds</li>
                <li>Proof of English Proficiency</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>How to apply for a Canada student visa</h2>
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  Step 1: Check your eligibility for a Canada student visa.
                </li>
                <li>
                  Step 2: Arrange the required documents as per checklist.
                </li>
                <li>Step 3: Apply for the visa online.</li>
                <li>Step 4: Wait for the status.</li>
                <li>Step 5: Fly to study in Canada.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Cost of Canada Student Visa</h2>
            <p>
              As per the CIC (Citizenship and Immigration Canada), the Canada
              Student Visa Fee is 150 CAD-200 CAD.
            </p>
            <div>
              <ul>
                <li>
                  <strong>Application (per person): </strong> CAD
                </li>
                <li>
                  <strong>
                    Study permit (including applications for extensions):{" "}
                  </strong>{" "}
                  150
                </li>
                <li>
                  <strong>Biometrics fee (per person): </strong> 85
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Gradlers Visa Services</h2>
            <div>
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <strong>Visa Consultation and Counseling</strong>
                  <ul>
                    <li>
                      Personalized Guidance: Assessing student's educational
                      backgrounds and career goals to recommend suitable study
                      programs and visa options.
                    </li>
                    <li>
                      Eligibility Assessment: Evaluating student's eligibility
                      for different Canadian study permits and related permits
                      like the Post-Graduation Work Permit (PGWP).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Application Assistance</strong>
                  <ul>
                    <li>
                      Form Filling: Assisting students in accurately completing
                      visa application forms and ensuring all required fields
                      are correctly filled.
                    </li>
                    <li>
                      Document Preparation: Helping students gather and organize
                      necessary documents, such as acceptance letters from DLIs,
                      financial statements, and proof of medical exams.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Financial Proof Assistance</strong>
                  <ul>
                    <li>
                      Proof of Funds: Guiding students on how to demonstrate
                      sufficient financial resources to cover tuition fees,
                      living expenses, and health insurance costs.
                    </li>
                    <li>
                      Bank Statements and Other Financial Documents: Assisting
                      in preparing and verifying financial documents required
                      for the visa application.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Health Insurance Guidance</strong>
                  <ul>
                    <li>
                      Health Insurance Enrollment: Advising students on
                      obtaining suitable health insurance coverage (if not
                      included in their tuition fees) that meets Canadian visa
                      requirements.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Interview Preparation</strong>
                  <ul>
                    <li>
                      Mock Interviews: Conducting practice visa interview
                      sessions to help students familiarize themselves with the
                      types of questions and prepare confident responses.
                    </li>
                    <li>
                      Tips and Strategies: Providing advice on how to present
                      themselves effectively during the visa interview and what
                      documents to bring.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Visa Appointment Scheduling</strong>
                  <ul>
                    <li>
                      Appointment Booking: Assisting students in scheduling
                      their visa application appointments at the nearest Visa
                      Application Centre (VAC) or Canadian Embassy/Consulate.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Pre-Departure Briefing</strong>
                  <ul>
                    <li>
                      Travel Preparation: Offering guidance on travel
                      arrangements, accommodation options, and cultural
                      adjustments in Canada.
                    </li>
                    <li>
                      Arrival Procedures: Informing students about immigration
                      procedures, airport transfers, and initial settlement tips
                      upon arrival in Canada.
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

export default VisaCanada;
