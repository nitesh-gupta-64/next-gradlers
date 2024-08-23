import React from "react";
import test from "@/../public/gradlers/4.jpg";
import newz from "@/../public/neww.webp";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";
import ind from "@/../public/ind.png";
import TestPrep from "./TestPrep/TestPrep";

const NewSat = () => {
  const info = {
    overview:
      "SAT is a standardized entrance exam for admissions to UG programs and is used by most colleges and universities to make their admissions decisions. The new digital SAT is a multiple-choice, computer-based test created and is administered by the College Board.",
    info: "The purpose of the SAT is to measure a high school student's readiness for college, and provide colleges with one common data point that can be used to compare all applicants. College admissions officers will review standardized test scores alongside the high school GPA, the subjects’ student took in high school, letters of recommendation from teachers or mentors, extracurricular activities, admissions interviews, and personal essays. The importance of SAT scores in the college application process varies from school to school. Overall, the higher you score on the SAT the more options for attending and paying for college will be available to the students.",
  };
  const why = [
    {
      Title: "Measure of Readiness",
      Description:
        "SAT test is considered as a measure of a high school student's readiness for college",
    },
    {
      Title: "Standardized Parameter",
      Description:
        "Provide colleges with a standardized parameter to evaluate students and compare all applicants",
    },
    {
      Title: "No. of Times a Year",
      Description: "SAT is conducted by College Board 7 times a year",
    },
    {
      Title: "Types of SAT Exam",
      Description:
        "The first test is the SAT general test. The second is a subject test.",
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

  const who = ["The SAT exam does not have specific age requirements."];

  const whoIf = [];

  const data = [
    {
      image: usa,
      name: "USA",
    },
    {
      image: uk,
      name: "United Kingdom",
    },
    {
      image: can,
      name: "Canada",
    },
    {
      image: aus,
      name: "Australlia",
    },
    {
      image: ind,
      name: "India",
    },
  ];

  const pattern = [
    {
      section: "Reading and Writing",
      tasks:
        "1st module: 25 operational questions and 2 pretest questions, \n \n 2nd module: 25 operational questions and 2 pretest questions",
      duration: "1st module: 32 minutes, 2nd module: 32 minutes",
    },
    {
      section: "Math",
      tasks:
        "1st module: 20 operational questions and 2 pretest questions, 2nd module: 20 operational questions and 2 pretest questions",
      duration: "1st module: 35 minutes, 2nd module: 35 minutes ",
    },
  ];

  const patternDescription = [
    "The structure, content, and multistage adaptiveness of the SAT serve as a measure of students’ college readiness and as a reliable predictor of students’ university performance outcomes. For those seeking SAT exam details, understanding these aspects is crucial.The composite score of the SAT ranges from 400 to 1600 and is a combination of the Reading and Writing section score (200-800) , and Math Section score (200-800). The total duration of the test is 2 Hours and 14 minutes. (With breaks).",
  ];

  const ace = [
    {
      Image: "/ace1.png",
      Description: "Understand the Format",
    },
    {
      Image: "/ace2.png",
      Description: "Study Regularly",
    },
    {
      Image: "/ace3.png",
      Description: "Practice Tests",
    },
    {
      Image: "/ace4.png",
      Description: "Review Mistakes",
    },
    {
      Image: "/ace5.png",
      Description: "Utilize Resources",
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
      image: "/sol3.png",
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
    {
      image: "/sol4.png",
      description: "Morning Batches",
    },
    {
      image: "/sol2.png",
      description: "Week-end Batches",
    },
  ];

  const satFaqs = [
    {
      question: "What is the SAT?",
      answer:
        "The SAT is a standardized test widely used for college admissions in the United States. It assesses a student's readiness for college.",
    },
    {
      question: "Who administers the SAT?",
      answer:
        "The SAT is developed and administered by the College Board, a non-profit organization.",
    },
    {
      question: "What does the SAT test?",
      answer:
        "The SAT tests skills in reading, writing and language, and math, including algebra, problem-solving, and data analysis.",
    },
    {
      question: "How long is the SAT?",
      answer:
        "The SAT is 3 hours long, plus an optional Essay section that adds 50 minutes.",
    },
    {
      question: "When is the SAT offered?",
      answer:
        "The SAT is offered several times a year, typically in August, October, November, December, March, May, and June.",
    },
    {
      question: "How do I register for the SAT?",
      answer:
        "Registration is done online through the College Board website. You'll choose a test date and location, fill out personal information, and pay the registration fee.",
    },
    {
      question: "How much does the SAT cost?",
      answer:
        "As of my last update, the SAT registration fee is around $52 for the basic test, with additional fees for the Essay section and other services.",
    },
    {
      question: "When do I get my SAT scores?",
      answer:
        "Scores are usually available about two to three weeks after the test date. You can view them online through your College Board account.",
    },
    {
      question: "How are SAT scores reported?",
      answer:
        "Scores are reported on a scale from 400 to 1600, combining scores from the Math and Evidence-Based Reading and Writing sections.",
    },
    {
      question: "How should I prepare for the SAT?",
      answer:
        "Effective preparation involves studying the content tested, taking practice tests, reviewing mistakes, and familiarizing yourself with the test format and timing.",
    },
    {
      question: "Are there resources available for SAT preparation?",
      answer:
        "Yes, there are many resources available, including official SAT study guides, online practice tests, prep courses, and tutoring services.",
    },
    {
      question: "What should I bring on test day?",
      answer:
        "You should bring your admission ticket, acceptable photo ID, No. 2 pencils, an eraser, and an approved calculator for the Math section.",
    },
    {
      question: "Can I bring snacks or drinks?",
      answer:
        "Yes, you can bring snacks and drinks for breaks, but they must be consumed outside the testing room during breaks.",
    },
    {
      question: "Should I take the optional Essay section?",
      answer:
        "It depends on the requirements of the colleges you're applying to. Check their admissions guidelines to determine if the Essay section is necessary.",
    },
    {
      question: "How is the SAT Essay scored?",
      answer:
        "The Essay is scored separately on a scale from 6 to 24, based on reading, analysis, and writing skills demonstrated in the essay.",
    },
  ];

  return (
    <TestPrep
      nav="Standardised Test/ SAT"
      img={test}
      test="SAT"
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
      faqs={satFaqs}
    />
  );
};

export default NewSat;
