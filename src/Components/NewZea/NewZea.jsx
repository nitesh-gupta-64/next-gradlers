import React from "react";
import styles from "../US/US.module.css";
import us from "../../../public/assets/images/newzz.jpg";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const NewZea = () => {
  const newZealandFaqs = [
    {
      question: "Is it safe to study in New Zealand?",
      answer:
        "Yes, it is very safe to study in New Zealand. In fact, New Zealand is one of the safest countries in the world, ranking 2nd in the Global Peace Index (2018) with very low crime rates.",
    },
    {
      question:
        "What is the language proficiency required for studying English-taught courses in New Zealand?",
      answer:
        "For undergraduate or master’s courses, candidates typically need to score at least 6.5 in IELTS or achieve at least 50 in PTE for undergraduate courses and 64 for master’s courses.",
    },
    {
      question:
        "What are the average tuition fees for undergraduate programs in New Zealand?",
      answer:
        "The average tuition fees for undergraduate programs in New Zealand range from approximately $20,500 to $25,000 per year.",
    },
    {
      question: "What are the best subjects to study in New Zealand?",
      answer:
        "New Zealand offers top courses across various fields, including Engineering, Animation, IT and Computer Science, Agriculture, Nursing, Business Management, Healthcare, among others.",
    },
    {
      question: "Can I work while studying in New Zealand?",
      answer:
        "Yes, international students in New Zealand can work up to 20 hours per week during their studies and full-time during scheduled holidays.",
    },
    {
      question:
        "How long does it take to get a student visa to study in New Zealand?",
      answer:
        "Processing times for a New Zealand student visa submitted online typically take around 20 days, while applications submitted as hard copies may take 35-40 days.",
    },
    {
      question: "What are the requirements for a New Zealand Student Visa?",
      answer:
        "The documents required to study in New Zealand for international students vary by university and course, but commonly include: Valid Passport, Health Insurance Receipt, Two passport size photographs, Receipt of Application Fee Payment, Complete Student Visa Application Form, Degree or Certificate from previous school/college, Admission confirmation from New Zealand University, Test scores (e.g., TOEFL, GRE, GMAT, IELTS), Proof of financial capability to study and live in New Zealand, Health and Character Certificate demonstrating genuine study intentions.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.us}>
        <div className={styles.c1}>
          <h3>Study in New Zealand</h3>
          <p>
            Studying in New Zealand offers a unique blend of high-quality
            education and breathtaking natural beauty. Renowned for its
            innovative teaching methods and research opportunities, New
            Zealand's universities rank highly globally. The country's welcoming
            and safe environment makes it an ideal destination for international
            students. With a diverse range of courses and strong support
            services, students can pursue their academic and personal growth
            effectively. Additionally, New Zealand provides excellent work
            opportunities during and after studies, facilitating a smooth
            transition into the workforce. The vibrant culture, friendly people,
            and stunning landscapes ensure a rich and memorable educational
            experience.
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
          <h3>Why Study in New Zealand?</h3>
          <p>
            Studying in New Zealand offers numerous benefits for international
            students. Here are some compelling reasons to consider New Zealand
            as your study destination:
          </p>
          <ul>
            <li>
              High-Quality Education: New Zealand's universities are renowned
              for their academic excellence, innovative teaching methods, and
              robust research opportunities.
            </li>
            <li>
              Global Recognition: Degrees from New Zealand institutions are
              recognized and respected worldwide, enhancing employability and
              career prospects.
            </li>
            <li>
              Safe and Welcoming Environment: Known for its friendly and
              inclusive society, New Zealand is one of the safest countries for
              international students.
            </li>
            <li>
              Work Opportunities: Students can work part-time during their
              studies and have access to post-study work visas, facilitating a
              smooth transition into the job market.
            </li>
            <li>
              Stunning Natural Beauty: From mountains and beaches to forests and
              lakes, New Zealand's breathtaking landscapes offer endless
              opportunities for outdoor activities and exploration.
            </li>
            <li>
              Quality of Life: With a high standard of living, excellent
              healthcare, and vibrant cultural scene, New Zealand provides a
              balanced and fulfilling lifestyle.
            </li>
            <li>
              Support for International Students: New Zealand universities offer
              extensive support services, including academic assistance, career
              guidance, and personal support.
            </li>
            <li>
              Cultural Diversity: The multicultural environment in New Zealand
              fosters cultural exchange and enriches the student experience.
            </li>
          </ul>
          <p>
            Choosing to study in New Zealand ensures a high-quality education,
            enriching personal experiences, and strong career opportunities.
          </p>
        </div>
        <button>Download Destination Guide</button>
        <div className={styles.c4}>
          <h3>All you need for your New Zealand Dream</h3>
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
          <h3>Tests Required to Study in New Zealand</h3>
          <div>
            <Link href="/toefl">TOEFL</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/pte">PTE</Link>
            <Link href="/gmat">GMAT</Link>
          </div>
        </div>
        <button>Get FREE Counselling</button>
        <div className={styles.c4}>
          <h3>Top Courses to Study in New Zealand</h3>
          <ul>
            <li>IT</li>
            <li>Computer Science</li>
            <li>Medicine</li>
            <li>Business</li>
            <li>Healthcare</li>
            <li>Agriculture</li>
            <li>Animation</li>
            <li>Hospitality</li>
            <li>Data Science</li>
            <li>Data Analytics</li>
            <li>Cyber Security</li>
            <li>Pharmaceuticals</li>
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
          {newZealandFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default NewZea;
