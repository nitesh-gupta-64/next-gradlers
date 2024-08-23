import React from "react";
import countryImg from "@/../public/gradlers/The University of Sydney ,Australia.jpg";
import flag from "@/../public/auss.png";
import CountriesPage from "./CountriesPage/CountriesPage";

const NewAus = () => {
  const mainDesc = `Studying in Australia offers students access to world-class education and cutting-edge research opportunities. Home to top-ranking universities like the University of Sydney and the University of Melbourne, Australia provides diverse course offerings in a dynamic, multicultural environment. International students benefit from high-quality teaching, excellent support services, and strong post-graduation work opportunities. Australia's stunning landscapes, vibrant cities, and high quality of life enhance the overall student experience. Additionally, the country's focus on innovation and practical skills ensures graduates are well-prepared for global careers. With a welcoming and inclusive society, Australia is an ideal destination for higher education.`;

  const why = {
    desc: "Studying in Australia offers numerous advantages for international students. Here are some compelling reasons to consider Australia as your study destination:",
    card: [
      {
        Image: "/whyc1.png",
        Description: "World-Class Education",
      },
      {
        Image: "/whyc2.png",
        Description: "Diverse Course Offerings",
      },
      {
        Image: "/whyc3.png",
        Description: "Multicultural Environment",
      },
      {
        Image: "/whyc4.png",
        Description: "Work Opportunities",
      },
      {
        Image: "/whyc5.png",
        Description: "High Quality of Life",
      },
      {
        Image: "/whyc6.png",
        Description: "Stunning Natural Beauty",
      },
      {
        Image: "/whyc1.png",
        Description: "Strong Support Services",
      },
      {
        Image: "/whyc2.png",
        Description: "Innovation and Practical Skills",
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
      Heading: "Business Management",
    },
    {
      Image: "/top2.png",
      Heading: "Engineering",
    },
    {
      Image: "/top3.png",
      Heading: "Information Technology",
    },
    {
      Image: "/top4.png",
      Heading: "Medicine and Healthcare",
    },
    {
      Image: "/top5.png",
      Heading: "Environmental Sciences",
    },
    {
      Image: "/top6.png",
      Heading: "Law",
    },
    {
      Image: "/top7.png",
      Heading: "Education & Training",
    },
    {
      Image: "/top8.png",
      Heading: "Hospitality & Tourism Management",
    },
    {
      Image: "/top1.png",
      Heading: "Architecture and Design",
    },
    {
      Image: "/top2.png",
      Heading: "Agricultural Sciences",
    },
  ];

  const faqs = [
    {
      question:
        "What are the admission requirements for international students in Australian universities?",
      answer:
        "Admission requirements vary by program and university but generally include academic transcripts, English language proficiency (IELTS/TOEFL), a statement of purpose, and letters of recommendation.",
    },
    {
      question: "How much does it cost to study in Australia?",
      answer:
        "Tuition fees for international students range from AUD 20,000 to AUD 45,000 per year, depending on the course and university. Living expenses are typically around AUD 20,000 to AUD 27,000 per year.",
    },
    {
      question:
        "What scholarships are available for international students in Australia?",
      answer:
        "Numerous scholarships are offered by the Australian government, universities, and private organizations, such as the Australia Awards, Destination Australia, and university-specific scholarships.",
    },
    {
      question: "Can international students work while studying in Australia?",
      answer:
        "Yes, international students can work up to 20 hours per week during the academic term and full-time during scheduled breaks.",
    },
    {
      question:
        "What are the best universities in Australia for international students?",
      answer:
        "Top universities include the University of Sydney, University of Melbourne, Australian National University (ANU), University of Queensland, and University of New South Wales (UNSW).",
    },
    {
      question:
        "What is the process for obtaining a student visa for Australia?",
      answer:
        "The process involves receiving a Confirmation of Enrollment (CoE) from an Australian institution, applying for the Student Visa (subclass 500) online, and providing required documents such as financial proof, health insurance, and English proficiency.",
    },
    {
      question:
        "What are the living arrangements for international students in Australia?",
      answer:
        "Options include on-campus accommodation, private rentals, home stays, and shared apartments. Each option varies in cost and amenities.",
    },
    {
      question:
        "How can I improve my English language skills before studying in Australia?",
      answer:
        "Many universities offer English language preparatory courses. Additionally, intensive English programs (ELICOS) are available to help improve language proficiency before starting academic studies.",
    },
    {
      question:
        "What support services are available for international students in Australia?",
      answer:
        "Universities provide extensive support services, including academic advising, counseling, career services, health services, and orientation programs.",
    },
    {
      question: "What are the post-study work opportunities in Australia?",
      answer:
        "Graduates can apply for the Temporary Graduate Visa (subclass 485), which allows them to work in Australia for up to 4 years, depending on their qualification level and field of study.",
    },
  ];

  return (
    <CountriesPage
      img={countryImg}
      country="Australia"
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

export default NewAus;
