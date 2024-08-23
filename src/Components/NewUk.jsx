import React from "react";
import countryImg from "@/../public/gradlers/King's college, cambridge, UK.jpg";
import flag from "@/../public/uk.png";
import CountriesPage from "./CountriesPage/CountriesPage";

const NewUk = () => {
  const mainDesc = `Studying in the UK offers students access to world-renowned universities, rich academic traditions, and innovative research opportunities. The UK is home to prestigious institutions like Oxford, Cambridge, and Imperial College London, providing top-tier education and global recognition. With diverse course offerings, students can pursue various disciplines tailored to their interests and career goals. The UK's vibrant cultural scene, historic landmarks, and cosmopolitan cities enhance the overall student experience. Additionally, the UK offers excellent networking opportunities, connecting students with industry leaders and professionals. For those seeking a high-quality education in a dynamic and culturally rich environment, the UK is an ideal choice.`;

  const why = {
    desc: "Studying in the UK offers plethora of benefits for international students. Here are some key reasons to consider the UK as your study destination:",
    card: [
      {
        Image: "/whyc1.png",
        Description: "World-Class Education",
      },
      {
        Image: "/whyc2.png",
        Description: "Diverse Range of Courses",
      },
      {
        Image: "/whyc3.png",
        Description: "Shorter Course Duration",
      },
      {
        Image: "/whyc4.png",
        Description: "Cultural Richness",
      },
      {
        Image: "/whyc5.png",
        Description: "Global Recognition",
      },
      {
        Image: "/whyc6.png",
        Description: "Language Proficiency",
      },
      {
        Image: "/whyc1.png",
        Description: "Networking Opportunities",
      },
      {
        Image: "/whyc2.png",
        Description: "Supportive Environment",
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
      Heading: "Architecture",
    },
    {
      Image: "/top2.png",
      Heading: "Engineering and Technology",
    },
    {
      Image: "/top3.png",
      Heading: "Social Sciences",
    },
    {
      Image: "/top4.png",
      Heading: "Business and Management",
    },
    {
      Image: "/top5.png",
      Heading: "Arts and Humanities",
    },
    {
      Image: "/top6.png",
      Heading: "Medicine & Health Sciences",
    },
    {
      Image: "/top7.png",
      Heading: "Natural Sciences",
    },
    {
      Image: "/top8.png",
      Heading: "Law",
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
      answer:
        "Entry requirements vary by course and university. Generally, they include:\n• Academic qualifications (A-levels, IB, or equivalent for undergraduates; bachelor's degree for postgraduates)\n• English language proficiency (e.g., IELTS, TOEFL)\n• Personal statement\n• Reference letters\n• Sometimes additional tests (e.g., GMAT for MBA)",
    },
    {
      question: "What is the cost of studying in the UK?",
      answer:
        "Tuition fees vary depending on the course and institution. For international students, undergraduate fees typically range from £10,000 to £38,000 per year, and postgraduate fees range from £11,000 to over £40,000 per year. Living costs vary by location, with an average range of £12,000 to £15,000 per year.",
    },
    {
      question: "Are there scholarships available?",
      answer:
        "Yes, many scholarships are available for international students, including:\n• Government-funded scholarships (e.g., Chevening Scholarships, Commonwealth Scholarships)\n• University-specific scholarships and bursaries\n• External scholarships from organizations like the British Council",
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
      answer:
        "UK universities offer a range of support services, including:\n• Academic support (tutoring, libraries, writing centers)\n• Career services (job placements, career counseling)\n• Health and counseling services\n• Accommodation support\n• International student offices providing visa and immigration advice",
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
      answer:
        "For undergraduate courses, you apply through UCAS. You can apply to up to five courses. The application includes personal details, academic qualifications, a personal statement, and a reference letter. You also need to pay an application fee. Deadlines vary but are usually in January for most courses starting in the autumn.",
    },
    {
      question:
        "Can I transfer credits from my home country to a UK university?",
      answer:
        "Credit transfer policies vary by university and course. It’s best to contact the admissions office of the university you are interested in to discuss your specific situation and find out if your credits can be transferred.",
    },
  ];

  return (
    <CountriesPage
      img={countryImg}
      country="UK"
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

export default NewUk;
