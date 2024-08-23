import React from "react";
import countryImg from "@/../public/gradlers/University College Dublin, ireland.jpg";
import flag from "@/../public/assets/images/ireland.png";
import CountriesPage from "./CountriesPage/CountriesPage";

const NewIreland = () => {
  const mainDesc = `Ireland welcomes international students to pursue graduate, postgraduate, and master's degrees and other specializations. It is the hub of many of the best universities in the world. Ireland study visa is issued for international students seeking to study there. The country has over 96% of student visa success rate. Studying in Ireland offers not only high-quality education but also a culturally enriching experience in a welcoming environment, with ample opportunities for personal growth and career development.`;

  const why = {
    desc: "Irish universities are well-known for their research capabilities, and your credentials will likely be recognized almost anywhere in the world. Many universities also provide internship opportunities to help students acquire practical experience in their field of study. Below are the reasons why one should consider studying in Ireland",
    card: [
      {
        Image: "/whyc1.png",
        Description: "Quality Education",
      },
      {
        Image: "/whyc2.png",
        Description: "Scholarship Opportunities",
      },
      {
        Image: "/whyc3.png",
        Description: "Gateway to Europe",
      },
      {
        Image: "/whyc4.png",
        Description: "Wide range of Programs",
      },
      {
        Image: "/whyc5.png",
        Description: "Strong Economy and Job Opportunities",
      },
      {
        Image: "/whyc6.png",
        Description: "Cultural Diversity and Travel Opportunities",
      },
      {
        Image: "/whyc1.png",
        Description: "Research and Innovation",
      },
      {
        Image: "/whyc2.png",
        Description: "English-Speaking Environment",
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

  const tests = ["TOEFL", "IELTS", "PTE", "Duolingo"];

  const top = [
    {
      Image: "/top1.png",
      Heading: "Artificial intelligence",
    },
    {
      Image: "/top2.png",
      Heading: "Cloud computing ",
    },
    {
      Image: "/top3.png",
      Heading: "Data Science",
    },
    {
      Image: "/top4.png",
      Heading: "Data analytics ",
    },
    {
      Image: "/top5.png",
      Heading: "Computer science",
    },
    {
      Image: "/top6.png",
      Heading: "Cyber Security",
    },
    {
      Image: "/top7.png",
      Heading: "Pharmaceuticals",
    },
    {
      Image: "/top8.png",
      Heading: "Business Analytics",
    },
    {
      Image: "/top1.png",
      Heading: "Accounting and Finance",
    },
    {
      Image: "/top2.png",
      Heading: "Digital marketing",
    },
  ];

  const faqs = [
    {
      question: "What are the Ireland student visa types?",
      answer:
        "There are 2 types of student visas available in Ireland:\n\n- **Type C Visa**: Also known as short-stay C Visa, granted for a short period of 90 days. It is allotted for short-duration professional training programs in Ireland. Type C Visa holders are not allowed to work during their training period.\n\n- **Type D Visa**: This visa is for an extended stay of more than three months. If your course duration is over 3 months, you can opt for a Type D visa. It is possible to extend the visa based on the course duration. International students are permitted to work while studying with this visa.",
    },
    {
      question: "Can I work in Ireland with a student visa?",
      answer:
        "Non-EEA students are granted Stamp 2 permission, allowing them to work 20 hours a week during their course and up to 40 hours per week during holidays. Non-EU/EEA postgraduate students working on their thesis and examinations can work up to 20 hours a week, even during summer holidays.",
    },
    {
      question: "Is Ireland good for Indian students?",
      answer:
        "Ireland is an ideal option for Indian students, offering high-quality education, advanced infrastructure, experienced professors, and a modern course curriculum. There are also good post-study work opportunities, especially with the 1-year Master’s program, which helps enhance career prospects.",
    },
    {
      question: "Can I get PR in Ireland after study?",
      answer:
        "Non-EU and non-EEA citizens are allowed to work for 2 years in Ireland with Irish General Work Permits. After securing a job, students can apply for an extension of their work permit. After completing 5 years of stay in Ireland, one can apply for Permanent Residency (PR).",
    },
    {
      question: "What are the requirements for Ireland Student Visa?",
      answer:
        "The required documents for an Ireland Student Visa include:\n\n- 2 latest passport-size color photographs\n- Latest passport and copies of previous passports\n- A letter of application with complete contact information, reason for arriving in Ireland, and your signature\n- Acceptance letter from the university or college in Ireland\n- Proof of any gaps in your educational history\n- Evidence of payment of tuition and registration fees\n- Copies of all exam results and academic qualifications needed for university study\n- Certificate for English language proficiency/IELTS score\n- Evidence of adequate financial support for your stay\n- Medical insurance covering at least €25,000\n- Commitment to exit Ireland after the student visa expires",
    },
    {
      question: "How much does it cost to study in Ireland?",
      answer:
        "The cost of studying in Ireland varies depending on the university, course, and field. Fees differ for EU and non-EU students:\n\n- **Undergraduate Program**: €9,000 – €45,000 per year\n- **Postgraduate Master's Program**: €9,500 – €37,000 per year\n- **Doctoral Degree**: €9,000 – €30,000 per year",
    },
  ];

  return (
    <CountriesPage
      img={countryImg}
      country="Ireland"
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

export default NewIreland;
