import React from "react";
import TestPrep from "./TestPrep/TestPrep";
import test from "@/../public/gradlers/2.jpg";
import newz from "@/../public/neww.webp";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";

const NewPte = () => {
  const info = {
    overview:
      "The Pearson Test of English (PTE) is an international standardized English proficiency test dedicated to assessing and evaluating the English language usage of a non-native speaker of English who wishes to study, work or migrate to an English speaking country. The PTE score plays an important role in securing admission, a visa, or a job in leading English-speaking countries. Gradlers PTE prep is designed to help you achieve your dream of studying or settling abroad.",
    info: "The PTE score is accepted by various academic institutes worldwide including Harvard Business School, INSEAD and Yale University. A good PTE score can greatly improve your chances of success.",
  };
  const why = [
    {
      Title: "Flexible",
      Description:
        "Test dates are available for almost 360 days a year in over 250 centers worldwide",
    },
    {
      Title: "Fast",
      Description: "Results are declared typically within 5 working days",
    },
    {
      Title: "Fair",
      Description:
        "Since the test uses computerized marking, it ensures that all test takers are scored accurately and impartially",
    },
    {
      Title: "Secure",
      Description:
        "Various measures are taken to ensure test security, like randomized test forms, palm-vein scanning, and data forensics",
    },
    {
      Title: "Unlimited",
      Description:
        "Test takers can send their test results to as many Universities or Institutions as they like with no extra payment",
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
    "You must be at least 16 years old.",
    "You must have completed your secondary education",
    "If you are under 18, you must provide the parent consent letter",
    "There is no upper age limit or qualification for PTE exam.",
    "Also, there is no limit on the number of attempts.",
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
      image: newz,
      name: "New Zealand",
    },
    {
      image: can,
      name: "Canada",
    },
  ];

  const pattern = [
    {
      section: "Speaking & Writing",
      tasks: "28 - 36 Questions",
      duration: "54 - 67 Mins",
    },
    {
      section: "Reading",
      tasks: "13 - 18 Questions",
      duration: "29 - 30 Mins",
    },
    {
      section: "Listening",
      tasks: "12 - 20 Questions",
      duration: "30 - 43 Mins",
    },
  ];

  const patternDescription = [
    "The PTE test is for 2 hours 45 minutes duration and comprises 4 sections to test the English language ability of the testing individual. Reading, listening, speaking, Writing skills will be tested during the exam.",
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
      Image: "/prep2.png",
      Description: "Fast-track",
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
      description: "LIVE Online Training",
    },
    {
      image: "/sol1.png",
      description: "Private Tutoring (1-on-1)",
    },
  ];

  const pteFaqs = [
    {
      question: "About the test",
      answer:
        "Launched in 2009. Endorsed by the Graduate Management Admission Council (GMAC).",
    },
    {
      question: "Who accepts?",
      answer: "Most universities accept PTE scores for admission purposes.",
    },
    {
      question: "Who should give this test?",
      answer: "Those who wish to apply to colleges or universities abroad.",
    },
    {
      question: "Eligibility criterion",
      answer: "Candidates must be at least 18 years old or above.",
    },
    {
      question: "Exam Format",
      answer:
        "Similar to IELTS, the PTE test consists of 4 sections – Reading, Listening, Speaking, Writing.",
    },
    {
      question: "Validity of Score",
      answer:
        "PTE scores are valid for 2 years from the date of issue of the result.",
    },
    {
      question: "When is the exam held?",
      answer:
        "The PTE exam is held in more than 200 locations globally, on more than 360 days a year.",
    },
    {
      question: "Who conducts the test?",
      answer:
        "The PTE exam is conducted by Pearson Language Tests and is endorsed by the Graduate Management Admission Council (GMAC).",
    },
  ];

  return (
    <TestPrep
      nav="English Proficiency/ PTE"
      img={test}
      test="PTE"
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
      faqs={pteFaqs}
    />
  );
};

export default NewPte;
