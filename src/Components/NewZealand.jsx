import React from "react";
import countryImg from "@/../public/gradlers/University of Otago , New Zealand.jpg";
import flag from "@/../public/neww.webp";
import CountriesPage from "./CountriesPage/CountriesPage";

const NewZealand = () => {
  const mainDesc = `Studying in New Zealand offers a unique blend of high-quality education and breathtaking natural beauty. Renowned for its innovative teaching methods and research opportunities, New Zealand's universities rank highly globally. The country's welcoming and safe environment makes it an ideal destination for international students. With a diverse range of courses and strong support services, students can pursue their academic and personal growth effectively. Additionally, New Zealand provides excellent work opportunities during and after studies, facilitating a smooth transition into the workforce. The vibrant culture, friendly people, and stunning landscapes ensure a rich and memorable educational experience.`;

  const why = {
    desc: "Studying in New Zealand offers numerous benefits for international students. Here are some compelling reasons to consider New Zealand as your study destination:",
    card: [
      {
        Image: "/whyc1.png",
        Description: "High-Quality Education",
      },
      {
        Image: "/whyc2.png",
        Description: "Global Recognition",
      },
      {
        Image: "/whyc3.png",
        Description: "Safe and Welcoming Environment",
      },
      {
        Image: "/whyc4.png",
        Description: "Work Opportunities",
      },
      {
        Image: "/whyc5.png",
        Description: "Quality of Life",
      },
      {
        Image: "/whyc6.png",
        Description: "Stunning Natural Beauty",
      },
      {
        Image: "/whyc1.png",
        Description: "Support for International Students",
      },
      {
        Image: "/whyc2.png",
        Description: "Cultural Diversity",
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

  const tests = ["TOEFL", "IELTS", "PTE", "GMAT"];

  const top = [
    {
      Image: "/top1.png",
      Heading: "IT",
    },
    {
      Image: "/top2.png",
      Heading: "Computer science",
    },
    {
      Image: "/top3.png",
      Heading: "Medicine",
    },
    {
      Image: "/top4.png",
      Heading: "Business",
    },
    {
      Image: "/top5.png",
      Heading: "Healthcare",
    },
    {
      Image: "/top6.png",
      Heading: "Agriculture",
    },
    {
      Image: "/top7.png",
      Heading: "Animation",
    },
    {
      Image: "/top8.png",
      Heading: "Hospitality",
    },
    {
      Image: "/top1.png",
      Heading: "Data Science",
    },
    {
      Image: "/top2.png",
      Heading: "Data Analytics ",
    },
    {
      Image: "/top3.png",
      Heading: "Cyber Security",
    },
    {
      Image: "/top4.png",
      Heading: "Pharmaceuticals",
    },
    {
      Image: "/top5.png",
      Heading: "Digital marketing",
    },
  ];

  const faqs = [
    {
      question: "Is it safe to study in New Zealand?",
      answer:
        "Yes, it is very safe to study in New Zealand. The country is one of the safest in the world, ranked 2nd in the Global Peace Index (2018), with very low crime rates.",
    },
    {
      question:
        "What is the language proficiency marks required for studying an English-taught course in New Zealand?",
      answer:
        "For undergraduate or master's courses, a candidate must score at least 6.5 in IELTS. For PTE, many universities in New Zealand require a score of at least 50 for UG courses and 64 for master's courses.",
    },
    {
      question:
        "What are the average tuition fees of undergraduate programs in New Zealand?",
      answer:
        "The average tuition fee for undergraduate programs in New Zealand is approximately $20,500 to $25,000 per year.",
    },
    {
      question: "What are the best subjects to study in New Zealand?",
      answer:
        "Some of the top courses to study in New Zealand include Engineering, Animation, IT and Computer Science, Agriculture, Nursing, Business Management, and Healthcare.",
    },
    {
      question: "Can I work while studying in New Zealand?",
      answer:
        "Yes, students can work up to 20 hours a week while studying and full-time during holidays.",
    },
    {
      question:
        "How long does it take to get a student visa to study in New Zealand?",
      answer:
        "It takes around 20 days to process a New Zealand student visa submitted online, and 35-40 days for applications submitted as hard copies.",
    },
    {
      question: "What are the requirements for a New Zealand Student Visa?",
      answer:
        "Common documents required for a New Zealand student visa include: \n- Valid Passport \n- Health Insurance Receipt \n- Two passport-sized photographs \n- Receipt of Application Fee Payment \n- Complete Student Visa Application Form \n- Degree or Certificate from previous school/college \n- Admission confirmation form from a New Zealand University \n- Scores of tests like TOEFL, GRE, GMAT, or IELTS \n- Document proving financial capability to stay, study, and live in New Zealand \n- Health and Character Certificate.",
    },
  ];

  return (
    <CountriesPage
      img={countryImg}
      country="New Zealand"
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

export default NewZealand;
