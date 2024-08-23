import React from "react";
import styles from "../US/US.module.css";
import us from "../../../public/assets/images/ger.jpg";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const Germany = () => {
  const germanyFaqs = [
    {
      question: "Is studying in Germany free?",
      answer:
        "While tuition fees may be low or non-existent, it’s important to budget for living expenses such as accommodation, food, health insurance, and personal expenses. The cost of living in Germany can vary depending on the city and lifestyle, but it is generally manageable compared to other European countries.",
    },
    {
      question: "Can I work in Germany with a student visa?",
      answer:
        "Germany permits international students to work while studying. Students are allowed to work for 240 days in part-time and 120 days in full time with their student visa. Working while studying is financially beneficial for students to manage their expenses.",
    },
    {
      question:
        "Is it required to be able to communicate in German in order to study in Germany?",
      answer:
        "No, knowing German is not a requirement for studying in Germany. Many universities offer English-language postgraduate programs. It will also depend on the course you wish to study.",
    },
    {
      question: "Is it possible to take the courses in English?",
      answer:
        "Yes, English courses are available at the majority of universities. Public universities, on the other hand, demand German language certification as a prerequisite of entrance because certain courses are only given in German.",
    },
    {
      question: "Can I get PR in Germany after study?",
      answer:
        "After successfully graduating, you can apply for a German job-seeker visa. If you get qualified for a job, you will get a skilled-worker residence permit in Germany. Upon completing 2 years of work in Germany, you can apply for permanent residency (PR).",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.us}>
        <div className={styles.c1}>
          <h3>Study in Germany</h3>
          <p>
            Germany is an ideal destination for studying overseas with its
            world-class education and thrilling urban life. It has a welcoming
            culture and accepts immigrants from all over the world. With a
            German study visa, you can have access to world-class education. The
            German economy is vast and has infinite opportunities for overseas
            students. The country offers cost-effective education for graduate,
            postgraduate, and master's programs. In addition to the nominal fee,
            various fee waivers and merit scholarships are available for
            international students. Obtaining a German study visa and gaining
            admission to German universities is more accessible than in other
            countries and universities.
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
          <h3>Why Study in Germany?</h3>
          <p>
            Germany is renowned for its excellent education system, especially
            in fields like engineering, science, and technology. Many
            universities are highly ranked globally, offering state-of-the-art
            facilities and research opportunities. Most public universities in
            Germany charge little to no tuition fees for international students,
            making it an attractive option compared to other study destinations.
            Private universities do charge fees but are often lower than in
            other countries. Germany offers a broad spectrum of courses and
            programs taught in English, catering to diverse academic interests.
            Whether you're interested in engineering, humanities, medicine, or
            business, there are numerous options available.
          </p>
          <p>
            So, what draws Indian and other international students to the
            Germany?
          </p>
          <ul>
            <li>Quality Education</li>
            <li>Scholarships</li>
            <li>Affordability</li>
            <li>Wide range of Programs</li>
            <li>Strong Economy and Job Opportunities</li>
            <li>Cultural Diversity and Travel Opportunities</li>
            <li>Safety and Infrastructure</li>
            <li>PR Opportunity</li>
          </ul>
        </div>
        <button>Download Destination Guide</button>
        <div className={styles.c4}>
          <h3>All you need for your Germany Dream</h3>
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
          <h3>Tests Required to Study in Germany</h3>
          <div>
            <Link href="/toefl">TOEFL</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/gre">GRE</Link>
            <Link href="/sat">SAT</Link>
            <Link href="/gmat">GMAT</Link>
          </div>
        </div>
        <button>Get FREE Counselling</button>
        <div className={styles.c4}>
          <h3>Top Courses to Study in Germany</h3>
          <ul>
            <li>Engineering</li>
            <li>Computer Sciences & IT</li>
            <li>Business & Management</li>
            <li>Natural Sciences</li>
            <li>Architecture & Urban Planning</li>
            <li>Medicine & Healthcare</li>
            <li>Renewable Energy & Environmental Engineering</li>
            <li>Robotics & Artificial Intelligence</li>
            <li>Automotive Engineering</li>
            <li>Humanities & Social Sciences</li>
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
          {germanyFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Germany;
