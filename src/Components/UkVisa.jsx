import React from "react";
import countryImg from "@/../public/gradlers/oxford university, uk.jpg";
import VisaPage from "./VisaPage/VisaPage";

const UkVisa = () => {
  const mainDesc = `The UK student visa, also known as the Tier 4 (General) student visa, allows international students to pursue their studies at accredited UK institutions. Applicants must have an offer from a licensed sponsor and demonstrate sufficient funds to cover tuition and living expenses. The visa permits full-time study and limited work hours during term time, with more flexibility during holidays. Additionally, the UK offers a Graduate Route, allowing students to stay and work for up to two years after completing their degree. This visa opens doors to world-class education and vibrant cultural experiences in the UK.`;

  const visaDesc =
    "There are several types of UK student visas catering to different needs and circumstances. Here are the primary types:";

  const visa = [
    {
      Image: "/v11.png",
      Circle: "/v12.png",
      Heading: "Student Visa ",
      Description: "Student Visa ",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students aged 16 or over who wish to study at a higher education institution in the UK.",
        },
        {
          Type: "Requirements",
          Description:
            "Offer from a licensed student sponsor, proof of English language proficiency, and sufficient funds to cover tuition and living expenses.",
        },
      ],
    },
    {
      Image: "/v21.png",
      Circle: "/v22.png",
      Heading: "Child Student Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For children aged 4 to 17 who wish to study at an independent school in the UK.",
        },
        {
          Type: "Requirements",
          Description:
            "Offer from a licensed independent school, proof of sufficient funds, and parental or guardian consent.",
        },
      ],
    },
    {
      Image: "/gradlers/4.jpg",
      Circle: "/v32.png",
      Heading: "Short-term Study Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students who wish to take a short course of study or an English language course in the UK for up to 6 months, or an English language course for up to 11 months.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of acceptance onto a course, sufficient funds for the duration of the stay, and plans to leave the UK at the end of the study period.",
        },
      ],
    },
    {
      Image: "/gradlers/10.jpg",
      Circle: "/v31.png",
      Heading: "Graduate Route Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students who have successfully completed a degree at a UK higher education provider to stay and work in the UK for two years (three years for PhD graduates).",
        },
        {
          Type: "Requirements",
          Description:
            "Successful completion of a degree at a UK higher education provider with a track record of compliance.",
        },
      ],
    },
    {
      Image: "/gradlers/3.jpg",
      Circle: "/gradlers/oxford university, uk.jpg",
      Heading: "Student Route",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students seeking to extend their stay to complete a degree or pursue post-doctoral work.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of ongoing study or research, sufficient funds, and a track record of compliance with visa conditions.",
        },
      ],
    },
  ];

  const eligibility = {
    Heading: "",
    Description: [
      "Must have scored above 60% to 75% in previous studies",
      "CAS (Confirmation of Acceptance for Studies) from a UK institution",
      "University acceptance letter",
      "Previous academic transcripts",
      "IELTS with 6 bands or above, or any other language proficiency proof (depending on the university)",
      "Proof of travel and medical insurance",
    ],
  };
  const requirement = {
    Heading:
      "The following are the required documents to apply for a UK student Visa:",
    Description: [
      "Proof of funds to manage the living expenses during the course",
      "Funds should be maintained for at least 28 days, including the tuition fees and living expenses",
      "Confirmation of acceptance reference number",
      "Documents required to obtain CAS",
      "Medical wellness certificates",
      "Refer to university's requirements list for any specific visa requirements",
    ],
  };

  const steps = [
    "Check if you can apply for the UK Visa.",
    "Get ready with all the required documents.",
    "Apply for a UK visa online.",
    "Wait for the approval status.",
    "Fly to the UK for your education.",
  ];

  const feesDesc =
    "The cost of applying for a UK student visa for Indian students involves several components. Here’s a breakdown of the primary costs";

  const fees = [
    {
      Heading: "Visa Application Fee",
      Description:
        "Student Visa (formerly Tier 4): £363 (approx. ₹36,000) - Short-term Study Visa (up to 6 months) : £97 (approx. ₹9,600) - Short-term Study Visa (11 months English Language Course) :£186 (approx. ₹18,400)",
    },
    {
      Heading: "Immigration Health Surcharge (IHS)",
      Description:
        "The IHS is £470 per year of study. For example, a 3-year course would cost £1,410 (approx. ₹140,000).",
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
      Heading: "Immigration Health Surcharge (IHS) Payment",
      Circle: "/vi32.png",
      Description:
        "Assisting students in understanding and paying the IHS fee, ensuring they receive the necessary confirmation for their visa application.",
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
      country="UK"
      mainDesc={mainDesc}
      visaDesc={visaDesc}
      visa={visa}
      eligibility={eligibility}
      requirement={requirement}
      steps={steps}
      feesDesc={feesDesc}
      fees={fees}
      services={services}
      heading="UK Student Visa"
    />
  );
};

export default UkVisa;
