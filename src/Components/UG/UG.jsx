"use client";
import React, { useContext } from "react";
import styles from "../IELTS/IELTS.module.css";
import Image from "next/image";
import hm from "../../../public/assets/images/mba.png";
import boy from "../../../public/assets/images/boy.png";
import girl from "../../../public/assets/images/girl.png";
import TestimonialsSwiper from "../Testimonials/Testimonials";
import { AppContext } from "@/Context/AppContext";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const UG = () => {
  const { admitInfo, visaInfo } = useContext(AppContext);
  const ugFaqs = [
    {
      question:
        "What are the admission requirements for undergraduate programs abroad?",
      answer:
        "Admission requirements typically include academic transcripts, standardized test scores (such as SAT or ACT), English language proficiency tests (IELTS or TOEFL), a personal statement or essay, and letters of recommendation.",
    },
    {
      question:
        "How do I choose the right university and program for my UG studies abroad?",
      answer:
        "Consider factors such as academic reputation, course offerings, location, campus facilities, student support services, cost, and career prospects. Research university rankings, visit university websites, and reach out to current students or alumni for insights.",
    },
    {
      question: "What is the application process for UG programs abroad?",
      answer:
        "The application process usually involves submitting an online application form, providing necessary documents (transcripts, test scores, etc.), writing a personal statement, and sometimes attending an interview. Deadlines and requirements vary by country and institution.",
    },
    {
      question:
        "How much does it cost to study abroad for an undergraduate degree?",
      answer:
        "Costs vary depending on the country, university, and program. Consider tuition fees, accommodation, living expenses, travel, and health insurance. Many universities offer scholarships and financial aid for international students.",
    },
    {
      question:
        "Are there scholarships or financial aid available for international students?",
      answer:
        "Yes, many universities and organizations offer scholarships, grants, and financial aid to international students based on academic merit, financial need, or specific criteria such as field of study or country of origin.",
    },
    {
      question: "What are the language requirements for studying abroad?",
      answer:
        "Most universities require proof of English language proficiency for non-native speakers, usually through tests like IELTS or TOEFL. Some countries may require proficiency in their native language.",
    },
    {
      question: "Can I work while studying as an international student?",
      answer:
        "Many countries allow international students to work part-time during the academic year and full-time during breaks. Check the specific regulations and visa conditions of the country you plan to study in.",
    },
    {
      question:
        "What support services are available for international students?",
      answer:
        "Universities often provide support services such as orientation programs, academic advising, counseling, career services, language support, and social activities to help international students adjust and succeed.",
    },
    {
      question: "What are the visa requirements for studying abroad?",
      answer:
        "Visa requirements vary by country. Generally, you need to obtain a student visa, which may require proof of admission, financial stability, health insurance, and a valid passport. Check the embassy or consulate website of the destination country for detailed information.",
    },
    {
      question: "How can studying abroad benefit my future career?",
      answer:
        "Studying abroad can enhance your resume by providing international experience, improving language skills, and developing cross-cultural competencies. It also offers opportunities to build a global network, gain unique perspectives, and access diverse job markets.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.ie}>
        <div className={styles.c1}>
          <Image src={hm} alt="lt" />
          <div>
            <h2>Undergrad Abroad</h2>
            <p>
              Studying an undergraduate degree internationally at a foreign
              university offers a transformative experience, blending academic
              growth with cultural immersion. Pursuing higher education abroad
              exposes students to diverse teaching methodologies, advanced
              research opportunities, and a global perspective on their field of
              study. Renowned institutions across the globe, from the USA,
              Canada, the UK, Australia, Germany, Singapore, and Ireland provide
              a high-quality education that is recognized worldwide.
            </p>
          </div>
        </div>
        <div className={styles.c2}>
          <div>
            <div>
              <p>
                Pursuing UG abroad has been gaining momentum among Indian
                students for the last few years. Below are some motivational
                reasons for pursuing an international UG degree.
              </p>
              <ul>
                <li>
                  Experience a diverse choice of subject combinations, flexible
                  curriculum, state-of-the-art infrastructure, and world-class
                  faculties.
                </li>
                <li>
                  Acquire both academic and life skills by studying with diverse
                  peer groups.
                </li>
                <li>
                  Gain access to a global network of friends, peers, and
                  professors who can open doors to global career opportunities
                  and collaborations.
                </li>
                <li>
                  Significant internships and relevant research experience
                  enable students with an international degree to stand a better
                  chance of getting higher salary packages post-college.
                </li>
                <li>
                  Chances of moving permanently to the chosen study destination
                  (PR).
                </li>
                <li>
                  Higher cut off in Indian colleges, and limited chance of
                  admission in premier local institutions.
                </li>
                <li>
                  Build personal growth traits by facing and overcoming the
                  challenges of living and studying in a foreign country,
                  building resilience, independence, and problem-solving skills.
                </li>
                <li>
                  Many countries and universities offer scholarships, grants,
                  and financial aid to international students, making studying
                  abroad more affordable.
                </li>
                <li>
                  The opportunity to explore new places, travel to neighboring
                  countries, and enjoy a sense of adventure while pursuing
                  academic goals.
                </li>
              </ul>
            </div>
            <Image src={boy} alt="boy" />
          </div>
          <div>
            <div>
              <h2>Most Trending Undergraduate Courses (UG) Globally</h2>
              <p>
                Trending UG courses for international students globally reflect
                the evolving demands of the job market and the emergence of new
                and varied fields. Some of the popular undergraduate courses
                internationally include
              </p>
              <ol>
                <li>
                  <strong>Computer Science and Information Technology:</strong>{" "}
                  With the rise of the digital economy, courses in software
                  development, cyber security, artificial intelligence, and data
                  science are in high demand.
                </li>
                <li>
                  <strong>Business and Management:</strong> Programs in business
                  administration, finance, marketing, and entrepreneurship
                  continue to attract students looking to enter the corporate
                  world or start their own ventures.
                </li>
                <li>
                  <strong>Engineering:</strong> Specializations in mechanical,
                  civil, electrical, and aerospace engineering are popular due
                  to their robust career prospects and the ongoing advancements
                  in technology and infrastructure.
                </li>
                <li>
                  <strong>Health Sciences:</strong> Courses in nursing, public
                  health, biomedical sciences, and health informatics are
                  gaining popularity as the healthcare industry continues to
                  expand and innovate.
                </li>
                <li>
                  <strong>Environmental Science and Sustainability:</strong>{" "}
                  Growing awareness of environmental issues has led to increased
                  interest in programs focused on sustainability, renewable
                  energy, and conservation.
                </li>
                <li>
                  <strong>Psychology:</strong> As mental health awareness
                  increases, psychology programs are attracting students
                  interested in understanding human behavior and pursuing
                  careers in counseling, therapy, and research.
                </li>
                <li>
                  <strong>Hospitality and Tourism Management:</strong> With the
                  global travel industry recovering and expanding, courses in
                  hospitality management, tourism, and event planning are
                  trending.
                </li>
                <li>
                  <strong>Creative Arts and Design:</strong> Programs in graphic
                  design, fashion design, digital media, and animation are
                  popular among students with a passion for creativity and
                  innovation.
                </li>
                <li>
                  <strong>
                    International Relations and Political Science:
                  </strong>{" "}
                  These courses are sought after by students interested in
                  global affairs, diplomacy, and policy-making.
                </li>
                <li>
                  <strong>Robotics and Mechatronics:</strong> Combining
                  mechanical engineering, electronics, and computer science,
                  these interdisciplinary programs prepare students for careers
                  in automation and advanced manufacturing.
                </li>
                <li>
                  <strong>Culinary Arts:</strong> These courses are for those
                  students who are passionate about food and eager to transform
                  their culinary creativity into a professional career.
                </li>
              </ol>
              <p>
                These courses offer promising career opportunities and cater to
                the diverse interests of international students, making them
                highly sought after across the globe.
              </p>
            </div>
          
          </div>
          <div>
            <div>
              <h2>Best Study Destinations for UG Abroad</h2>
              <p>
                A best study destination for undergraduate (UG) studies abroad
                depends on various factors such as the quality of education,
                availability of courses, cultural experience, cost of living,
                and career opportunities.
              </p>
              <p>Here are some of the best study destinations for UG abroad:</p>
              <div>
                <ol>
                  <li>
                    <strong>United States:</strong> Known for its diverse range
                    of programs and high-quality education, the US is home to
                    many of the world's top universities, offering excellent
                    research opportunities and vibrant campus life.
                  </li>
                  <li>
                    <strong>United Kingdom:</strong> With prestigious
                    institutions like Oxford, Cambridge, and Imperial College,
                    the UK offers a rich academic tradition and a wide variety
                    of courses. The shorter duration of undergraduate programs
                    is also an advantage.
                  </li>
                  <li>
                    <strong>Canada:</strong> Renowned for its welcoming
                    environment, high academic standards, and affordable tuition
                    fees, Canada is a popular choice for international students.
                    Universities like the University of Toronto and McGill
                    University are highly respected.
                  </li>
                  <li>
                    <strong>Australia:</strong> Known for its high-quality
                    education system and excellent student support services,
                    Australia offers diverse programs and a great quality of
                    life. Universities like the University of Sydney and the
                    University of Melbourne are top choices.
                  </li>
                  <li>
                    <strong>Germany:</strong> With many tuition-free or low-cost
                    education options, Germany is an attractive destination for
                    engineering, technology, and business courses. Universities
                    like the Technical University of Munich and Heidelberg
                    University are highly regarded.
                  </li>
                  <li>
                    <strong>Netherlands:</strong> Offering a wide range of
                    English-taught programs, the Netherlands is known for its
                    innovative education system and high-quality universities
                    like the University of Amsterdam and Delft University of
                    Technology.
                  </li>
                  <li>
                    <strong>Sweden:</strong> Known for its high-quality
                    education and strong focus on research and innovation,
                    Sweden offers a range of programs in English and a great
                    quality of life. Universities like Uppsala University and
                    Lund University are popular choices.
                  </li>
                  <li>
                    <strong>Singapore:</strong> As a global education hub with
                    top-ranked universities like the National University of
                    Singapore (NUS) and Nanyang Technological University (NTU),
                    Singapore offers high-quality education and strong links to
                    industry.
                  </li>
                  <li>
                    <strong>New Zealand:</strong> With a welcoming environment,
                    excellent support services for international students, and
                    high-quality education, New Zealand is a great destination.
                    Universities like the University of Auckland and University
                    of Otago are well-regarded.
                  </li>
                  <li>
                    <strong>Japan:</strong> Known for its advanced technology
                    and innovation, Japan offers high-quality education and
                    unique cultural experiences. Universities like the
                    University of Tokyo and Kyoto University are among the best
                    in Asia.
                  </li>
                </ol>
              </div>
              <p>
                These destinations offer a combination of excellent academic
                programs, cultural experiences, and career opportunities, making
                them ideal choices for undergraduate studies abroad.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h2>Eligibility Criteria for UG Admissions Abroad</h2>
              <p>
                <strong>Overall Profile</strong> <br />
                In order to apply for a UG program abroad, a well-rounded
                profile is required to stand out in the competitive pool through
                a unique and diverse identity. An applicant’s profile must be
                built around the following:
              </p>
              <div>
                <ul>
                  <li>Program specific activities and contributions</li>
                  <li>
                    Human strengths (empathy, inclusion, gratitude, tolerance,
                    compassion)
                  </li>
                  <li>
                    Honors and distinctions (academic activities,
                    national/international Olympiads)
                  </li>
                  <li>
                    Extra-curricular activities (demonstrating intellectual
                    depth, out-of-the-box thinking, leadership and performance
                    rather than mere participation)
                  </li>
                </ul>
              </div>
              <p>
                <strong>
                  Academic Requirements for UG Program Internationally after
                  12th (for Indian students){" "}
                </strong>
              </p>
              <div>
                <ul>
                  <li>
                    Consistent academic scores from Grade 9 to 11, 12th
                    mid-year, and predicted grade. Some applications/acceptances
                    are based on the 10th score and 12th predicted grades.
                  </li>
                  <li>
                    Usually 12 years of education are required to apply to
                    undergraduate programs. However, Germany requires 13 years
                    of education – i.e. clearing the 12th grade plus meeting one
                    of the following requirements:
                  </li>
                </ul>
              </div>
              <ol>
                <li>Clear JEE Advanced</li>
                <p>OR</p>
                <li>
                  One year of bachelor degree education from a recognized
                  educational institute in India
                </li>
                <p>OR</p>
                <li>
                  Clear the Feststellungsprüfung to study the preparatory course
                  in Germany before moving to the university.
                </li>
              </ol>
              <p>
                <strong>Standardized Test Score Requirements for UG</strong>
              </p>
              <div>
                <ul>
                  <li>
                    Most universities in the US require the Digital SAT/ACT
                    scores. Some top schools would additionally need Subject
                    Digital SAT scores for Admission.
                  </li>
                  <li>
                    English language assessment is required by almost all
                    foreign institutions. So IELTS, TOEFL, PTE, or DET scores
                    are submitted by students as per the university
                    requirements.
                  </li>
                  <li>
                    Students can also take AP tests based on their interests to
                    add value to their academic profile.
                  </li>
                  <li>
                    For non-USA study destinations, students may or may not
                    require a SAT or ACT test, but they definitely need to prove
                    their English proficiency through any of the above English
                    test scores acceptable by the university.
                  </li>
                </ul>
              </div>
              <p>
                <strong>Personal Documents (essays, SOPs, LORs, Resume)</strong>
              </p>
              <div>
                <ul>
                  <li>
                    The essays/personal statements form the most integral
                    component of the UG application.
                  </li>
                  <li>
                    The anecdotal approach should be used to create winning and
                    compelling essays.
                  </li>
                  <li>
                    To effectively answer every essay question, the 'Question
                    behind the Question' strategy must be adopted, which has
                    demonstrated success in admit in top 50 universities.
                  </li>
                  <li>
                    The SMEA methodology (Story, Maturity, Evidence,
                    Articulateness, and Skills) must be used as the essay
                    writing approach.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.c9}>
          <h2>Our Recent Top UG Admits</h2>
          <TestimonialsSwiper data={admitInfo} />
          <h2>Our University Partners</h2>
          <TestimonialsSwiper data={visaInfo} />
        </div>
        <div className={styles.c6}>
          <h3>Frequently Asked Questions (FAQs)</h3>
          {ugFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default UG;
