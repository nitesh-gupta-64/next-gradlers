import React from "react";
import styles from "../US/US.module.css";
import us from "../../../public/assets/images/australia.jpg";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const Aus = () => {
  const australiaFaqs = [
    {
      question:
        "What are the admission requirements for international students in Australian universities?",
      answer:
        "Admission requirements vary by program and university but generally include academic transcripts, English language proficiency (IELTS/TOEFL), a statement of purpose, and letters of recommendation.",
    },
    {
      question: "How much does it cost to study in Australia?",
      answer:
        "Tuition fees for international students range from AUD 20,000 to AUD 45,000 per year, depending on the course and university. Living expenses are typically around AUD 20,000 to AUD 27,000 per year.",
    },
    {
      question:
        "What scholarships are available for international students in Australia?",
      answer:
        "Numerous scholarships are offered by the Australian government, universities, and private organizations, such as the Australia Awards, Destination Australia, and university-specific scholarships.",
    },
    {
      question: "Can international students work while studying in Australia?",
      answer:
        "Yes, international students can work up to 20 hours per week during the academic term and full-time during scheduled breaks.",
    },
    {
      question:
        "What are the best universities in Australia for international students?",
      answer:
        "Top universities include the University of Sydney, University of Melbourne, Australian National University (ANU), University of Queensland, and University of New South Wales (UNSW).",
    },
    {
      question:
        "What is the process for obtaining a student visa for Australia?",
      answer:
        "The process involves receiving a Confirmation of Enrollment (CoE) from an Australian institution, applying for the Student Visa (subclass 500) online, and providing required documents such as financial proof, health insurance, and English proficiency.",
    },
    {
      question:
        "What are the living arrangements for international students in Australia?",
      answer:
        "Options include on-campus accommodation, private rentals, home stays, and shared apartments. Each option varies in cost and amenities.",
    },
    {
      question:
        "How can I improve my English language skills before studying in Australia?",
      answer:
        "Many universities offer English language preparatory courses. Additionally, intensive English programs (ELICOS) are available to help improve language proficiency before starting academic studies.",
    },
    {
      question:
        "What support services are available for international students in Australia?",
      answer:
        "Universities provide extensive support services, including academic advising, counseling, career services, health services, and orientation programs.",
    },
    {
      question: "What are the post-study work opportunities in Australia?",
      answer:
        "Graduates can apply for the Temporary Graduate Visa (subclass 485), which allows them to work in Australia for up to 4 years, depending on their qualification level and field of study.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.us}>
        <div className={styles.c1}>
          <h3>Study in Australia</h3>
          <p>
            Studying in Australia offers students access to world-class
            education and cutting-edge research opportunities. Home to
            top-ranking universities like the University of Sydney and the
            University of Melbourne, Australia provides diverse course offerings
            in a dynamic, multicultural environment. International students
            benefit from high-quality teaching, excellent support services, and
            strong post-graduation work opportunities. Australia's stunning
            landscapes, vibrant cities, and high quality of life enhance the
            overall student experience. Additionally, the country's focus on
            innovation and practical skills ensures graduates are well-prepared
            for global careers. With a welcoming and inclusive society,
            Australia is an ideal destination for higher education.
          </p>
        </div>
        <Image
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "85vh",
            objectFit: "cover",
          }}
          src={us}
          alt="us"
        />
        <div className={styles.c2}>
          <h3>Why Study in Australia?</h3>
          <p>
            Studying in Australia offers numerous advantages for international
            students. Here are some compelling reasons to consider Australia as
            your study destination:
          </p>
          <ol>
            <li>
              World-Class Education: Australia is home to top-ranking
              universities known for their high academic standards and
              innovative research, such as the University of Sydney and the
              University of Melbourne.
            </li>
            <li>
              Diverse Course Offerings: Australian institutions provide a wide
              range of programs and disciplines, allowing students to find
              courses that match their interests and career goals.
            </li>
            <li>
              Multicultural Environment: Australia's diverse and inclusive
              society makes it a welcoming place for students from all
              backgrounds, promoting cultural exchange and global perspectives.
            </li>
            <li>
              Work Opportunities: Students can work part-time during their
              studies and have access to post-study work visas, enhancing their
              career prospects and financial stability.
            </li>
            <li>
              High Quality of Life: Australia boasts a high standard of living,
              excellent healthcare, and vibrant cities, making it an attractive
              place to live and study.
            </li>
            <li>
              Stunning Natural Beauty: From beaches and rainforests to deserts
              and mountains, Australia's diverse landscapes offer numerous
              opportunities for adventure and relaxation.
            </li>
            <li>
              Strong Support Services: Australian universities provide extensive
              support for international students, including academic assistance,
              career counseling, and personal support.
            </li>
            <li>
              Innovation and Practical Skills: Australia's focus on practical
              skills and innovation ensures that graduates are well-prepared for
              the global job market.
            </li>
          </ol>
          <p>
            Choosing to study in Australia ensures a high-quality education, a
            rich cultural experience, and strong career opportunities.
          </p>
        </div>
        <button>Download Destination Guide</button>
        <div className={styles.c4}>
          <h3>All you need for your Australia Dream</h3>
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
          <h3>Tests Required to Study in Australia</h3>
          <div>
            <Link href="/toefl">TOEFL</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/pte">PTE</Link>
            <Link href="/gmat">GMAT</Link>
          </div>
        </div>
        <button>Get FREE Counselling</button>
        <div className={styles.c4}>
          <h3>Top Courses to Study in Australia</h3>
          <ul>
            <li>Business Management</li>
            <li>Engineering</li>
            <li>Information Technology</li>
            <li>Medicine and Healthcare</li>
            <li>Environmental Sciences</li>
            <li>Law</li>
            <li>Education & Training</li>
            <li>Hospitality & Tourism Management</li>
            <li>Architecture and Design</li>
            <li>Agricultural Sciences</li>
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
          {australiaFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Aus;
