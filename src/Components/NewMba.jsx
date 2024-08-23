import React from "react";
import StudyPage from "./StudyPage/StudyPage";
import mba from "@/../public/gradlers/16.jpg";

const NewMba = () => {
  const mainDesc =
    "Studying for a Master of Business Administration (MBA) at international universities offers a transformative experience in global business education. It equips students with advanced management skills, strategic thinking, and leadership capabilities essential for navigating today's dynamic corporate world. With access to diverse international networks, cutting-edge curriculum, and experiential learning opportunities, MBA graduates gain a competitive edge in the global job market. Whether specializing in finance, marketing, or entrepreneurship, studying abroad fosters cultural understanding, expands professional horizons, and prepares individuals to drive innovation and succeed in leadership roles across industries worldwide.";

  const why = [
    {
      Image: "/ab11.png",
      Heading: "Global Recognition",
      Circle: "/ab12.png",
      Description:
        "MBA programs offered by renowned international universities are highly regarded worldwide, providing a prestigious credential that can open doors to global career opportunities.",
    },
    {
      Image: "/ab21.png",
      Heading: "Diverse Learning Environment",
      Circle: "/ab22.png",
      Description:
        "Studying abroad exposes you to diverse perspectives, cultures, and business practices, enriching your educational experience and expanding your global mindset.",
    },
    {
      Image: "/ab31.png",
      Heading: "Networking Opportunities",
      Circle: "/ab32.png",
      Description:
        "International MBA programs attract students and faculty from around the world, offering extensive networking opportunities with professionals, alumni, and industry leaders globally.",
    },
    {
      Image: "/ab41.png",
      Heading: "Specialized Programs",
      Circle: "/ab42.png",
      Description:
        "Many foreign universities offer specialized MBA concentrations or dual-degree options that may not be available in your home country, allowing you to tailor your studies to specific career goals.",
    },
    {
      Image: "/ab51.png",
      Heading: "Experiential Learning",
      Circle: "/ab52.png",
      Description:
        "MBA programs abroad often emphasize experiential learning through internships, consulting projects, and global study trips, providing practical skills and real-world experience.",
    },
    {
      Image: "/ab61.png",
      Heading: "Enhanced Language Skills",
      Circle: "/ab62.png",
      Description:
        "Studying in an English-speaking country or in a multilingual environment can improve your language proficiency, a valuable asset in today's global business environment.",
    },
    {
      Image: "/vi11.png",
      Heading: "Career Advancement",
      Circle: "/vi12.png",
      Description:
        "Graduating from a prestigious international MBA program can enhance your employability and earning potential, as employers value the international exposure, cultural adaptability, and leadership skills gained abroad.",
    },
    {
      Image: "/vi21.png",
      Heading: "Personal Growth",
      Circle: "/vi22.png",
      Description:
        "Living and studying abroad challenges you to adapt to new environments, develop resilience, and build cross-cultural competencies, contributing to personal growth and maturity.",
    },
    {
      Image: "/vi31.png",
      Heading: "Access to Global Job Markets",
      Circle: "/vi32.png",
      Description:
        "Many MBA programs abroad offer opportunities for internships, job placements, or post-study work visas, facilitating entry into global job markets and enhancing career mobility.",
    },
    {
      Image: "/vi41.png",
      Heading: "Scholarship Opportunities",
      Circle: "/vi42.png",
      Description:
        "Various scholarships, grants, and financial aid options are available for international students, making studying abroad more accessible and affordable.",
    },
  ];

  const trend = [
    { Heading: "General Management", Description: "" },
    { Heading: "Innovation Management", Description: "" },
    { Heading: "International Management", Description: "" },
    { Heading: "Finance", Description: "" },
    { Heading: "Information Technology", Description: "" },
    { Heading: "E-Commerce", Description: "" },
    { Heading: "Accounting", Description: "" },
    { Heading: "Entrepreneurship", Description: "" },
    { Heading: "Marketing", Description: "" },
    { Heading: "Strategic Management", Description: "" },
    { Heading: "Operations", Description: "" },
    { Heading: "Consulting", Description: "" },
    { Heading: "Supply Chain and Logistics", Description: "" },
    { Heading: "Human Resource Management", Description: "" },
    { Heading: "Executive MBA", Description: "" },
  ];

  const trendDesc1 = "";

  const trendDesc2 = "";

  const eligibility = [
    {
      title: "Eligibility criteria differ for every program and B-schools:",
      points: [
        "An undergraduate (Bachelor degree) – of 3 years or 4 years from a well-recognized, accredited university is a prerequisite.",
        "Most of the accredited programs require candidates with professional experience of minimum 2-3 years. The average class profile of the B-schools differs widely amongst different universities. Some top schools have an average class experience of 5+ years while some others may have 7-9 years. Also, there are options of Fresher’s MBA – where no work experience is required and a student can enter immediately after completing his bachelor’s.",
        "Business and Management programs from the top and high ranked B-Schools require good Graduate Management Admission Test (GMAT) scores to have a realistic chance of admission, apart from a sound professional profile.",
      ],
    },
  ];

  const faqs = [
    {
      question: "What are the admission requirements for MBA programs abroad?",
      answer:
        "Typical requirements include a bachelor’s degree, professional work experience (often preferred but not always required), GMAT/GRE scores, TOEFL/IELTS scores (for non-native English speakers), letters of recommendation, and a statement of purpose.",
    },
    {
      question: "How long does it take to complete an MBA abroad?",
      answer:
        "The duration varies by program and format. Full-time MBA programs typically last 1 to 2 years, while part-time or executive MBA (EMBA) programs can take 2 to 4 years, depending on the schedule and course load.",
    },
    {
      question: "What are the benefits of studying for an MBA abroad?",
      answer:
        "Studying abroad offers exposure to diverse cultures, international business practices, and global networking opportunities. It enhances language skills, cultural awareness, and provides access to a broader range of career opportunities worldwide.",
    },
    {
      question:
        "Are there scholarships or financial aid options available for international MBA students?",
      answer:
        "Many business schools and external organizations offer scholarships, grants, and financial aid based on merit, need, diversity, and specific criteria. It’s advisable to research and apply for relevant funding opportunities early.",
    },
    {
      question: "Can I work while studying for an MBA abroad?",
      answer:
        "Policies vary by country and program. Many countries allow international students to work part-time (usually up to 20 hours per week) during term and full-time during holidays. Some MBA programs also offer internship or co-op opportunities.",
    },
    {
      question: "What is the average cost of an MBA program abroad?",
      answer:
        "Tuition fees for MBA programs abroad vary widely depending on the country, school reputation, program format, and duration. Generally, costs range from USD 30,000 to USD 150,000 or more for the entire program, excluding living expenses.",
    },
    {
      question: "What is the accreditation process for MBA programs abroad?",
      answer:
        "Accreditation ensures that MBA programs meet high academic standards and are recognized globally. Look for schools accredited by organizations like AACSB, EQUIS, or AMBA, which evaluate curriculum quality, faculty credentials, and student outcomes.",
    },
    {
      question:
        "How do MBA programs abroad differ from those in my home country?",
      answer:
        "International MBA programs often emphasize a global perspective, diverse student cohorts, experiential learning, and strong industry connections. They may offer specialized concentrations, dual-degree options, and opportunities to study abroad or intern internationally.",
    },
    {
      question: "What are the language requirements for MBA programs abroad?",
      answer:
        "Many MBA programs abroad are taught in English, so proficiency in English (verified through tests like TOEFL or IELTS) is often required for non-native English speakers. Some programs may also offer language support or courses in the local language.",
    },
    {
      question:
        "What career support services are available for MBA students abroad?",
      answer:
        "Business schools typically offer career services such as job placement assistance, networking events, career counseling, resume workshops, and access to alumni networks. These services are designed to enhance students’ job prospects and career progression post-MBA.",
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
      country: "Singapore",
      description:
        "As a global education hub with top-ranked universities like the National University of Singapore (NUS) and Nanyang Technological University (NTU), Singapore offers high-quality education and strong links to industry.",
      image: "/sing.png",
    },
  ];

  return (
    <StudyPage
      img={mba}
      study="MBA"
      mainDesc={mainDesc}
      smallStudy="MBA"
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

export default NewMba;
