"use client";
import React from "react";
import styles from "./NewUsa.module.css";
import countryImg from "@/../public/gradlers/Harvard university usa (2).jpg";
import flag from "@/../public/assets/images/usa.png";
import CountriesPage from "../CountriesPage/CountriesPage";

const NewUsa = () => {
  const mainDesc = `The United States of America is undoubtedly the No.1 study abroad
        destination for international students. What makes it the holy grail of
        higher education is quality education, globally ranked universities,
        thrilling campus life, vast opportunities, etc. It is home to 48 of the
        world's top 100 universities and is also a go-to destination in terms of
        job opportunities and a growth environment. India makes up about 20% of
        all international students, making it one of the largest contributors.`;

  const why = {
    desc: "USA is the world's leading destination for education and it attracts more than 1 million international students every year from different parts of the world in pursuit of quality higher education and great career scope. Since 2021 Indian students have been leading the wagon and have received 1 in 4 USA F-1 visa granted to international students globally in 2023.",
    card: [
      {
        Image: "/whyc1.png",
        Description: "Top ranked universities",
      },
      {
        Image: "/whyc2.png",
        Description: "Scholarships & grants",
      },
      {
        Image: "/whyc3.png",
        Description: "Access to Internships",
      },
      {
        Image: "/whyc4.png",
        Description: "Diversity & Flexibility",
      },
      {
        Image: "/whyc5.png",
        Description: "Student satisfaction",
      },
      {
        Image: "/whyc6.png",
        Description: "Employability",
      },
    ],
  };

  const how = [
    {
      Image: "/how1.png",
      Heading: "Discover Your Edge",
      Description:
        "We help you identify what makes you truly unique and sets you apart from other applicants.",
    },
    {
      Image: "/how2.png",
      Heading: "Rise to the Challenge",
      Description:
        "We guide you through a personalized journey of continuous improvement, pushing your boundaries and maximizing your potential.",
    },
    {
      Image: "/how3.png",
      Heading: "Navigate the Path to Success",
      Description:
        "With our insider knowledge of international admissions, we equip you with the tools and strategies to gain acceptance into the world's top universities.",
    },
  ];

  const tests = ["TOEFL", "IELTS", "PTE", "GMAT", "SAT", "GRE"];

  const top = [
    {
      Image: "/top1.png",
      Heading: "Computer Sciences & IT",
    },
    {
      Image: "/top2.png",
      Heading: "Engineering",
    },
    {
      Image: "/top3.png",
      Heading: "Economics",
    },
    {
      Image: "/top4.png",
      Heading: "Business Analytics",
    },
    {
      Image: "/top5.png",
      Heading: "MBA",
    },
    {
      Image: "/top6.png",
      Heading: "Medicine & Healthcare",
    },
    {
      Image: "/top7.png",
      Heading: "Social Sciences",
    },
    {
      Image: "/top8.png",
      Heading: "Law",
    },
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
    <CountriesPage
      img={countryImg}
      country="USA"
      mainDesc={mainDesc}
      why={why}
      how={how}
      tests={tests}
      flag={flag}
      top={top}
      faqs={faqs}
    />
  );
};

export default NewUsa;
