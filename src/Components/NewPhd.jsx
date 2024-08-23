import React from "react";
import StudyPage from "./StudyPage/StudyPage";
import mba from "@/../public/gradlers/23.jpg";

const NewPhd = () => {
  const mainDesc =
    "Pursuing a Ph.D. abroad offers a unique opportunity to engage in advanced research at leading global institutions. It provides access to cutting-edge facilities, diverse academic perspectives, and international collaborations that can enhance the quality and impact of your research. Studying abroad also broadens your professional network, exposing you to new cultures and ideas, and preparing you for a global career. With a Ph.D. from a prestigious international university, you'll gain a competitive edge in academia, industry, and beyond, equipped with the knowledge, skills, and global outlook needed to excel in your field.";

  const why = [
    {
      Image: "/ab11.png",
      Heading: "Expertise and Specialization",
      Circle: "/ab12.png",
      Description:
        "A Ph.D. provides in-depth knowledge and expertise in a specific field, allowing individuals to become subject matter experts.",
    },
    {
      Image: "/ab21.png",
      Heading: "Career Opportunities",
      Circle: "/ab22.png",
      Description:
        "Ph.D. holders often pursue careers in academia, research institutions, industry, government, and non-profit organizations. They may work as professors, researchers, consultants, or leaders in their fields.",
    },
    {
      Image: "/ab31.png",
      Heading: "Intellectual Fulfillment",
      Circle: "/ab32.png",
      Description:
        "Completing a doctoral degree can be intellectually rewarding, as it involves discovering new knowledge, solving complex problems, and contributing to the advancement of the field.",
    },
    {
      Image: "/ab41.png",
      Heading: "Professional Recognition",
      Circle: "/ab42.png",
      Description:
        "Earning a Ph.D. is a mark of distinction and scholarly achievement, often leading to higher professional status and recognition.",
    },
  ];

  const trend = [
    {
      Heading: "Artificial Intelligence and Machine Learning",
      Description:
        "Research in AI and ML focuses on developing algorithms, models, and systems that can learn from data and make intelligent decisions. This field is essential for advancements in technology, automation, and data analysis.",
    },
    {
      Heading: "Biotechnology and Biomedical Sciences",
      Description:
        "This field includes research in genetics, molecular biology, drug development, and medical technologies. It aims to improve health outcomes and develop new treatments for diseases.",
    },
    {
      Heading: "Climate Science and Environmental Studies",
      Description:
        "Research in this area addresses climate change, environmental conservation, renewable energy, and sustainability. It focuses on understanding and mitigating the impacts of human activities on the environment.",
    },
    {
      Heading: "Data Science and Big Data Analytics",
      Description:
        "This field involves extracting meaningful insights from large datasets. It is crucial for decision-making in various industries, including finance, healthcare, marketing, and social sciences.",
    },
    {
      Heading: "Cybersecurity",
      Description:
        "Research in Cybersecurity focuses on protecting computer systems, networks, and data from cyber threats. It is increasingly important as cyberattacks become more sophisticated and prevalent.",
    },
    {
      Heading: "Renewable Energy and Sustainable Technologies",
      Description:
        "This field explores new technologies and methods for generating and using energy sustainably. It includes research on solar power, wind energy, energy storage, and smart grids.",
    },
    {
      Heading: "Neuroscience and Cognitive Science",
      Description:
        "Research in these fields seeks to understand the brain and nervous system, including how they influence behavior, cognition, and mental health. It has applications in medicine, psychology, and artificial intelligence.",
    },
    {
      Heading: "Quantum Computing and Quantum Information Science",
      Description:
        "This cutting-edge field explores the principles of quantum mechanics to develop new computing technologies that can solve complex problems beyond the capabilities of classical computers.",
    },
    {
      Heading: "Social Sciences and Humanities",
      Description:
        "Ph.D. programs in sociology, psychology, political science, economics, history, and cultural studies explore human behavior, social systems, and cultural phenomena. These fields are essential for understanding and addressing societal issues.",
    },
    {
      Heading: "Engineering and Robotics",
      Description:
        "Research in this area focuses on developing advanced engineering solutions and robotic systems for various applications, including manufacturing, healthcare, and space exploration.",
    },
  ];

  const trendDesc1 =
    "The most popular and trending fields for doing a Ph.D. often reflect current scientific, technological, and societal priorities. Here are some of the fields that are currently in high demand:";

  const trendDesc2 =
    "These fields are trending due to their relevance to current global challenges and technological advancements. Pursuing a Ph.D. in one of these areas can provide opportunities to contribute to significant scientific discoveries and societal progress.";

  const eligibility = [
    {
      title:
        "Every university and program defines its specific requirements. However, a few important factors are as follows:",
      points: [
        "Excellent academic record and research activities displayed during the Undergraduate and Master’s programs.",
        "While US universities do accept students for direct Ph.D. after their bachelor’s degree, mostly the student’s academic track record, research exposure, and projects are considered along with other requirements before making this decision.",
        "Experience in the related field in the form of projects, internships, paper publications that convey focus and enthusiasm and intended area of research with a definitive research proposal is desired.",
        "Good GRE score is a prerequisite for admission in the US and also for some programs in Canada and Singapore. For Ph.D. programs in business/management studies, even GMAT scores are accepted.",
        "Many universities also need the GRE subject test scores. Especially high-ranking universities stress upon good subject test scores for offering admission.",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "What are the admission requirements for a Ph.D. program abroad?",
      answer:
        "Admission requirements typically include a master’s degree (though some programs accept bachelor’s degree holders), a strong academic record, letters of recommendation, a research proposal, and standardized test scores like the GRE. Proficiency in English (TOEFL or IELTS) is also often required for non-native speakers.",
    },
    {
      question: "How do I find the right Ph.D. program and supervisor abroad?",
      answer:
        "Research universities and departments with strong programs in your field. Look at faculty profiles, their research interests, publications, and projects. Reach out to potential supervisors to discuss your research interests and see if they are accepting new students.",
    },
    {
      question:
        "What funding options are available for international Ph.D. students?",
      answer:
        "Funding options include university scholarships, government grants, research assistantships, teaching assistantships, and fellowships. Some countries also offer specific scholarships for international students, such as the Fulbright Program (USA), DAAD (Germany), and Chevening Scholarships (UK).",
    },
    {
      question: "What is the typical duration of a Ph.D. program abroad?",
      answer:
        "The duration of a Ph.D. program varies by country and field but typically ranges from 3 to 5 years. Some programs may take longer depending on the nature of the research and other academic requirements.",
    },
    {
      question: "Can I work while pursuing my Ph.D. abroad?",
      answer:
        "Many countries allow Ph.D. students to work part-time. However, the number of hours you can work may be limited, and you should ensure that working does not interfere with your research responsibilities. Check the specific regulations of the country where you plan to study.",
    },
    {
      question: "What are the benefits of doing a Ph.D. abroad?",
      answer:
        "Benefits include access to advanced research facilities, exposure to different academic cultures and methodologies, opportunities to build an international network, and enhanced career prospects. It also provides personal growth through cultural exchange and global experiences.",
    },
    {
      question:
        "What is the process for applying for a student visa for Ph.D. studies abroad?",
      answer:
        "The visa application process varies by country but generally involves receiving an offer of admission, providing proof of sufficient funds, health insurance, and a clean criminal record, as well as meeting language requirements. It’s important to start the visa process early and follow the specific guidelines provided by the country's embassy or consulate.",
    },
    {
      question:
        "What support services are available for international Ph.D. students?",
      answer:
        "Many universities offer support services such as academic advising, language assistance, career counseling, mental health services, and social integration programs. These services help international students adjust to their new environment and succeed in their studies.",
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
      country: "Netherlands",
      description:
        "Offering a wide range of English-taught programs, the Netherlands is known for its innovative education system and high-quality universities like the University of Amsterdam and Delft University of Technology.",
      image: "/net.png",
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
  ];

  return (
    <StudyPage
      img={mba}
      study="Ph.D"
      mainDesc={mainDesc}
      smallStudy="Ph.D"
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

export default NewPhd;
