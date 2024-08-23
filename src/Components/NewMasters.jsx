import React from "react";
import StudyPage from "./StudyPage/StudyPage";
import mba from "@/../public/gradlers/26.jpg";

const NewMasters = () => {
  const mainDesc =
    "A Master's degree in abroad universities offers unparalleled academic and professional growth. Students gain access to world-renowned programs, cutting-edge research, and global networking opportunities. Transitioning in a new culture enhances adaptability, language skills, and intercultural competence. Graduates from international master's programs often have a competitive edge in the global job market, benefiting from diverse perspectives and advanced expertise. Additionally, many foreign universities provide scholarships, financial aid, and work-study opportunities to support international students. Overall, studying a master's abroad is a transformative experience that enriches both personal and professional development.";

  const why = [
    {
      Image: "/ab11.png",
      Heading: "Professional Degree",
      Circle: "/ab12.png",
      Description:
        "A master’s degree is a professional degree, with new emphasis on educating students for careers in business, science and engineering, government, and so on.",
    },
    {
      Image: "/ab21.png",
      Heading: "Advanced Coursework ",
      Circle: "/ab22.png",
      Description:
        "A master’s degree program prepares you for a Ph.D. by combining discipline-specific, advanced coursework with abilities such as critical thinking, analytic ability, and time management.",
    },
    {
      Image: "/ab31.png",
      Heading: "Become a Subject Specialist.",
      Circle: "/ab32.png",
      Description:
        "To gain a deeper understanding of current stream, a master’s degree allows you to build on your undergraduate knowledge and become a subject specialist.",
    },
    {
      Image: "/ab41.png",
      Heading: "Long-Term position",
      Circle: "/ab42.png",
      Description:
        "An individual who demonstrates the ability to succeed in a long-term position requiring stamina, discipline, leadership, and the ability to work effectively with others is eligible for advancement chances within their company.",
    },
  ];

  const trend = [
    { Heading: "Master of Business Administration (MBA)", Description: "" },
    {
      Heading: "Master of Science in Computer Science (MSCS)",
      Description: "",
    },
    { Heading: "Master of Science in Data Science", Description: "" },
    { Heading: "Master of Public Health (MPH)", Description: "" },
    { Heading: "Master of Finance", Description: "" },
    { Heading: "Master of Engineering (MEng)", Description: "" },
    {
      Heading: "Master of Science in Artificial Intelligence",
      Description: "",
    },
    { Heading: "Master of Education (MEd)", Description: "" },
    { Heading: "Master of Arts in International Relations", Description: "" },
    { Heading: "Master of Science in Cybersecurity", Description: "" },
    { Heading: "Master of Environmental Science", Description: "" },
    { Heading: "Master of Science in Mechanical Engineering", Description: "" },
    { Heading: "Master of Social Work (MSW)", Description: "" },
    { Heading: "Master of Science in Electrical Engineering", Description: "" },
    { Heading: "Master of Science in Biotechnology", Description: "" },
    { Heading: "Master of Laws (LLM)", Description: "" },
    { Heading: "Master of Science in Marketing", Description: "" },
    { Heading: "Master of Science in Chemical Engineering", Description: "" },
    { Heading: "Master of Architecture (MArch)", Description: "" },
    { Heading: "Master of Science in Psychology", Description: "" },
  ];

  const trendDesc1 =
    "The most popular master's courses that international students frequently pursue abroad, these programs are popular due to their strong career prospects, global demand for professionals in these fields, and the advanced knowledge and skills they provide";

  const trendDesc2 = "";

  const eligibility = [
    {
      title: "Eligibility",
      points: [
        "A 4-year Bachelor’s degree program from an accredited university is preferred in the USA and Canada.",
        "GRE score (in some business programs GMAT score as well) is required for making an application to the US. Though not mandatory, some universities in Germany, Singapore, and Canada also prefer a good GRE score.",
        "A good English language test score like IELTS, TOEFL, and PTE is a must. The qualifying scores may vary depending on the university and program.",
        "Relevant work experience, co-curricular or extracurricular activities, and research orientation are also given due weightage while considering a student’s profile.",
        "In some universities, pre-application networking with the intended research group is recommended. In some programs, students do receive interview calls as a part of the assessment process.",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "What are the admission requirements for master's programs abroad?",
      answer:
        "Typically, admission requirements include a bachelor's degree in a related field, academic transcripts, letters of recommendation, a statement of purpose, and proficiency in the language of instruction (usually English).",
    },
    {
      question:
        "How do I choose the right master's program and university abroad?",
      answer:
        "Consider factors such as program reputation, curriculum structure, faculty expertise, research opportunities, location, cost of living, and career prospects post-graduation.",
    },
    {
      question:
        "What are the language requirements for international master's programs?",
      answer:
        "Many programs require proof of English proficiency through tests like IELTS or TOEFL. Some countries may also require proficiency in the local language for certain programs.",
    },
    {
      question: "What is the cost of studying for a master's degree abroad?",
      answer:
        "Tuition fees vary widely depending on the country, university, and program. Additionally, consider living expenses, healthcare, and other costs associated with studying abroad.",
    },
    {
      question:
        "Are there scholarships or financial aid options available for international students?",
      answer:
        "Many universities and organizations offer scholarships, grants, or fellowships based on academic merit, financial need, or specific criteria such as field of study or nationality.",
    },
    {
      question:
        "Can international students work while studying for a master's degree abroad?",
      answer:
        "Policies vary by country and university, but many countries allow international students to work part-time during the academic term and full-time during breaks with the appropriate visa.",
    },
    {
      question:
        "What are the visa requirements and procedures for studying abroad?",
      answer:
        "Visa requirements vary by country and typically include proof of acceptance into a recognized program, proof of financial support, health insurance, and sometimes a health examination. It's essential to check the specific requirements of the country you plan to study in.",
    },
  ];

  const destinations = [
    {
      country: "United States",
      description:
        "Known for its diverse range of programs and high-quality education, the US is home to many of the world's top universities, offering excellent research opportunities and vibrant campus life.",
      image: "/us.png",
    },
    {
      country: "United Kingdom",
      description:
        "With prestigious institutions like Oxford, Cambridge, and Imperial College, the UK offers a rich academic tradition and a wide variety of courses. The shorter duration of undergraduate programs is also an advantage.",
      image: "/uk.png",
    },
    {
      country: "Canada",
      description:
        "Renowned for its welcoming environment, high academic standards, and affordable tuition fees, Canada is a popular choice for international students. Universities like the University of Toronto and McGill University are highly respected.",
      image: "/cann.png",
    },
    {
      country: "Australia",
      description:
        "Known for its high-quality education system and excellent student support services, Australia offers diverse programs and a great quality of life. Universities like the University of Sydney and the University of Melbourne are top choices.",
      image: "/auss.png",
    },
    {
      country: "Germany",
      description:
        "With many tuition-free or low-cost education options, Germany is an attractive destination for engineering, technology, and business courses. Universities like the Technical University of Munich and Heidelberg University are highly regarded.",
      image: "/ger.png",
    },
    {
      country: "Sweden",
      description:
        "Known for its high-quality education and strong focus on research and innovation, Sweden offers a range of programs in English and a great quality of life. Universities like Uppsala University and Lund University are popular choices.",
      image: "/swe.png",
    },
    {
      country: "Singapore",
      description:
        "As a global education hub with top-ranked universities like the National University of Singapore (NUS) and Nanyang Technological University (NTU), Singapore offers high-quality education and strong links to industry.",
      image: "/sing.png",
    },
    {
      country: "New Zealand",
      description:
        "With a welcoming environment, excellent support services for international students, and high-quality education, New Zealand is a great destination. Universities like the University of Auckland and University of Otago are well-regarded.",
      image: "/neww.webp",
    },
  ];

  return (
    <StudyPage
      img={mba}
      study="Masters"
      mainDesc={mainDesc}
      smallStudy="Masters"
      why={why}
      trend={trend}
      trendDesc1={trendDesc1}
      trendDesc2={trendDesc2}
      eligibility={eligibility}
      faqs={faqs}
      destinations={destinations}
    />
  );
};

export default NewMasters;
