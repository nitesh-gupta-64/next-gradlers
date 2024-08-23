import React from "react";
import styles from "../US/US.module.css";
import us from "../../../public/assets/images/cann.jpg";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const Can = () => {
  const canadaFaqs = [
    {
      question: "Why should I choose Canada for higher education?",
      answer:
        "Canada offers high-quality education, affordable tuition fees, a multicultural environment, and strong research opportunities. Canadian universities are globally recognized and have a reputation for academic excellence.",
    },
    {
      question: "What are the general admission requirements?",
      answer: (
        <>
          • High school diploma or equivalent for undergraduate programs.
          <br />
          • Bachelor's degree for graduate programs.
          <br />
          • Proof of English or French language proficiency.
          <br />• Specific program requirements (e.g., portfolio for arts
          programs, GRE/GMAT for certain graduate programs).
        </>
      ),
    },
    {
      question: "How do I apply to Canadian universities?",
      answer: (
        <>
          • Research universities and programs.
          <br />
          • Check admission requirements and deadlines.
          <br />
          • Prepare and submit your application, which typically includes
          transcripts, a statement of purpose, recommendation letters, and proof
          of language proficiency (e.g., IELTS, TOEFL).
          <br />• Pay application fees.
        </>
      ),
    },
    {
      question:
        "Do I need to take standardized tests like the SAT, GRE, or GMAT?",
      answer:
        "It depends on the university and program. Some undergraduate programs may require the SAT, while certain graduate programs might require the GRE or GMAT.",
    },
    {
      question: "What are the language test requirements?",
      answer:
        "Most universities require proof of English proficiency for non-native speakers, typically through tests like IELTS or TOEFL. Some programs may also require French proficiency if the instruction is in French.",
    },
    {
      question: "What are the minimum required scores for language tests?",
      answer:
        "Minimum scores vary by institution and program. Generally, IELTS scores range from 6.0 to 7.5, and TOEFL scores range from 80 to 100.",
    },
    {
      question: "How much does it cost to study in Canada?",
      answer:
        "Tuition fees vary widely depending on the program and institution. On average, undergraduate programs cost between CAD 15,000 and CAD 30,000 per year, while graduate programs can range from CAD 10,000 to CAD 25,000 per year.",
    },
    {
      question: "Are there scholarships or financial aid available?",
      answer:
        "Yes, many Canadian universities offer scholarships, grants, and bursaries to international students. Additionally, you can explore government scholarships and external funding opportunities.",
    },
    {
      question: "Do I need a student visa to study in Canada?",
      answer:
        "Yes, international students need a study permit to study in Canada. You may also need a temporary resident visa or an electronic travel authorization (eTA), depending on your country of origin.",
    },
    {
      question: "How do I apply for a study permit?",
      answer: (
        <>
          • Receive an acceptance letter from a designated learning institution
          (DLI).
          <br />
          • Apply online for a study permit through the Immigration, Refugees
          and Citizenship Canada (IRCC) website.
          <br />• Provide necessary documents, such as proof of acceptance,
          proof of identity, and proof of financial support.
        </>
      ),
    },
    {
      question: "What is the cost of living in Canada?",
      answer:
        "The cost of living varies by city. On average, students can expect to spend CAD 10,000 to CAD 15,000 per year on accommodation, food, transportation, and other living expenses.",
    },
    {
      question: "Can I work while studying?",
      answer:
        "Yes, international students with a valid study permit can work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks.",
    },
    {
      question: "Can I stay in Canada after graduation?",
      answer:
        "Yes, you may be eligible for a Post-Graduation Work Permit (PGWP), which allows you to work in Canada for up to three years after graduation. This can be a pathway to permanent residency.",
    },
    {
      question: "How do I apply for a Post-Graduation Work Permit (PGWP)?",
      answer: (
        <>
          • Apply within 180 days of receiving confirmation that you’ve
          completed your program.
          <br />• Provide necessary documents, including proof of program
          completion and a valid passport.
        </>
      ),
    },
    {
      question: "Do I need health insurance?",
      answer:
        "Yes, health insurance is mandatory for international students in Canada. Some provinces offer health coverage to international students, while others require you to purchase private insurance.",
    },
    {
      question: "What is student life like in Canada?",
      answer:
        "Canadian universities offer a vibrant campus life with various clubs, societies, and events. Students can enjoy cultural diversity, outdoor activities, and a safe, welcoming environment.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.us}>
        <div className={styles.c1}>
          <h3>Study in Canada</h3>
          <p>
            Studying in Canada offers students a world-class education in a
            diverse and inclusive environment. Renowned for its high academic
            standards and innovative research opportunities, Canada is home to
            numerous top-ranked universities and colleges. Students benefit from
            a multicultural society, safe cities, and a high quality of life.
            Additionally, Canada provides excellent work opportunities during
            and after studies, making it easier for graduates to transition into
            the workforce. With stunning natural landscapes and vibrant urban
            centers, Canada is an ideal destination for international students
            seeking both academic excellence and a memorable cultural
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
          <h3>Why Study in Canada?</h3>
          <p>
            Studying in Canada offers numerous advantages for international
            students. Some compelling reasons for studying in Canada are
          </p>
          <ol>
            <li>
              High-Quality Education: Canadian universities and colleges are
              renowned for their rigorous academic standards and cutting-edge
              research opportunities.
            </li>
            <li>
              Diverse and Inclusive Society: Canada is known for its
              multiculturalism, welcoming students from all backgrounds and
              fostering an inclusive environment.
            </li>
            <li>
              Safety and Quality of Life: With low crime rates and high living
              standards, Canada is considered one of the safest and most livable
              countries.
            </li>
            <li>
              Work Opportunities: International students can work part-time
              during their studies and have access to post-graduation work
              permits, enhancing their career prospects.
            </li>
            <li>
              Affordable Education: Tuition fees in Canada are generally lower
              than in other popular study destinations like the United States
              and the United Kingdom.
            </li>
            <li>
              Pathway to Permanent Residency: Canada offers pathways for
              international students to become permanent residents, making it
              easier to settle in the country after graduation.
            </li>
            <li>
              Breathtaking Natural Beauty: From mountains and forests to lakes
              and coastlines, Canada's stunning landscapes provide endless
              opportunities for outdoor activities and exploration.
            </li>
          </ol>
        </div>
        <button>Download Destination Guide</button>
        <div className={styles.c2}>
          <p>How do we make your Dream a Reality</p>
          <ol>
            <li>
              Discover Your Edge: <br /> We help you identify what makes you
              truly unique and sets you apart <br /> from other applicants.
            </li>
            <li>
              Rise to the Challenge: <br /> We guide you through a personalized
              journey of continuous improvement, <br /> pushing your boundaries
              and maximizing your potential.
            </li>
            <li>
              Navigate the Path to Success: <br /> With our insider knowledge of
              international admissions, we equip you with <br /> the tools and
              strategies to gain acceptance into the world's top universities.
            </li>
          </ol>
        </div>
        <button>Connect to Expert</button>
        <div className={styles.c3}>
          <h3>Tests Required to Study in Canaada</h3>
          <div>
            <Link href="/toefl">TOEFL</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/pte">PTE</Link>
            <Link href="/gre">GRE</Link>
            <Link href="/sat">SAT</Link>
            <Link href="/gmat">GMAT</Link>
          </div>
        </div>
        <button>Get FREE Counselling</button>
        <div className={styles.c4}>
          <h3>All you need for your Canada Dream</h3>
          <ul>
            <li>Personalized Counselling</li>
            <li>Test-Prep Coaching</li>
            <li>University Selection & Admission</li>
            <li>Visa Support</li>
            <li>Pre-departure Orientation</li>
          </ul>
        </div>
        <div className={styles.c4}>
          <h3>Top Courses to Study in Canada</h3>
          <ul>
            <li>Computer Science and Information Technology</li>
            <li>Business and Management</li>
            <li>Engineering</li>
            <li>Health and Medicine</li>
            <li>Natural Sciences</li>
            <li>Social Sciences and Humanities</li>
            <li>Art and Design</li>
            <li>Hospitality and Tourism Management</li>
            <li>Media and Communication</li>
            <li>Education</li>
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
          {canadaFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Can;
