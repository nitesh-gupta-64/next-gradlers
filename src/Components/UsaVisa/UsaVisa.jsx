import React from "react";
import styles from "./UsaVisa.module.css";
import countryImg from "@/../public/gradlers/Iowa State University, usa.jpg";
import VisaPage from "../VisaPage/VisaPage";

const UsaVisa = () => {
  const mainDesc = `The USA F-1 visa is a non-immigrant student visa that allows international students to pursue academic studies or language training programs at accredited U.S. institutions. It is the most common visa for those aiming to study in the United States. Applicants must be enrolled in a full-time program and demonstrate sufficient financial resources to cover their stay. The F-1 visa also permits limited on-campus employment and, post-graduation, offers opportunities for Optional Practical Training (OPT) in their field of study. This visa is a gateway for students to access world-class education and diverse cultural experiences in the U.S.`;

  const visaDesc =
    "There are 3 different types of visas available for students seeking to pursue graduate, postgraduate, master's degree or vocational courses. These Visas are further classified into sub-categories based on the visa application type.";

  const visa = [
    {
      Image: "/v11.png",
      Heading: "F Visa",
      Description: "F Visa",
      Circle: "/v12.png",
      Types: [
        {
          Type: "F-1 Visa",
          Description: "For full-time students.",
        },
        {
          Type: "F-2 Visa",
          Description: "For dependents of F-1 Visa holders.",
        },
        {
          Type: "F-3 Visa",
          Description:
            "For Mexican and Canadian students residing in their country seeking to pursue part-time or full-time courses in the US.",
        },
      ],
    },
    {
      Image: "/v21.png",
      Heading: "M Visa",
      Description: "M Visa",
      Circle: "/v22.png",
      Types: [
        {
          Type: "M-1 Visa",
          Description: "For vocational or non-academic studies.",
        },
        {
          Type: "M-2 Visa",
          Description: "For dependents of M-1 Visa holders.",
        },
        {
          Type: "M-3 Visa",
          Description:
            "For border commuters to pursue vocational and non-academic courses.",
        },
      ],
    },
    {
      Image: "/gradlers/4.jpg",
      Heading: "J Visa",
      Description: "J Visa",
      Circle: "/v32.png",
      Types: [
        {
          Type: "J-1 Visa",
          Description: "For exchange students on a relevant exchange program.",
        },
        {
          Type: "J-2 Visa",
          Description: "For dependents of J-1 Visa holders.",
        },
      ],
    },
  ];

  const eligibility = {
    Heading:
      "A student seeking to migrate to the USA for studying purposes must meet the required eligibility criteria:",
    Description: [
      "Apply for an SEVP approved school in the US.",
      "Must be enrolled in a full-time program in an institution.",
      "Must have cleared any language proficiency tests and standardized tests like IELTS, TOEFL, SAT, GRE, or GMAT.",
      "Must have proof of sufficient financial funding.",
      "When applying for a USA student Visa F1, the applicant must reside outside the USA.",
    ],
  };
  const requirement = {
    Heading:
      "The following are the required documents to apply for a USA student Visa:",
    Description: [
      "Confirmation page of DS-160.",
      "Educational transcripts.",
      "Form I-20.",
      "Payment of application fees for SEVIS.",
      "Language Proficiency Certification.",
      "Application as a non-immigrant.",
    ],
  };

  const steps = [
    "Check your eligibility for a USA Visa.",
    "Get ready with all the required supporting documents.",
    "Apply for the right USA visa online.",
    "Get your biometrics and visa appointment.",
    "Appear for the visa interview.",
    "Wait for the approval status.",
    "Fly to the USA for your education.",
  ];

  const feesDesc =
    "The cost of obtaining a USA F-1 visa from India includes two components:";

  const fees = [
    {
      Heading: "SEVIS fee",
      Description:
        "The Student and Exchange Visitor Information System (SEVIS) fee is $350. This fee supports the system that manages data for international students and exchange visitors.",
    },
    {
      Heading: "Visa Application Fee",
      Description:
        "The non-refundable visa application fee, also known as the Machine Readable Visa (MRV) fee, is $185. This fee is required to schedule a visa interview appointment.",
    },
  ];

  const services = [
    {
      Image: "/vi11.png",
      Heading: "Visa Counselling",
      Circle: "/vi12.png",
      Description:
        "Personalized Guidance: One-on-one sessions to understand students' educational and career goals, helping them choose the appropriate visa type. Eligibility Assessment: Evaluating students' eligibility for various visa categories based on their academic background and future plans.",
    },
    {
      Image: "/vi21.png",
      Heading: "Visa Application Assistance",
      Circle: "/vi22.png",
      Description:
        "Form Filling: Helping students accurately complete the DS-160 visa application form. Document Preparation: Assisting with the collection, organization, and expert review of required documents, such as I-20 forms, financial statements, and academic transcripts.",
    },
    {
      Image: "/vi31.png",
      Heading: "SEVIS Fee Payment",
      Circle: "/vi32.png",
      Description:
        "SEVIS Fee Guidance: Assisting students in paying the SEVIS fee and ensuring they receive the necessary receipt for their visa interview.",
    },
    {
      Image: "/vi41.png",
      Heading: "Interview Preparation",
      Circle: "/vi42.png",
      Description:
        "Mock Interviews: Conducting practice interviews to help students become familiar with the types of questions they may be asked. Tips and Strategies: Providing advice on how to answer questions confidently and what documents to take.",
    },
    {
      Image: "/vi51.png",
      Heading: "Visa Appointment Scheduling",
      Circle: "/vi52.png",
      Description:
        "Appointment Booking: Helping students schedule their visa interview appointments at the nearest U.S. Embassy or Consulate.",
    },
    {
      Image: "/vi61.png",
      Heading: "Pre-Departure Briefing",
      Circle: "/vi62.png",
      Description:
        "Travel Preparation: Offering guidance on travel arrangements, what to pack, and cultural adjustments. Arrival Procedures: Informing students about what to expect upon arrival in the U.S., including immigration procedures and transportation options.",
    },
  ];

  return (
    <VisaPage
      img={countryImg}
      country="USA"
      mainDesc={mainDesc}
      visaDesc={visaDesc}
      visa={visa}
      eligibility={eligibility}
      requirement={requirement}
      steps={steps}
      feesDesc={feesDesc}
      fees={fees}
      services={services}
      heading="USA F-1 Visa (Student Visa)"
    />
  );
};

export default UsaVisa;
