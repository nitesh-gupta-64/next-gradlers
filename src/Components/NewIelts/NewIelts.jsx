import React from "react";
import TestPrep from "../TestPrep/TestPrep";
import test from "@/../public/gradlers/3.jpg";
import newz from "@/../public/neww.webp";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";

const NewIelts = () => {
  const info = {
    overview:
      "The International English Language Testing System (IELTS) stands as one of the most recognized English language tests globally. It serves as a benchmark for universities, consulates, and employers to gauge an individual's English proficiency. Achieving top IELTS score is pivotal to those aspiring to pursue opportunities in English Speaking countries.",
    info: "The test is taken by more than 3 million test takers worldwide annually and tests an individual's ability to speak, read and write English fluently.",
    types: [
      "IELTS Academics (For Studies Abroad)",
      "IELTS General (For Immigration, PR & Work)",
    ],
    prep: "Gradlers IELTS prep offers structured and tailored programs designed to help you excel in the test. Our course is backed by comprehensive training material, expert instructors, and diverse training options that makes us the first choice for IELTS preparation.",
  };
  const why = [
    {
      Title: "10,000+ Institutions",
      Description:
        "More than 10,000 institutions around the world accept IELTS scores.",
    },
    {
      Title: "1.4 Million+ IELTS Aspirants",
      Description:
        "In India, there are an estimated 1.3 to 1.4 million IELTS test takers every year.",
    },
    {
      Title: "140+ Countries",
      Description: "The IELTS is conducted in 140 countries around the world.",
    },
    {
      Title: "Test Formats and Validity",
      Description:
        "Both Paper & Pencil and Computer delivered. Valid for 2-Years",
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
    "Anyone above 16 years old can take IELTS with no maximum age gap.",
  ];

  const whoIf = [
    "Planning to migrate to an English-speaking country.",
    " Applying for admission to foreign universities.",
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
      section: "Reading",
      tasks: "3 Passages, 40 questions",
      duration: "60 Mins",
    },
    {
      section: "Writing",
      tasks: "2 tasks, 1 question each",
      duration: "60 Mins",
    },
    {
      section: "Listening",
      tasks: "4 recordings, 1 question in each",
      duration: "30 Mins + 10 Mins transfer time",
    },
    {
      section: "Speaking",
      tasks: "3 Parts, questions vary",
      duration: "11-14 Mins",
    },
  ];

  const patternDescription = [
    "The IELTS test is for 2 hours 45 minutes duration and comprises 4 sections to test the English language ability of the testing individual. Reading, listening, speaking, Writing skills will be tested during the exam.",
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
      image: "/sol1.png",
      description: "Private tutor",
    },
    {
      image: "/sol2.png",
      description: "Night classes",
    },
    {
      image: "/sol3.png",
      description: "Live classes",
    },
    {
      image: "/sol4.png",
      description: "Early morning classes",
    },
  ];

  const faqs = [
    {
      question: "How do I register for the IELTS?",
      answer:
        "You can register online from the official website or visit the nearest IDP branch.",
    },
    {
      question: "How many times in a year is the IELTS exam held?",
      answer: "IELTS is conducted 4 times a month and 48 times a year.",
    },
    {
      question: "How many times can I take the IELTS?",
      answer:
        "IELTS can be taken as many times as one pleases. There is no limit to the number of IELTS tests that one can take. However, you will need to pay the test fees for each attempt that you take.",
    },
    {
      question: "What is the validity of the IELTS exam?",
      answer:
        "An IELTS score is valid for 2 years from the date the results were published.",
    },
    {
      question: "How soon do I get my IELTS score?",
      answer:
        "The results come live within 3-5 days for a digital test and after 13 days for a paper-based test.",
    },
    {
      question:
        "If I take the IELTS more than once, which score will the universities consider?",
      answer:
        "Universities consider the score that you have mentioned in your application. You can mention your highest score if it is valid.",
    },
    {
      question:
        "Do I need to have an IELTS score when applying to universities?",
      answer:
        "A valid IELTS score must be mentioned in your university application form.",
    },
    {
      question: "What is IELTS IDP?",
      answer:
        "IDP (International Development Program) is an organization that offers placements for many countries like the UK, Canada, and Australia. IDP has branches in 31 countries. The IDP organizes the IELTS exam in 56 countries. The exam was conducted in 1400 test locations and 260 computer-authorized test centers worldwide.",
    },
    {
      question: "Is there any difference between IDP IELTS and IELTS?",
      answer: "There is no difference between both the tests.",
    },
    {
      question: "Is PTE easier than IELTS?",
      answer:
        "PTE and IELTS are English language proficiency tests in high demand. PTE is considered easier than the IELTS by some due to its modular structure and easier preparation. However, opinions vary, and some find the reading section of PTE more challenging than IELTS.",
    },
    {
      question: "What is the ideal time for IELTS preparation?",
      answer:
        "It will take approximately 2 to 3 months to prepare for the IELTS. Plan a schedule and work accordingly to clear the exam with a high score. Take several mock tests before giving the actual examination. The chance of getting a high band score will increase.",
    },
    {
      question: "When can I check the IELTS result?",
      answer:
        "IELTS Computer-based test results will be released within 3 to 5 days and paper-based test results will be made accessible online at 12:00 a.m. GMT on the 13th day after the test.",
    },
  ];

  return (
    <TestPrep
      nav="English Proficiency/ IELTS"
      img={test}
      test="IELTS"
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
      faqs={faqs}
    />
  );
};

export default NewIelts;
