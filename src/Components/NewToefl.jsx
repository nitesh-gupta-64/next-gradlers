import React from "react";
import test from "@/../public/gradlers/1.jpg";
import newz from "@/../public/neww.webp";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";
import TestPrep from "./TestPrep/TestPrep";

const NewToefl = () => {
  const info = {
    overview:
      "Test of English as a Foreign Language (TOEFL), is the most widely accepted English language test that can help you “go anywhere”. Universities, workplaces and immigration departments across the English speaking world use TOEFL to gauge English comprehension abilities of candidates. TOEFL scores are accepted by more than 10,000 universities and other institutions in over 150 countries, including Australia, Canada, New Zealand, the US, the UK and all across Europe and Asia. Infact, it is the only test that simulates university classroom and campus life and was developed with the help of leading universities.",
    info: "Gradlers TOEFL prep offers structured and tailored programs designed to help you excel in the real test. Our course is backed by comprehensive training material, expert instructors, and diverse training options that make us the first choice for TOEFL preparation.",
  };
  const why = [
    {
      Title: "10,000+ Institutions",
      Description:
        "More than 10,000 institutions around the world accept TOEFL scores.",
    },
    {
      Title: "2.3 Million+ TOEFL Aspirants",
      Description:
        "In India, there are an estimated 2.3 to 2.4 million TOEFL test takers every year.",
    },
    {
      Title: "150+ Countries",
      Description: "The TOEFL is conducted in 150 countries around the world.",
    },
    {
      Title: "4500+ Test Centers",
      Description:
        "The TOEFL is conducted in 4,500 test centers all over the world ",
    },
  ];

  const whyGradlers = [
    {
      Image: "/whyg1.png",
      Description: "Best fit Study Plans",
    },
    {
      Image: "/whyg2.png",
      Description: "Best guidance for a perfect score",
    },
    {
      Image: "/whyg3.png",
      Description: "High quality Practice Material",
    },
    {
      Image: "/whyg4.png",
      Description: "Score Improvement Plan",
    },
    {
      Image: "/whyg5.png",
      Description: "Learn anytime and anywhere",
    },
    {
      Image: "/whyg6.png",
      Description: "Experienced Trainers",
    },
    {
      Image: "/whyg7.png",
      Description: "Classroom and LIVE training",
    },
    {
      Image: "/whyg8.png",
      Description: "Convenient & Flexible timings",
    },
  ];

  const who = [
    "Age limit: Must be 18 Years old. There is no age restriction on the upper age limit.",
    "Educational Qualification: Applicants must have completed 10+2/intermediate from any recognized board.",
    "Candidates below the age limit of 18 must submit their parent's consent.",
  ];

  const whoIf = [
    "Planning to migrate to an English-speaking country.",
    "Applying for admission to foreign universities.",
    "Planning to get better career/work opportunities abroad.",
  ];

  const data = [
    {
      image: aus,
      name: "Australlia",
    },
    {
      image: can,
      name: "Canada",
    },
    {
      image: newz,
      name: "New Zealand",
    },
    {
      image: usa,
      name: "USA",
    },
    {
      image: uk,
      name: "United Kingdom",
    },
  ];

  const pattern = [
    {
      section: "TOEFL Reading Section",
      tasks: "20 Questions",
      duration: "35 Mins",
    },
    {
      section: "TOEFL Listening Section",
      tasks: "28 Questions",
      duration: "36 Mins",
    },
    {
      section: "TOEFL Speaking Section",
      tasks: "4 tasks",
      duration: "16 Mins",
    },
    {
      section: "TOEFL Writing Section",
      tasks: "2 tasks",
      duration: "29 Mins",
    },
  ];

  const patternDescription = [
    "The TOEFL test is of 1 hour 56 minutes duration and comprises 4 sections. Reading, listening, speaking, Writing skills will be tested during the exam.",
  ];

  const ace = [
    {
      Image: "/ace1.png",
      Description: "Choose the right prep course",
    },
    {
      Image: "/ace2.png",
      Description: "Set a target score",
    },
    {
      Image: "/ace3.png",
      Description: "Rigorous Self-Practice",
    },
    {
      Image: "/ace4.png",
      Description: "Improve vocabulary",
    },
    {
      Image: "/ace5.png",
      Description: "Regularly attempt section-wise tests",
    },
    {
      Image: "/ace1.png",
      Description: "Take minimum 5 full-length mock tests",
    },
  ];

  const prep = [
    {
      Image: "/prep1.png",
      Description: "Self prep",
    },
    {
      Image: "/prep3.png",
      Description: "Standard batch",
    },
    {
      Image: "/prep4.png",
      Description: "Private 1-on-1",
    },
  ];

  const sol = [
    {
      image: "/sol4.png",
      description: "In-Class Training",
    },
    {
      image: "/sol3.png",
      description: "LIVE Online training",
    },
    {
      image: "/sol1.png",
      description: "Private Tutoring (1-on-1)",
    },
  ];

  const toeflFaqs = [
    {
      question: "How can I prepare for the TOEFL test?",
      answer:
        "To prepare for the TOEFL test, practice extensively with numerous online practice tests from different institutions. Utilize official practice tests to simulate the real test experience, review and answer questions, and receive scores within 24 hours.",
    },
    {
      question: "How many questions are there on the TOEFL test?",
      answer:
        "Reading – 30 to 40 Questions<br />Listening – 28 to 39 Questions<br />Speaking – 4 Tasks<br />Writing- 2 Tasks. The number of test questions and the test duration may vary between test administrations. Reading and listening sections may include additional unscored questions.",
    },
    {
      question: "What are the late fee charges for TOEFL?",
      answer:
        "If registration is not completed 7 days prior to the test date, a late fee of US $40 applies. Late registration closes 2 days before the test date.",
    },
    {
      question: "What is the eligibility criterion for TOEFL 2024?",
      answer:
        "There is no specific eligibility criterion for the TOEFL exam. Anyone wishing to work or study abroad can take the exam to demonstrate English language proficiency. Generally, those who have completed high school or equivalent are eligible.",
    },
    {
      question: "What will I need to be admitted to the TOEFL test center?",
      answer:
        "You will need an admission ticket or official authorization, your official identification document, and a completed photo file record with a recent photo attached.",
    },
    {
      question:
        "When will my TOEFL test scores be mailed? Can I receive them early?",
      answer:
        "Official score reports are sent to designated recipients within 11 days after the test. You can view your scores online or via the TOEFL official app approximately 6 days after the test.",
    },
    {
      question: "How many times in a year is the TOEFL exam held?",
      answer: "TOEFL is conducted more than 60 times a year globally.",
    },
    {
      question: "How many times can I take the TOEFL?",
      answer:
        "You can take the TOEFL as many times as you want, with a minimum 12-day interval between test dates.",
    },
    {
      question: "What is the validity of the TOEFL exam?",
      answer: "TOEFL scores are valid for two years from the test date.",
    },
    {
      question: "How soon do I get my score?",
      answer:
        "TOEFL scores are available within 4 to 8 days after taking the test.",
    },
    {
      question: "How do I pass on my score to the colleges?",
      answer:
        "You can send your TOEFL scores through your ETS account by selecting the “Send Additional Score Reports” option.",
    },
    {
      question:
        "Do universities consider photocopies of the TOEFL scorecard? Do I have to send scores through ETS?",
      answer:
        "Universities do not accept photocopies of TOEFL scorecards. Scores must be sent through ETS.",
    },
    {
      question:
        "Do I need to have a TOEFL score when applying to universities?",
      answer:
        "Yes, a valid TOEFL score is required for university applications.",
    },
    {
      question:
        "Is the TOEFL mandatory for applying to undergraduate programs outside India?",
      answer:
        "TOEFL or other English language proficiency tests like IELTS or PTE are generally required for undergraduate programs outside India.",
    },
    {
      question: "What is the minimum TOEFL score that I need?",
      answer:
        "Minimum TOEFL scores required vary by institution, ranging typically from 61 to 109 points.",
    },
    {
      question: "How much time does TOEFL preparation take?",
      answer:
        "TOEFL preparation typically takes 1 to 3 months, depending on individual skills and proficiency level.",
    },
    {
      question: "What is a good score in TOEFL?",
      answer:
        "A score of 85-100 is considered good on the TOEFL exam, though requirements may vary by university.",
    },
    {
      question: "What is TOEFL iBT?",
      answer:
        "TOEFL iBT (Test of English as a Foreign Language Internet-based Test) is the English language proficiency test used by non-native English speakers seeking admission to international universities.",
    },
    {
      question: "Is TOEFL harder than IELTS?",
      answer:
        "The difficulty level of TOEFL and IELTS varies based on perspective. Generally, TOEFL is considered more challenging in its reading section, which focuses on academic texts.",
    },
    {
      question: "How much time does TOEFL preparation take?",
      answer:
        "TOEFL preparation typically takes 1 to 3 months, depending on individual skills and proficiency level. Establishing a study schedule and taking practice tests can aid in achieving a high score.",
    },
  ];

  return (
    <TestPrep
      nav="English Proficiency/ TOEFL"
      img={test}
      test="TOEFL"
      about={info}
      why={why}
      whyGradlers={whyGradlers}
      who={who}
      whoIf={whoIf}
      countries={data}
      pattern={pattern}
      patternDesc={patternDescription}
      ace={ace}
      prep={prep}
      sol={sol}
      faqs={toeflFaqs}
    />
  );
};

export default NewToefl;
