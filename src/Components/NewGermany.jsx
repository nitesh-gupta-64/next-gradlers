import React from "react";
import countryImg from "@/../public/gradlers/technical university of munich, Germany.jpg";
import flag from "@/../public/ger.png";
import CountriesPage from "./CountriesPage/CountriesPage";

const NewGermany = () => {
  const mainDesc = `Germany is an ideal destination for studying overseas with its world-class education and thrilling urban life. It has a welcoming culture and accepts immigrants from all over the world. With a German study visa, you can have access to world-class education. The German economy is vast and has infinite opportunities for overseas students. The country offers cost-effective education for graduate, postgraduate, and master's programs. In addition to the nominal fee, various fee waivers and merit scholarships are available for international students. Obtaining a German study visa and gaining admission to German universities is more accessible than in other countries and universities.`;

  const why = {
    desc: "Germany is renowned for its excellent education system, especially in fields like engineering, science, and technology. Many universities are highly ranked globally, offering state-of-the-art facilities and research opportunities. Most public universities in Germany charge little to no tuition fees for international students, making it an attractive option compared to other study destinations. Private universities do charge fees but are often lower than in other countries. Germany offers a broad spectrum of courses and programs taught in English, catering to diverse academic interests. Whether you're interested in engineering, humanities, medicine, or business, there are numerous options available.",
    card: [
      {
        Image: "/whyc1.png",
        Description: "Quality Education",
      },
      {
        Image: "/whyc2.png",
        Description: "Scholarships",
      },
      {
        Image: "/whyc3.png",
        Description: "Affordability",
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
        Description: "Safety and Infrastructure",
      },
      {
        Image: "/whyc2.png",
        Description: "PR Opportunity",
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

  const tests = ["TOEFL", "IELTS", "GRE", "SAT", "GMAT"];

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
      Heading: "Architecture & Urban Planning",
    },
    {
      Image: "/top4.png",
      Heading: "Business and Management",
    },
    {
      Image: "/top5.png",
      Heading: "Renewable Energy & Environmental Engineering",
    },
    {
      Image: "/top6.png",
      Heading: "Healthcare & Medicine",
    },
    {
      Image: "/top7.png",
      Heading: "Natural Sciences",
    },
    {
      Image: "/top8.png",
      Heading: "Robotics & Artificial Intelligence",
    },
    {
      Image: "/top1.png",
      Heading: "Automotive Engineering",
    },
    {
      Image: "/top2.png",
      Heading: "Humanities & Social Sciences",
    },
  ];

  const faqs = [
    {
      question: "Is studying in Germany free?",
      answer:
        "While tuition fees may be low or non-existent, it’s important to budget for living expenses such as accommodation, food, health insurance, and personal expenses. The cost of living in Germany can vary depending on the city and lifestyle, but it is generally manageable compared to other European countries.",
    },
    {
      question: "Can I work in Germany with a student visa?",
      answer:
        "Germany permits international students to work while studying. Students are allowed to work for 240 days in part-time and 120 days in full-time with their student visa. Working while studying is financially beneficial for students to manage their expenses.",
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
        "After successfully graduating, you can apply for a German job-seeker visa. If you get qualified for a job, you will get a skilled-worker residence permit in Germany. Upon completing 2 years of work in Germany, you can apply for Germany PR.",
    },
  ];

  return (
    <CountriesPage
      img={countryImg}
      country="Germany"
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

export default NewGermany;
