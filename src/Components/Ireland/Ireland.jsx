import React from "react";
import styles from "../US/US.module.css";
import us from "../../../public/assets/images/ire.jpg";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const Ireland = () => {
  const irelandFaqs = [
    {
      question: "What are the Ireland student visa types?",
      answer: (
        <>
          There are two types of student visas available in Ireland based on
          your study requirements.
          <br />
          <strong>Type – C Visa:</strong> Also known as short-stay C Visa, this
          visa is granted for a period of 90 days. It is intended for
          short-duration professional training programs in Ireland. Holders of
          this visa are not allowed to work during their training period.
          <br />
          <strong>Type-D Visa:</strong> This visa is for an extended stay of
          more than three months. If your course duration is over 3 months, you
          should apply for a type-D visa. It can also be extended based on the
          course duration. Students with a type-D visa are permitted to work
          while studying.
        </>
      ),
    },
    {
      question: "Can I work in Ireland with a student visa?",
      answer: (
        <>
          Non-EEA students receive Stamp 2 permission to work while studying.
          They can work up to 20 hours per week during their course and up to 40
          hours per week during holidays. Postgraduate students working on their
          thesis and examinations can also work up to 20 hours per week, but are
          restricted from working during summer holidays.
        </>
      ),
    },
    {
      question: "Is Ireland good for Indian students?",
      answer: (
        <>
          Ireland is an ideal option for Indian students due to its high-quality
          education system, advanced infrastructure, experienced professors, and
          comprehensive course curriculum. There are ample post-study work
          opportunities, especially with 1-year Master’s programs offering
          excellent career prospects.
        </>
      ),
    },
    {
      question: "Can I get PR in Ireland after study?",
      answer: (
        <>
          Non-EU and non-EEA citizens can work for 2 years in Ireland with an
          Irish General Work Permit after securing a job. They can apply for an
          extension of their work permit afterward. After completing 5 years of
          stay in Ireland, students can apply for Permanent Residency.
        </>
      ),
    },
    {
      question: "What are the requirements for Ireland Student Visa?",
      answer: (
        <>
          The documents required for an Ireland Student Visa include:
          <br />
          • 2 latest colour passport-sized photographs
          <br />
          • Valid passport and copies of previous passports (if any)
          <br />
          • Letter of application with complete contact information and reason
          for coming to Ireland, signed
          <br />
          • Acceptance letter from the university or college in Ireland
          <br />
          • Evidence of payment of tuition and registration fees
          <br />
          • Copies of exam results and academic qualifications
          <br />
          • Certificate of English language proficiency (e.g., IELTS score)
          <br />
          • Evidence of sufficient funds to support your stay in Ireland
          <br />• Medical insurance covering at least €25,000
        </>
      ),
    },
    {
      question: "How much does it cost for an Indian to study in the Ireland?",
      answer: (
        <>
          The average fees for studying in Ireland are as follows:
          <br />
          • Undergraduate Program: € 9,000 – € 45,000 per year
          <br />
          • Postgraduate master’s Program: € 9,500 – € 37,000 per year
          <br />• Doctoral Degree: € 9,000 – € 30,000 per year
        </>
      ),
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.us}>
        <div className={styles.c1}>
          <h3>Study in Ireland</h3>
          <p>
            Ireland welcomes international students to pursue graduate,
            postgraduate, and master's degrees and other specializations. It is
            the hub of many of the best universities in the world. Ireland study
            visa is issued for international students seeking to study there.
            The country has over 96% of student visa success rate. Studying in
            Ireland offers not only high-quality education but also a culturally
            enriching experience in a welcoming environment, with ample
            opportunities for personal growth and career development.
          </p>
        </div>
        <Image
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "90vh",
            objectFit: "cover",
          }}
          src={us}
          alt="us"
        />
        <div className={styles.c2}>
          <h3>Why Study in Ireland?</h3>
          <p>
            Irish universities are well-known for their research capabilities,
            and your credentials will likely be recognized almost anywhere in
            the world. Many universities also provide internship opportunities
            to help students acquire practical experience in their field of
            study. Below are the reasons why one should consider studying in
            Ireland
          </p>
          <ul>
            <li>High-Quality Education</li>
            <li>Scholarship Opportunities</li>
            <li>Gateway to Europe</li>
            <li>Research and Innovation</li>
            <li>Wide range of Programs</li>
            <li>Strong Economy and Job Opportunities</li>
            <li>English-Speaking Environment</li>
            <li>Cultural Diversity and Travel Opportunities</li>
          </ul>
        </div>
        <button>Download Destination Guide</button>
        <div className={styles.c4}>
          <h3>All you need for your Ireland Dream</h3>
          <ul>
            <li>Personalized Counselling</li>
            <li>Test-Prep Coaching</li>
            <li>University Selection & Admission</li>
            <li>Visa Support</li>
            <li>Pre-departure Orientation</li>
          </ul>
        </div>
        <button>Connect to Expert</button>
        <div className={styles.c3}>
          <h3>Tests Required to Study in Ireland</h3>
          <div>
            <Link href="/toefl">TOEFL</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/pte">PTE</Link>
            <Link href="/counselling">Duolingo</Link>
          </div>
        </div>
        <button>Get FREE Counselling</button>
        <div className={styles.c4}>
          <h3>Top Courses to Study in Ireland</h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Cloud Computing</li>
            <li>Data Science</li>
            <li>Data Analytics</li>
            <li>Cyber Security</li>
            <li>Computer Science</li>
            <li>Pharmaceuticals</li>
            <li>Business Analytics</li>
            <li>Accounting and Finance</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <button>Speak to Expert</button>
        <div className={styles.c5}>
          <div className={styles.c4}>
            <h3>Top Admits 2023- UG & PG</h3>
          </div>
          <AdmitContainer />
          <div className={styles.c4}>
            <h3>Why Choose GRADLERS?</h3>
            <ol style={{ listStyleType: "square" }}>
              <li>One Stop Shop</li>
              <li>Speed & Accuracy</li>
              <li>Quality Guidance</li>
              <li>Transparent Processing</li>
              <li>Top Admits & Proven Admission Success</li>
              <li>Top Admission Advisors</li>
            </ol>
          </div>
        </div>
        <div className={styles.c6}>
          <h3>Frequently Asked Questions (FAQs)</h3>
          {irelandFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Ireland;
