import React from "react";
import test from "@/../public/gradlers/11.jpg";
import newz from "@/../public/neww.webp";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";
import ger from "@/../public/ger.png";
import TestPrep from "./TestPrep/TestPrep";

const NewGmat = () => {
  const info = {
    overview:
      "The GMAT exam is an admission test used by premier business schools across the globe for admissions into their graduate business and management programs. The GMAT helps the candidate prove their commitment to and eligibility for the MBA or business master’s degree that demonstrates their problem-solving abilities and critical reasoning skills.",
    info: "Having a strong GMAT score ensures a higher chance of acceptance and high probability of getting scholarship from top B-schools.",
  };
  const why = [
    {
      Title: "Designed for Management",
      Description:
        "GMAT is the only exam specifically designed for management related programs",
    },
    {
      Title: "Widely Accepted",
      Description:
        "9/10 MBA new b-school enrolments are made using a GMAT score",
    },
    {
      Title: "Top Business School",
      Description:
        "A high GMAT score is necessary to get into a top business school",
    },
    {
      Title: "Schlolarship",
      Description:
        "A high GMAT score enhances your chances of getting a scholarship",
    },
    {
      Title: "Salary",
      Description: "A high GMAT score leads to a better post MBA salary",
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
    "Any candidate, who wants to apply for management programmes and is 18 years or above (if a candidate is between 13 and 17 years, he/she may appear for the GMAT after providing written approval or consent by his/her legal guardians or parents), can apply for the GMAT exam 2024.",
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
      image: ger,
      name: "Germany",
    },
    {
      image: newz,
      name: "New Zealand",
    },
  ];

  const pattern = [
    {
      section: "Quantitative Reasoning",
      tasks: "21 Questions",
      duration: "45 minutes",
    },
    {
      section: "Verbal Reasoning",
      tasks: "23 Questions",
      duration: "45 minutes",
    },
    {
      section: "Data Insights",
      tasks: "20 Questions",
      duration: "45 minutes",
    },
  ];

  const patternDescription = [
    "The GMAT exam is 2 hours and 15 minutes long (with one optional 10-minute break) and consists of 64 questions in total.",
  ];

  const ace = [
    {
      Image: "/ace1.png",
      Description: "Understand the Format",
    },
    {
      Image: "/ace2.png",
      Description: "Create a Study Plan",
    },
    {
      Image: "/ace3.png",
      Description: "Use Official GMAT Prep Materials",
    },
    {
      Image: "/ace4.png",
      Description: "Focus on Weak Areas",
    },
    {
      Image: "/ace5.png",
      Description: "Practice Time Management",
    },
    {
      Image: "/ace4.png",
      Description: "Review Basic Concepts",
    },
    {
      Image: "/ace2.png",
      Description: "Take Full-Length Practice Tests",
    },
    {
      Image: "/ace3.png",
      Description: "Analyze Practice Tests",
    },
    {
      Image: "/ace1.png",
      Description: "Stay Positive and Confident",
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

  const gmatFaqs = [
    {
      question: "What is the required qualification for GMAT?",
      answer:
        "The GMAC, the governing body for the GMAT has not announced any official statement regarding the qualification you need to have in order to appear for the test. If you are a student planning to enroll in an MBA program, you should have a graduate degree from a recognized university (in any discipline).",
    },
    {
      question: "Is there any upper age limit for GMAT?",
      answer: "No, there is no upper age limit for taking the GMAT.",
    },
    {
      question: "What are the eligibility criteria for GMAT?",
      answer:
        "As per GMAC, the governing body for the GMAT, there are no specific eligibility criteria for appearing for the GMAT. However, before applying to any college or university it is suggested to check what all your college or university demands. When it comes to age, the candidate must have completed 18 years of age; however, there is no upper age limit for the candidate applying to take the GMAT.",
    },
    {
      question: "Can I take the GMAT after 12th or high school?",
      answer:
        "Yes, you may take the GMAT after completing your 12th grade or High school. However, for getting admission into a B-school, you should have a graduate degree from a recognized university and also note that the GMAT score is valid only for 5 years.",
    },
    {
      question: "Is there any age limit for GMAT?",
      answer:
        "There is no upper age limit for the candidate applying to take the GMAT; however, the minimum age limit for the same is 18 years. In certain cases, a candidate below 18 years of age is allowed to take the GMAT provided that they submit a written consent by their parents or legal guardians.",
    },
    {
      question: "Is graduation necessary for the GMAT exam?",
      answer:
        "The GMAC, the governing body for the GMAT has not announced any official statement regarding the qualification you need to have in order to appear for the test. If you are a student planning to enroll in an MBA program, you should have a graduate degree from a recognized university (in any discipline).",
    },
    {
      question: "I don’t have a passport. Can I still take the GMAT?",
      answer:
        "For taking the GMAT at the test center, only a valid passport is accepted as identity proof. However, for the GMAT Online exam, you have the option to use either a valid Passport or an Aadhaar Card for taking the GMAT.",
    },
    {
      question:
        "Is there any limit to the number of times I can take the GMAT?",
      answer:
        "You can retake the GMAT test once every 16 days, up to 5 times in a rolling year and 8 times in a lifetime. This applies even if you cancelled your scores in the previous attempts. Note that you may take the GMAT Online test at most two times and these will be included in the lifetime limits.",
    },
    {
      question: "Is there any academic qualification required for the GMAT?",
      answer:
        "The GMAC, the governing body for the GMAT has not announced any official statement regarding the qualification you need to have in order to appear for the test.",
    },
    {
      question: "How will I get my result?",
      answer: (
        <>
          There are two score reports – Unofficial Score Report and Official
          Score Report. As soon as you complete the test, you will be able to
          see your Unofficial score report. This includes your Quantitative,
          Verbal, Integrated Reasoning, and Total scores. Your Official score
          report will include your AWA score too and will be available on your
          mba.com account. <br />
          • For Test-center exam – within three weeks <br />• For Online exam
          (at home) – within 7 business days
        </>
      ),
    },
  ];

  return (
    <TestPrep
      nav="Standardised Test/ GMAT"
      img={test}
      test="GMAT"
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
      faqs={gmatFaqs}
    />
  );
};

export default NewGmat;
