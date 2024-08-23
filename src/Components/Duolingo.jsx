import React from "react";
import TestPrep from "./TestPrep/TestPrep";
import test from "@/../public/gradlers/26.jpg";
import newz from "@/../public/neww.webp";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";
import ire from "@/../public/assets/images/ireland.png";

const Duolingo = () => {
  const info = {
    overview:
      "The Duolingo English Test (DET) is an online language proficiency exam designed for international students and institutions. It's a convenient alternative to traditional exams like IELTS or TOEFL, offering flexibility with its 24/7 availability and affordable fee. The test assesses reading, writing, listening, and speaking skills through a series of interactive questions. Completed in under an hour, the results are available within 48 hours and are accepted by numerous universities worldwide. With a user-friendly interface and no need for travel, the DET is ideal for those seeking a quick, accessible, and recognized English language certification.",
  };
  const why = [
    {
      Title: "Convenience",
      Description:
        "DET is entirely online, available 24/7, and can be taken from the comfort of your home. No need to schedule or travel to a test center.",
    },
    {
      Title: "Affordability",
      Description:
        "The DET is significantly cheaper than other English proficiency tests, making it accessible to a broader range of students.",
    },
    {
      Title: "Quick Results",
      Description:
        "Results are delivered within 48 hours, faster than most traditional exams, allowing you to plan your applications promptly.",
    },
    {
      Title: "Wide Acceptance",
      Description:
        "Many universities and institutions worldwide accept DET, making it a viable option for international students.",
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
    "The Duolingo English Test (DET) is open to anyone needing to demonstrate English proficiency for academic, professional, or personal purposes. ",
  ];

  const whoIf = [
    "Applying to English-speaking universities or programs where proof of English proficiency is required.",
    "Seeking employment in positions that require strong English language skills.",
    "Interested in assessing their English language skills for personal growth or learning goals.",
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
    {
      image: ire,
      name: "Ireland",
    },
  ];

  const pattern = [
    {
      section: "Introduction and onboarding",
      tasks:
        "To verify if the device’s microphone, camera, and speakers are functioning well, You should submit your ID (driver’s licence, passport, or government ID) for proof, You would also go through the guidelines and regulations of the test",
      duration: "5 Mins",
    },
    {
      section: "Adaptive test",
      tasks:
        "A graded section to test the participant’s knowledge with the help of objective and descriptive questions, Questions include multiple choice questions, fill in the blanks, match the following, and so on, There is no specific model, as the difficulty level changes based on the performance",
      duration: "45 Mins",
    },
    {
      section: "Writing and speaking sample",
      tasks:
        "An ungraded video interview to analyse your writing and speaking skills in the English language",
      duration: "10 Mins",
    },
  ];

  const patternDescription = [
    "The DET test is for 2 hours 45 minutes duration and comprises 4 sections to test the English language ability of the testing individual. Reading, listening, speaking, Writing skills will be tested during the exam.",
  ];

  const ace = [
    {
      Image: "/ace1.png",
      Description: "Understand the test format",
    },
    {
      Image: "/ace2.png",
      Description: "Set a target score",
    },
    {
      Image: "/ace4.png",
      Description: "Practice time management",
    },
    {
      Image: "/ace3.png",
      Description: "Rigorous Self-Practice",
    },
    {
      Image: "/ace5.png",
      Description: "Simulate Test Conditions",
    },
    {
      Image: "/ace4.png",
      Description: "Technical Preparedness",
    },
  ];

  const prep = [
    {
      Image: "/prep1.png",
      Description: "DET Prep 7 Day Boot-Camp",
    },
  ];

  const sol = [
    {
      image: "/sol3.png",
      description: "Live classes",
    },
    {
      image: "/sol1.png",
      description: "Class-room Coaching",
    },
  ];

  const detFAQ = [
    {
      question: "What is the Duolingo English Test (DET)?",
      answer:
        "The Duolingo English Test (DET) is an online English proficiency exam designed for non-native English speakers. It assesses reading, writing, listening, and speaking skills and is accepted by many universities and institutions worldwide as an alternative to traditional tests like TOEFL and IELTS.",
    },
    {
      question: "How long does the Duolingo English Test take?",
      answer:
        "The DET takes about 1 hour to complete. This includes a brief introduction and tutorial, a 45-minute adaptive test, and a 10-minute ungraded video interview and writing sample.",
    },
    {
      question: "How much does the Duolingo English Test cost?",
      answer:
        "The DET costs $59 USD, making it a more affordable option compared to other English proficiency tests. This fee includes the test itself and the ability to send your scores to an unlimited number of institutions.",
    },
    {
      question: "How is the Duolingo English Test scored?",
      answer:
        "The DET is scored on a scale from 10 to 160 in 5-point increments. The score reflects your overall English proficiency level, with higher scores indicating greater proficiency. Scores are available within 48 hours of completing the test.",
    },
    {
      question: "Can I retake the Duolingo English Test?",
      answer:
        "Yes, you can retake the DET, but you must wait for at least 30 days between attempts. It's recommended to review your performance and practice before retaking the test to improve your score.",
    },
    {
      question: "How can I send my DET scores to universities?",
      answer:
        "You can send your DET scores directly to universities through the Duolingo English Test website. After receiving your scores, you can select the institutions you want to send them to, and there's no additional cost for sending your scores to multiple universities.",
    },
    {
      question: "Is the Duolingo English Test accepted by all universities?",
      answer:
        "The DET is accepted by many universities and institutions around the world, particularly in the United States, Canada, the UK, and Australia. However, it's essential to check with each specific institution to confirm their acceptance of the DET for admissions.",
    },
  ];

  return (
    <TestPrep
      nav="English Proficiency/ DET"
      img={test}
      test="DET"
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
      faqs={detFAQ}
    />
  );
};

export default Duolingo;
