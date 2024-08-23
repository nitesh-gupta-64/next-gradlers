import React from "react";
import styles from "./US.module.css";
import us from "../../../public/assets/images/uss.png";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";
import Script from "next/script";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
import Sidebar from "../Sidebar/Sidebar";
import mba1 from "../../../public/assets/images/mba1.png";
import mba2 from "../../../public/assets/images/mba2.png";
import mba3 from "../../../public/assets/images/mba3.png";
import mba4 from "../../../public/assets/images/mba4.png";
import mba5 from "../../../public/assets/images/mba5.png";
import mba6 from "../../../public/assets/images/mba6.png";
import HeadDescriptor from "../HeadDescriptor/HeadDescriptor";
import Descriptor from "../Descriptor/Descriptor";
import SmlDesc from "../SmlDesc/SmlDesc";
import BlueDescriptor from "../BlueDescriptor/BlueDescriptor";

const US = () => {
  const data = [
    { course: "Undergraduate course tuition fees", fee: "$15,000 to $35,000" },
    { course: "Postgraduate courses cost", fee: "$7000 to $30,000" },
    { course: "Doctoral Degree", fee: "$25,000 to $45,000" },
  ];
  const faqs = [
    {
      question: "What is USA Student Visa Validity?",
      answer:
        "USA student visa F1 has a validity of 5 years. As specified on the I-20 form, a student's residency status in USA remains valid during their entire study period.",
    },
    {
      question: "Is USA expensive for Indian students?",
      answer:
        "The tuition fee in USA is expensive compared to other countries. The tuition fee changes from university to university. The USA tuition fee ranges from $10,000 to $70,000 per year. The average cost of study in USA is approximately $35,000 per year. Courses like Medicine, Engineering, and Business Management are costly compared to those of Arts, Education, and Humanities. The cost of study in USA purely depends upon the subject and university.",
    },
    {
      question: "What is the minimum IELTS score required to study in the US?",
      answer:
        "It is a must to clear the IELTS with a minimum score of 6.5 or above to get admission to US universities. To fill out the admission form, at least a 6.5 band score is needed.",
    },
    {
      question: "How much does it cost for an Indian to study in the US?",
      answer:
        "The cost structure is as follows:\n\nCourse\tFee\nUndergraduate course tuition fees\t$15,000 to $35,000\nPostgraduate courses cost\t$7000 to $30,000\nDoctoral Degree\t$25,000 to $45,000\n\nThe fee structure varies between private and public universities. Compared to public universities, private universities charge high tuition fees. Also, the cost of living in USA ranges from $500 to $1500 per month, depending upon your lifestyle.",
    },
    {
      question:
        "Are International students permitted to work on a student Visa?",
      answer:
        "Yes, international students are allowed to work in the USA while studying. There are some limits to follow. M-1 and F-1 visa holders can work on-campus during their training programs. In the 1st year of their study, they are not allowed to work outside of the college/university.",
    },
    {
      question: "What are the requirements for a US Student Visa?",
      answer:
        "The US Student Visa requires submission of mandatory documents as well as supporting documents of academic and financial records. The following documents will be required:\n\n- A Passport that has a validity of minimum 6 months after your stay in the US\n- Print out of the online application form DS -160\n- Original and copy of the appointment letter for the interview\n- Form I – 20 sent by the US University/College where you will study\n- A confirmation receipt for payment of Visa fees\n- Bank statement for a minimum of 3 years that show adequate funds for paying for the first year (can be of parent/guardian)\n- Payslips\n- Original Marks sheet or Provisional certificates\n- Score sheet of exams like IELTS, GMAT, TOEFL, etc.",
    },
    {
      question: "How to prepare for USA student visa interview questions?",
      answer:
        "Answer all questions honestly. Maintain professionalism and punctuality while answering. You must answer the visa interview questions confidently to qualify for an F-1 Student Visa. The US Visa interview questions are framed to test your communication skills and your academic knowledge. The common questions include: Why are you going to the United States? Tell me about your specialization, schooling, and other inquiries related to your academics.",
    },
    {
      question:
        "Is it possible for me to change universities or schools once I arrive in the US on a student visa?",
      answer:
        "Once you have arrived in the United States, you’ll be subject to the rules of the US Citizenship and Immigration Services. As a result, you are unable to move schools before finishing a year there. It is recommended that you consider your options thoroughly to avoid complications later.",
    },
  ];

  return (
    <div className="flexx" style={{ display: "flex", width: "100%" }}>
      <div className={styles.us}>
        <div className={styles.c1}>
          <h3>Study in USA</h3>
          <p>
            The United States of America is undoubtedly the No.1 study abroad
            destination for international students. What makes it the holy grail
            of higher education is quality education, globally ranked
            universities, thrilling campus life, vast opportunities, etc. It is
            home to 48 of the world{"'"}s top 100 universities and is also a
            go-to destination in terms of job opportunities and a growth
            environment. India makes up about 20% of all international students,
            making it one of the largest contributors.
          </p>
        </div>
        <Image style={{ width: "90%", height: "auto" }} src={us} alt="us" />
        <div className={styles.c2}>
          <h3>Why Study in USA?</h3>
          <p>
            USA is the world{"'"}s leading destination for education and it
            attracts more than 1 million international students every year from
            different parts of the world in pursuit of quality higher education
            and great career scope. Since 2021 Indian students have been leading
            the wagon and have received 1 in 4 USA F-1 visa granted to
            international students globally in 2023.
          </p>
          <h2>
            So, what draws Indian and other international students to the USA?
          </h2>
          <section>
            <Descriptor imag={mba1}>Top ranked universities</Descriptor>
            <Descriptor imag={mba2}>Scholarships & grants</Descriptor>
            <Descriptor imag={mba3}>Access to Internships</Descriptor>
            <Descriptor imag={mba4}>Diversity & Flexibility</Descriptor>
            <Descriptor imag={mba5}>Student satisfaction</Descriptor>
            <Descriptor imag={mba6}>Employability</Descriptor>
          </section>
        </div>
        <button>Download Destination Guide</button>
        <div className={styles.c2}>
          <h2>How do we make your Dream a Reality</h2>
          <section>
            <HeadDescriptor imag={mba1} head={"Discover Your Edge:"}>
              We help you identify what makes you truly unique and sets you
              apart from other applicants.
            </HeadDescriptor>
            <HeadDescriptor imag={mba2} head={"Rise to the Challenge:"}>
              We guide you through a personalized journey of continuous
              improvement, pushing your boundaries and maximizing your
              potential.
            </HeadDescriptor>
            <HeadDescriptor imag={mba3} head={"Navigate the Path to Success:"}>
              With our insider knowledge of international admissions, we equip
              you with the tools and strategies to gain acceptance into the
              world's top universities.
            </HeadDescriptor>
          </section>
        </div>
        <button>Connect to Expert</button>
        <div className={styles.c2}>
          <h2>Tests Required to Study in USA</h2>
          <section>
            <SmlDesc imag={mba1}>TOEFL</SmlDesc>
            <SmlDesc imag={mba2}>IELTS</SmlDesc>
            <SmlDesc imag={mba3}>PTE</SmlDesc>
            <SmlDesc imag={mba4}>GRE</SmlDesc>
            <SmlDesc imag={mba5}>SAT</SmlDesc>
            <SmlDesc imag={mba6}>GMAT</SmlDesc>
          </section>
        </div>
        <button>Get FREE Counselling</button>
        <div className={styles.c2}>
          <h2>Top Courses to Study in USA</h2>
          <section>
            <BlueDescriptor imag={mba1}>Computer Sciences & IT</BlueDescriptor>
            <BlueDescriptor imag={mba2}>Business Analytics</BlueDescriptor>
            <BlueDescriptor imag={mba3}>Economics</BlueDescriptor>
            <BlueDescriptor imag={mba4}>Engineering</BlueDescriptor>
            <BlueDescriptor imag={mba5}>MBA</BlueDescriptor>
            <BlueDescriptor imag={mba6}>Law</BlueDescriptor>
            <BlueDescriptor imag={mba2}>Medicine & Healthcare</BlueDescriptor>
            <BlueDescriptor imag={mba1}>Social Sciences</BlueDescriptor>
          </section>
        </div>
        <button>Speak to Expert</button>
        <div className={styles.c5}>
          <div className={styles.c4}>
            <h3>Top Admits 2023- UG & PG</h3>
          </div>
          <AdmitContainer />
          <div className={styles.c2}>
            <h2>Why Choose GRADLERS?</h2>
            <section style={{ listStyleType: "square" }}>
              <Descriptor imag={mba1}>One Stop Shop</Descriptor>
              <Descriptor imag={mba2}>Speed & Accuracy</Descriptor>
              <Descriptor imag={mba3}>Quality Guidance</Descriptor>
              <Descriptor imag={mba4}>Transparent Processing</Descriptor>
              <Descriptor imag={mba5}>
                Top Admits & Proven Admission Success
              </Descriptor>
              <Descriptor imag={mba6}>Top Admission Advisors</Descriptor>
            </section>
          </div>
        </div>
        <button
          type="button"
          className="npfWidgetButton npfWidget-126126f4ca07e7566448375bd97faeee"
        >
          Enquire Now!
        </button>

        <div className={styles.c6}>
          <h3>Frequently Asked Questions (FAQs)</h3>
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Sidebar />

      <Script src="https://in8cdn.npfs.co/js/widget/npfwpopup.js"></Script>
      <Script id="popup-widget-init" strategy="lazyOnload">
        {`
          let npfW126126f4ca07e7566448375bd97faeee = new NpfWidgetsInit({
              "widgetId":"126126f4ca07e7566448375bd97faeee",
              "baseUrl":"widgets.in8.nopaperforms.com",
              "formTitle":"Enquiry Form",
              "titleColor":"#FF0033",
              "backgroundColor":"#ddd",
              "iframeHeight":"500px",
              "buttonbgColor":"#4c79dc",
              "buttonTextColor":"#FFF"
          });
        `}
      </Script>

    </div>
  );
};

export default US;
