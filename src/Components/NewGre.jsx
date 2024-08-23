import React from "react";
import test from "@/../public/gradlers/10.jpg";
import newz from "@/../public/neww.webp";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";
import ind from "@/../public/ind.png";
import ger from "@/../public/ger.png";
import jap from "@/../public/jap.png";
import swe from "@/../public/swe.png";
import TestPrep from "./TestPrep/TestPrep";

const NewGre = () => {
  const info = {
    overview:
      "The Graduate Record Examination (GRE) is a standardized test widely used for admission to graduate schools and business programs globally. Administered by the Educational Testing Service (ETS), the GRE assesses verbal reasoning, quantitative reasoning, and analytical writing skills. The exam aims to evaluate a candidate's readiness for advanced academic work and is accepted by thousands of institutions worldwide.",
    info: "Test-takers can choose between the computer-based and paper-based formats, with the computer-based version being more common. Preparing for the GRE typically involves rigorous study, practice tests, and sometimes, preparatory courses. High scores on the GRE can significantly enhance a candidate’s application profile.",
  };
  const why = [
    {
      Title: "Graduate School Admission",
      Description:
        "Many graduate programs require GRE scores as part of their admissions process, making it essential for applicants",
    },
    {
      Title: "Scholarships and Fellowships",
      Description:
        "High GRE scores can make candidates eligible for various scholarships, fellowships, and financial aid opportunities",
    },
    {
      Title: "Career Advancement",
      Description:
        "Earning a graduate degree can open doors to higher-level positions, specialized roles, and increased earning potential",
    },
    {
      Title: "Program Flexibility",
      Description:
        "The GRE is accepted by thousands of institutions worldwide, offering applicants a wide range of programs and schools to choose from",
    },
    {
      Title: "Skill Demonstration",
      Description:
        "The GRE tests verbal reasoning, quantitative reasoning, and analytical writing skills, allowing applicants to showcase their strengths in these areas",
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
    "There are no specific eligibility criteria for the GRE exam, the GRE test is accessible to all aspirants.",
  ];

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
    {
      image: ger,
      name: "Germany",
    },
    {
      image: jap,
      name: "Japan",
    },
    {
      image: swe,
      name: "Sweden",
    },
  ];

  const pattern = [
    {
      section: "Analytical Writing (One section)",
      tasks: "One “Analyze an Issue” task",
      duration: "30 minutes",
    },
    {
      section: "Quantitative Reasoning (Two sections)",
      tasks: "Section 1: 12 questions, Section 2: 15 questions",
      duration: "Section 1: 18 minutes, Section 2: 23 minutes",
    },
    {
      section: "Verbal Reasoning (Two sections)",
      tasks: "Section 1: 12 questions, Section 2: 15 questions",
      duration: "Section 1: 21 minutes, Section 2: 26 minutes",
    },
  ];

  const patternDescription = [
    "According to the latest announcement by ETS, there will be five sections in the ETS GRE exam. Questions in these sections will assess the Analytical writing, verbal reasoning and quantitative reasoning skills of the candidates. Below, is the updated GRE test pattern.",
  ];

  const ace = [
    {
      Image: "/ace1.png",
      Description: "Familiarize yourself with test content",
    },
    {
      Image: "/ace2.png",
      Description: "Use the mark and review feature",
    },
    {
      Image: "/ace3.png",
      Description: "Work on the English Vocabulary",
    },
    {
      Image: "/ace4.png",
      Description: "Pacing on the test is important so pay attention to time",
    },
    {
      Image: "/ace5.png",
      Description: "Regularly take GRE mock tests ",
    },
    {
      Image: "/ace4.png",
      Description: "Review what you write for errors.",
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
    {
      image: "/sol2.png",
      description: "Week-end Batches",
    },
  ];

  const greFaqs = [
    {
      question: "Why should I take the GRE?",
      answer:
        "GRE scores are used by admissions or fellowship panels to supplement your undergraduate records, recommendation letters and other qualifications for graduate-level study.",
    },
    {
      question: "When is it offered?",
      answer:
        "The GRE revised General Test is given year-round at computer-based test centres in most locations around the world. Appointments are scheduled on a first-come, first-served basis.",
    },
    {
      question: "How many times can you take the GRE?",
      answer:
        "You can take the GRE revised General Test (computer-based and paper-based) once every 21 days, but no more than five times within any continuous rolling 12-month period. This applies even if you canceled your scores on a test has taken previously.",
    },
    {
      question: "What is the duration of the GRE Test?",
      answer: "The new GRE test is around 1 hour 58 minutes.",
    },
    {
      question: "How is the GRE designed?",
      answer:
        "GRE is now a multi-stage or adaptive by section. This means that how you perform on the first Verbal Reasoning section will determine the difficulty level of the second Verbal Reasoning section. The same goes for Quantitative Reasoning.",
    },
    {
      question: "What is the test order?",
      answer:
        "The Analytical Writing Assessment section will always be first. The Verbal Reasoning and Quantitative Reasoning sections may appear in any order.",
    },
    {
      question: "How is the GRE scored?",
      answer:
        "The Verbal and Quantitative sections of the GRE are scored between 130 and 170 in one-point increments. The Analytical Writing Assessment (AWA) section is scored on a scale from 0 to 6 in half-point increments.",
    },
    {
      question: "How long are the GRE scores valid?",
      answer: "The GRE scores are valid for 5 years.",
    },
  ];

  return (
    <TestPrep
      nav="Standardised Test/ GRE"
      img={test}
      test="GRE"
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
      faqs={greFaqs}
    />
  );
};

export default NewGre;
