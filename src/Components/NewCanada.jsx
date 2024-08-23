import React from "react";
import countryImg from "@/../public/gradlers/University of Toronto, Canada.jpg";
import flag from "@/../public/assets/images/can.png";
import CountriesPage from "./CountriesPage/CountriesPage";

const NewCanada = () => {
  const mainDesc = `Studying in Canada offers students a world-class education in a diverse and inclusive environment. Renowned for its high academic standards and innovative research opportunities, Canada is home to numerous top-ranked universities and colleges. Students benefit from a multicultural society, safe cities, and a high quality of life. Additionally, Canada provides excellent work opportunities during and after studies, making it easier for graduates to transition into the workforce. With stunning natural landscapes and vibrant urban centers, Canada is an ideal destination for international students seeking both academic excellence and a memorable cultural experience.`;

  const why = {
    desc: "Studying in Canada offers numerous advantages for international students. Some compelling reasons for studying in Canada are",
    card: [
      {
        Image: "/whyc1.png",
        Description: "High-Quality Education",
      },
      {
        Image: "/whyc2.png",
        Description: "Diverse and Inclusive Society",
      },
      {
        Image: "/whyc3.png",
        Description: "Safety and Quality of Life",
      },
      {
        Image: "/whyc4.png",
        Description: "Work Opportunities",
      },
      {
        Image: "/whyc5.png",
        Description: "Affordable Education",
      },
      {
        Image: "/whyc6.png",
        Description: "Pathway to Permanent Residency",
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

  const tests = ["TOEFL", "IELTS", "PTE", "GRE", "SAT", "GMAT"];

  const top = [
    {
      Image: "/top1.png",
      Heading: "Computer Science and Information Technology",
    },
    {
      Image: "/top2.png",
      Heading: "Engineering",
    },
    {
      Image: "/top3.png",
      Heading: "Social Sciences and Humanities",
    },
    {
      Image: "/top4.png",
      Heading: "Business and Management",
    },
    {
      Image: "/top5.png",
      Heading: "Art and Design",
    },
    {
      Image: "/top6.png",
      Heading: "Health & Medicine",
    },
    {
      Image: "/top7.png",
      Heading: "Natural Sciences",
    },
    {
      Image: "/top8.png",
      Heading: "Hospitality and Tourism Management",
    },
    {
      Image: "/top1.png",
      Heading: "Media and Communication",
    },
    {
      Image: "/top2.png",
      Heading: "Education",
    },
  ];

  const faqs = [
    {
      question: "Why should I choose Canada for higher education?",
      answer:
        "Canada offers high-quality education, affordable tuition fees, a multicultural environment, and strong research opportunities. Canadian universities are globally recognized and have a reputation for academic excellence.",
    },
    {
      question: "How do I apply to Canadian universities?",
      answer:
        "• Research universities and programs.\n• Check admission requirements and deadlines.\n• Prepare and submit your application, which typically includes transcripts, a statement of purpose, recommendation letters, and proof of language proficiency (e.g., IELTS, TOEFL).\n• Pay application fees.",
    },
    {
      question: "What are the general admission requirements?",
      answer:
        "• High school diploma or equivalent for undergraduate programs.\n• Bachelor's degree for graduate programs.\n• Proof of English or French language proficiency.\n• Specific program requirements (e.g., portfolio for arts programs, GRE/GMAT for certain graduate programs).",
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
      answer:
        "• Receive an acceptance letter from a designated learning institution (DLI).\n• Apply online for a study permit through the Immigration, Refugees and Citizenship Canada (IRCC) website.\n• Provide necessary documents, such as proof of acceptance, proof of identity, and proof of financial support.",
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
      answer:
        "• Apply within 180 days of receiving confirmation that you’ve completed your program.\n• Provide necessary documents, including proof of program completion and a valid passport.",
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
    <CountriesPage
      img={countryImg}
      country="Canada"
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

export default NewCanada;
