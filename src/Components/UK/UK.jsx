import React from "react";
import styles from "../US/US.module.css";
import us from "../../../public/assets/images/london.jpg";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";

const UK = () => {
  const ukFaqs = [
    {
      question: "Why should I study in the UK?",
      answer:
        "The UK offers world-class education, a diverse cultural experience, a wide range of courses, and strong employment prospects. The country is home to some of the world's top universities and has a long-standing reputation for academic excellence.",
    },
    {
      question: "How do I apply to UK universities?",
      answer:
        "For undergraduate courses, applications are typically made through UCAS (Universities and Colleges Admissions Service). For postgraduate courses, applications are usually made directly to the universities. Each university has specific entry requirements and deadlines.",
    },
    {
      question: "What are the entry requirements?",
      answer: (
        <>
          Entry requirements vary by course and university. Generally, they
          include:
          <br />
          • Academic qualifications (A-levels, IB, or equivalent for
          undergraduates; bachelor's degree for postgraduates)
          <br />
          • English language proficiency (e.g., IELTS, TOEFL)
          <br />
          • Personal statement
          <br />
          • Reference letters
          <br />• Sometimes additional tests (e.g., GMAT for MBA)
        </>
      ),
    },
    {
      question: "What is the cost of studying in the UK?",
      answer: (
        <>
          Tuition fees vary depending on the course and institution. For
          international students, undergraduate fees typically range from
          £10,000 to £38,000 per year, and postgraduate fees range from £11,000
          to over £40,000 per year. Living costs vary by location, with an
          average range of £12,000 to £15,000 per year.
        </>
      ),
    },
    {
      question: "Are there scholarships available?",
      answer: (
        <>
          Yes, many scholarships are available for international students,
          including:
          <br />
          • Government-funded scholarships (e.g., Chevening Scholarships,
          Commonwealth Scholarships)
          <br />
          • University-specific scholarships and bursaries
          <br />• External scholarships from organizations like the British
          Council
        </>
      ),
    },
    {
      question: "Do I need a student visa to study in the UK?",
      answer:
        "Yes, if you are an international student from outside the UK, you will need a student visa. The most common is the Tier 4 (General) Student Visa for courses longer than six months. Short-term study visas are available for shorter courses.",
    },
    {
      question: "Can I work while studying?",
      answer:
        "Yes, international students on a Tier 4 visa can work up to 20 hours per week during term time and full-time during holidays. Certain restrictions apply, and it's important to check your visa conditions.",
    },
    {
      question: "What is the Graduate Route visa?",
      answer:
        "The Graduate Route allows international students to stay in the UK for two years (three years for PhD graduates) after completing their studies to work or look for work. It provides a great opportunity to gain work experience in the UK.",
    },
    {
      question:
        "What support services are available for international students?",
      answer: (
        <>
          UK universities offer a range of support services, including:
          <br />
          • Academic support (tutoring, libraries, writing centers)
          <br />
          • Career services (job placements, career counseling)
          <br />
          • Health and counseling services
          <br />
          • Accommodation support
          <br />• International student offices providing visa and immigration
          advice
        </>
      ),
    },
    {
      question: "What is student life like in the UK?",
      answer:
        "Student life in the UK is vibrant and diverse. Universities have active student unions, clubs, and societies. You can participate in a wide range of extracurricular activities, cultural events, sports, and social gatherings. The UK’s cities offer rich cultural experiences, historical sites, and vibrant nightlife.",
    },
    {
      question: "How do I find accommodation?",
      answer:
        "Universities often provide on-campus accommodation in halls of residence, especially for first-year students. You can also opt for private rented accommodation, shared houses, or student apartments. University accommodation offices can help with finding suitable housing.",
    },
    {
      question: "How has Brexit affected EU students?",
      answer:
        "Brexit has brought changes for EU students, including new visa requirements and changes in tuition fee status. EU students starting courses after January 1, 2021, are no longer eligible for home fee status and must pay international tuition fees. They also need to apply for a student visa.",
    },
    {
      question: "How do I improve my English before studying?",
      answer:
        "If you need to improve your English proficiency, many UK universities offer pre-sessional English courses. There are also numerous language schools in the UK offering intensive English language programs.",
    },
    {
      question: "What is the UCAS application process?",
      answer: (
        <>
          For undergraduate courses, you apply through UCAS. You can apply to up
          to five courses. The application includes personal details, academic
          qualifications, a personal statement, and a reference letter. You also
          need to pay an application fee. Deadlines vary but are usually in
          January for most courses starting in the autumn.
        </>
      ),
    },
    {
      question:
        "Can I transfer credits from my home country to a UK university?",
      answer:
        "Credit transfer policies vary by university and course. It’s best to contact the admissions office of the university you are interested in to discuss your specific situation and find out if your credits can be transferred.",
    },
  ];

  return (
    <div className="flexx">
      <div className={styles.us}>
        <div className={styles.c1}>
          <h3>Study in UK</h3>
          <p>
            Studying in the UK offers students access to world-renowned
            universities, rich academic traditions, and innovative research
            opportunities. The UK is home to prestigious institutions like
            Oxford, Cambridge, and Imperial College London, providing top-tier
            education and global recognition. With diverse course offerings,
            students can pursue various disciplines tailored to their interests
            and career goals. The UK's vibrant cultural scene, historic
            landmarks, and cosmopolitan cities enhance the overall student
            experience. Additionally, the UK offers excellent networking
            opportunities, connecting students with industry leaders and
            professionals. For those seeking a high-quality education in a
            dynamic and culturally rich environment, the UK is an ideal choice.
          </p>
        </div>
        <Image
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "95vh",
            objectFit: "cover",
          }}
          src={us}
          alt="us"
        />
        <div className={styles.c2}>
          <h3>Why Study in UK?</h3>
          <p>
            Studying in the UK offers plethora of benefits for international
            students. Here are some key reasons to consider the UK as your study
            destination:
          </p>
          <ol>
            <li>
              World-Class Education: The UK is home to prestigious universities
              like Oxford, Cambridge, and the London School of Economics,
              renowned for their academic excellence and cutting-edge research.
            </li>
            <li>
              Diverse Range of Courses: With thousands of courses available
              across various disciplines, students can find programs that
              perfectly match their interests and career aspirations.
            </li>
            <li>
              Shorter Course Duration: Many undergraduate degrees in the UK take
              only three years to complete and master’s programs typically last
              one year, saving both time and money.
            </li>
            <li>
              Cultural Richness: The UK boasts a rich cultural heritage, with
              historic landmarks, museums, theaters, and a vibrant arts scene,
              offering a well-rounded cultural experience.
            </li>
            <li>
              Global Recognition: A UK degree is highly respected worldwide,
              enhancing employability and opening doors to international career
              opportunities.
            </li>
            <li>
              Language Proficiency: Studying in an English-speaking country
              helps improve language skills, which is an invaluable asset in the
              global job market.
            </li>
            <li>
              Networking Opportunities: The UK’s diverse student population and
              strong industry links provide excellent opportunities for
              networking and professional growth.
            </li>
            <li>
              Supportive Environment: UK universities offer extensive support
              services for international students, including academic
              assistance, career guidance, and personal support.
            </li>
          </ol>
          <p>
            Choosing to study in the UK ensures a high-quality education,
            cultural enrichment, and strong career prospects.
          </p>
        </div>
        <button>Download Destination Guide</button>
        <div className={styles.c4}>
          <h3>All you need for your UK Dream</h3>
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
          <h3>Tests Required to Study in UK</h3>
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
          <h3>Top Courses to Study in UK</h3>
          <ul>
            <li>Business and Management</li>
            <li>Engineering and Technology</li>
            <li>Medicine and Health Sciences</li>
            <li>Law</li>
            <li>Arts and Humanities</li>
            <li>Social Sciences</li>
            <li>Natural Sciences</li>
            <li>Media and Communication</li>
            <li>Education</li>
            <li>Architecture</li>
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
          {ukFaqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default UK;
