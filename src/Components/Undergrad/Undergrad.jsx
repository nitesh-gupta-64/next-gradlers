import React from "react";
import StudyPage from "../StudyPage/StudyPage";
import mba from "@/../public/gradlers/12.jpg";

const Undergrad = () => {
  const mainDesc =
    "Studying an undergraduate degree internationally at a foreign university offers a transformative experience, blending academic growth with cultural immersion. Pursuing higher education abroad exposes students to diverse teaching methodologies, advanced research opportunities, and a global perspective on their field of study. Renowned institutions across the globe, from the USA, Canada, the UK, Australia, Germany, Singapore, and Ireland provide a high-quality education that is recognized worldwide.";

  const why = [
    {
      Image: "/ab11.png",
      Heading: "Diverse Choice",
      Circle: "/ab12.png",
      Description:
        "Experience a diverse choice of subject combinations, flexible curriculum, state-of-the-art infrastructure, and world-class faculties.",
    },
    {
      Image: "/ab21.png",
      Heading: "Acquire academic & Life skills",
      Circle: "/ab22.png",
      Description:
        "Acquire both academic and life skills by studying with diverse peer groups.",
    },
    {
      Image: "/ab31.png",
      Heading: "Access to Global Network",
      Circle: "/ab32.png",
      Description:
        "Gain access to a global network of friends, peers, and professors who can open doors to global career opportunities and collaborations.",
    },
    {
      Image: "/ab41.png",
      Heading: "PR Chances",
      Circle: "/ab42.png",
      Description:
        "Chances of moving permanently to the chosen study destination (PR).",
    },
    {
      Image: "/ab51.png",
      Heading: "Higher Cutoff in Indian Institutes",
      Circle: "/ab52.png",
      Description:
        "Higher cut off in Indian colleges, and limited chance of admission in premier local institutions.",
    },
    {
      Image: "/ab61.png",
      Heading: "Personal Growth",
      Circle: "/ab62.png",
      Description:
        "Build personal growth traits by facing and overcoming the challenges of living and studying in a foreign country, building resilience, independence, and problem-solving skills.",
    },
    {
      Image: "/vi11.png",
      Heading: "Scholarships",
      Circle: "/vi12.png",
      Description:
        "Many countries and universities offer scholarships, grants, and financial aid to international students, making studying abroad more affordable.",
    },
    {
      Image: "/vi21.png",
      Heading: "Internships",
      Circle: "/vi22.png",
      Description:
        "Significant internships and relevant research experience enable students with an international degree to stand a better chance of getting higher salary packages post-college.",
    },
    {
      Image: "/vi31.png",
      Heading: "Explore new places",
      Circle: "/vi32.png",
      Description:
        "The opportunity to explore new places, travel to neighboring countries, and enjoy a sense of adventure while pursuing academic goals.",
    },
  ];

  const trend = [
    {
      Heading: "Computer Science and Information Technology",
      Description:
        "With the rise of the digital economy, courses in software development, cyber security, artificial intelligence, and data science are in high demand.",
    },
    {
      Heading: "Business and Management",
      Description:
        "Programs in business administration, finance, marketing, and entrepreneurship continue to attract students looking to enter the corporate world or start their own ventures.",
    },
    {
      Heading: "Engineering",
      Description:
        "Specializations in mechanical, civil, electrical, and aerospace engineering are popular due to their robust career prospects and the ongoing advancements in technology and infrastructure.",
    },
    {
      Heading: "Health Sciences",
      Description:
        "Courses in nursing, public health, biomedical sciences, and health informatics are gaining popularity as the healthcare industry continues to expand and innovate.",
    },
    {
      Heading: "Environmental Science and Sustainability",
      Description:
        "Growing awareness of environmental issues has led to increased interest in programs focused on sustainability, renewable energy, and conservation.",
    },
    {
      Heading: "Psychology",
      Description:
        "As mental health awareness increases, psychology programs are attracting students interested in understanding human behavior and pursuing careers in counseling, therapy, and research.",
    },
    {
      Heading: "Hospitality and Tourism Management",
      Description:
        "With the global travel industry recovering and expanding, courses in hospitality management, tourism, and event planning are trending.",
    },
    {
      Heading: "Creative Arts and Design",
      Description:
        "Programs in graphic design, fashion design, digital media, and animation are popular among students with a passion for creativity and innovation.",
    },
    {
      Heading: "International Relations and Political Science",
      Description:
        "These courses are sought after by students interested in global affairs, diplomacy, and policy-making.",
    },
    {
      Heading: "Robotics and Mechatronics",
      Description:
        "Combining mechanical engineering, electronics, and computer science, these interdisciplinary programs prepare students for careers in automation and advanced manufacturing.",
    },
    {
      Heading: "Culinary Arts",
      Description:
        "These courses are for those students who are passionate about food and eager to transform their culinary creativity into a professional career.",
    },
  ];

  const trendDesc1 =
    "Trending UG courses for international students globally reflect the evolving demands of the job market and the emergence of new and varied fields. Some of the popular undergraduate courses internationally include";

  const trendDesc2 =
    "These courses offer promising career opportunities and cater to the diverse interests of international students, making them highly sought after across the globe.";

  const eligibility = [
    {
      title: "Overall Profile",
      description:
        "In order to apply for a UG program abroad, a well-rounded profile is required to stand out in the competitive pool through a unique and diverse identity. An applicant’s profile must be built around the following:",
      points: [
        "Program specific activities and contributions",
        "Human strengths (empathy, inclusion, gratitude, tolerance, compassion)",
        "Honors and distinctions (academic activities, national/international Olympiads)",
        "Extra-curricular activities (demonstrating intellectual depth, out-of-the-box thinking, leadership and performance rather than mere participation)",
      ],
    },
    {
      title:
        "Academic Requirements for UG Program Internationally after 12th (for Indian students)",
      points: [
        "Consistent academic scores from Grade 9 to 11, 12th mid-year, and predicted grade. Some applications/acceptances are based on the 10th score and 12th predicted grades.",
        "Usually 12 years of education are required to apply to undergraduate programs. However, Germany requires 13 years of education – i.e. clearing the 12th grade plus meeting one of the following requirements:",
        "Clear JEE Advanced / One year of bachelor degree education from a recognized educational institute in India / Clear the Feststellungsprüfung to study the preparatory course in Germany before moving to the university.",
      ],
    },
    {
      title: "Standardized Test Score Requirements for UG",
      points: [
        "Most universities in the US require the Digital SAT/ACT scores. Some top schools would additionally need Subject Digital SAT scores for Admission.",
        "English language assessment is required by almost all foreign institutions. So IELTS, TOEFL, PTE, or DET scores are submitted by students as per the university requirements.",
        "Students can also take AP tests based on their interests to add value to their academic profile.",
        "For non-USA study destinations, students may or may not require a SAT or ACT test, but they definitely need to prove their English proficiency through any of the above English test scores acceptable by the university.",
      ],
    },
    {
      title: "Personal Documents (essays, SOPs, LORs, Resume)",
      points: [
        "The essays/personal statements form the most integral component of the UG application.",
        "The anecdotal approach should be used to create winning and compelling essays.",
        "To effectively answer every essay question, the 'Question behind the Question' strategy must be adopted, which has demonstrated success in admit in top 50 universities.",
        "The SMEA methodology (Story, Maturity, Evidence, Articulateness, and Skills) must be used as the essay writing approach.",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "What are the admission requirements for undergraduate programs abroad?",
      answer:
        "Admission requirements typically include academic transcripts, standardized test scores (such as SAT or ACT), English language proficiency tests (IELTS or TOEFL), a personal statement or essay, and letters of recommendation.",
    },
    {
      question:
        "How do I choose the right university and program for my UG studies abroad?",
      answer:
        "Consider factors such as academic reputation, course offerings, location, campus facilities, student support services, cost, and career prospects. Research university rankings, visit university websites, and reach out to current students or alumni for insights.",
    },
    {
      question: "What is the application process for UG programs abroad?",
      answer:
        "The application process usually involves submitting an online application form, providing necessary documents (transcripts, test scores, etc.), writing a personal statement, and sometimes attending an interview. Deadlines and requirements vary by country and institution.",
    },
    {
      question:
        "How much does it cost to study abroad for an undergraduate degree?",
      answer:
        "Costs vary depending on the country, university, and program. Consider tuition fees, accommodation, living expenses, travel, and health insurance. Many universities offer scholarships and financial aid for international students.",
    },
    {
      question:
        "Are there scholarships or financial aid available for international students?",
      answer:
        "Yes, many universities and organizations offer scholarships, grants, and financial aid to international students based on academic merit, financial need, or specific criteria such as field of study or country of origin.",
    },
    {
      question: "What are the language requirements for studying abroad?",
      answer:
        "Most universities require proof of English language proficiency for non-native speakers, usually through tests like IELTS or TOEFL. Some countries may require proficiency in their native language.",
    },
    {
      question: "Can I work while studying as an international student?",
      answer:
        "Many countries allow international students to work part-time during the academic year and full-time during breaks. Check the specific regulations and visa conditions of the country you plan to study in.",
    },
    {
      question:
        "What support services are available for international students?",
      answer:
        "Universities often provide support services such as orientation programs, academic advising, counseling, career services, language support, and social activities to help international students adjust and succeed.",
    },
    {
      question: "What are the visa requirements for studying abroad?",
      answer:
        "Visa requirements vary by country. Generally, you need to obtain a student visa, which may require proof of admission, financial stability, health insurance, and a valid passport. Check the embassy or consulate website of the destination country for detailed information.",
    },
    {
      question: "How can studying abroad benefit my future career?",
      answer:
        "Studying abroad can enhance your resume by providing international experience, improving language skills, and developing cross-cultural competencies. It also offers opportunities to build a global network, gain unique perspectives, and access diverse job markets.",
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
    {
      country: "New Zealand",
      description:
        "With a welcoming environment, excellent support services for international students, and high-quality education, New Zealand is a great destination. Universities like the University of Auckland and University of Otago are well-regarded.",
      image: "/neww.webp",
    },
    {
      country: "Japan",
      description:
        "Known for its advanced technology and innovation, Japan offers high-quality education and unique cultural experiences. Universities like the University of Tokyo and Kyoto University are among the best in Asia.",
      image: "/jap.png",
    },
  ];

  return (
    <StudyPage
      img={mba}
      study="Undergrad"
      mainDesc={mainDesc}
      smallStudy="UG"
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

export default Undergrad;
