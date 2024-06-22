import React from "react";
import styles from "./US.module.css";
import us from "../../../public/assets/images/uss.png";
import Image from "next/image";
import AdmitContainer from "../AdmitContainer/AdmitContainer";

const US = () => {
  const data = [
    { course: "Undergraduate course tuition fees", fee: "$15,000 to $35,000" },
    { course: "Postgraduate courses cost", fee: "$7000 to $30,000" },
    { course: "Doctoral Degree", fee: "$25,000 to $45,000" },
  ];

  return (
    <div className={styles.us}>
      <div className={styles.c1}>
        <h3>Study in USA</h3>
        <p>
          The United States of America is undoubtedly the No.1 study abroad
          destination for international students. What makes it the holy grail
          of higher education is quality education, globally ranked
          universities, thrilling campus life, vast opportunities, etc. It is
          home to 48 of the world{"'"}s top 100 universities and is also a go-to
          destination in terms of job opportunities and a growth environment.
          India makes up about 20% of all international students, making it one
          of the largest contributors.
        </p>
      </div>
      <Image style={{ width: "100vw", height: "auto" }} src={us} alt="us" />
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
        <p>
          So, what draws Indian and other international students to the USA?
        </p>
        <ul>
          <li>Top ranked universities</li>
          <li>Scholarships & grants</li>
          <li>Access to Internships</li>
          <li>Diversity & Flexibility</li>
          <li>Student satisfaction</li>
          <li>Employability</li>
        </ul>
      </div>
      <button>Download Destination Guide</button>
      <div className={styles.c2}>
        <p>All you need for your USA Dream</p>
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
        <h3>Tests Required to Study in USA</h3>
        <div>
          <p>TOEFL</p>
          <p>IELTS</p>
          <p>DET</p>
          <p>GRE</p>
          <p>SAT</p>
          <p>GMAT</p>
        </div>
      </div>
      <button>Get FREE Counselling</button>
      <div className={styles.c4}>
        <h3>Top Courses to Study in USA</h3>
        <ul>
          <li>Computer Sciences & IT</li>
          <li>Business Analytics</li>
          <li>Economics</li>
          <li>Engineering</li>
          <li>MBA</li>
          <li>Law</li>
          <li>Medicine & Healthcare</li>
          <li>Social Sciences</li>
        </ul>
      </div>
      <button>Speek to Expert</button>
      <div className={styles.c5}>
        <div className={styles.c4}>
          <h3>Top Admits 2023- UG & PG</h3>
        </div>
        <AdmitContainer />
      </div>
      <div className={styles.c6}>
        <h3>Frequently Asked Questions (FAQs)</h3>
        <p>
          What is USA Student Visa Validity? <br /> USA student visa F1 has a
          validity of 5 years. As specified on the I-20 form, a student{"'"}s
          residency status in USA remains valid during their entire study
          period.
        </p>
        <p>
          Is USA expensive for Indian students? <br /> The tuition fee in USA is
          expensive compared to other countries. The tuition fee changes from
          university to university. The USA tuition fee ranges from $10,000 to
          $70,000 per year. The average cost of study in USA is approximately
          $35,000 per year. Courses like Medicine, Engineering, and Business
          Management are costly compared to those of Arts, Education, and
          Humanities. The cost of study in USA purely depends upon the subject
          and university.
        </p>
        <p>
          What is the minimum IELTS score required to study in the US? <br /> It
          is a must to clear the IELTS with a minimum score of 6.5 or above to
          get admission to US universities. To fill out the admission form, at
          least a 6.5 band score is needed.
        </p>
      </div>
      <div className={styles.c2}>
        <p>How much does it cost for an Indian to study in the US?</p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.courseTable}>
          <thead>
            <tr>
              <th>Course</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.course}</td>
                <td>{row.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.c6}>
        <p>
          The fee structure varies between private and public universities.
          Compared to public universities, private universities charge high
          tuition fees. Also, the cost of living in USA ranges from $500 to
          $1500 per month, depending upon your lifestyle.
        </p>
        <p>
          Are International students permitted to work on a student Visa? <br />{" "}
          Yes, international students are allowed to work in the USA while
          studying. There are some limits to follow. M-1 and F-1 visa holders
          can work on-campus during their training programs. In the 1st year of
          their study, they are not allowed to work outside of the
          college/university.
        </p>
      </div>
      <div className={styles.c7}>
        <p>
          What are the requirements for a US Student Visa? <br />
          The US Student Visa requires submission of mandatory documents as well
          as supporting documents of academic and financial records. The
          following documents will be required:
        </p>
        <ul>
          <li>
            A Passport that has a validity of minimum 6 months after your stay
            in the US
          </li>
          <li>Print out of the online application form DS -160</li>
          <li>Original and copy of the appointment letter for the interview</li>
          <li>
            Form I – 20 sent by the US University/College where you will study
          </li>
          <li>A confirmation receipt for payment of Visa fees</li>
          <li>
            Bank statement for a minimum of 3 years that show adequate funds for
            paying for the first year (can be of parent/guardian)
          </li>
          <li>Payslips</li>
          <li>Original Marks sheet or Provisional certificates</li>
          <li>Score sheet of exams like IELTS, GMAT, TOEFL, etc.</li>
        </ul>
      </div>
      <div className={styles.c6}>
        <p>
          How to prepare for USA student visa interview questions? <br />
          Answer all questions honestly. Maintain professionalism and
          punctuation while answering. You must answer the visa interview
          questions confidently to qualify for an F-1 Student Visa. The US Visa
          interview questions are framed to test your communication skills and
          your academic knowledge. The common questions include: Why are you
          going to the United States? Tell me about your specialization,
          schooling, and other inquiries related to your academics.
        </p>
        <p>
          Is it possible for me to change universities or schools once I arrive
          in the US on a student visa? <br />
          Once you have arrived in the United States, you’ll be subject to the
          rules of the US Citizenship and Immigration Services. As a result, you
          are unable to move schools before finishing a year there. It is
          recommended that you consider your options thoroughly to avoid
          complications later.
        </p>
      </div>
    </div>
  );
};

export default US;
