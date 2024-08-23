import React from "react";
import countryImg from "@/../public/gradlers/The University of Melbourne ,Australia.jpg";
import VisaPage from "./VisaPage/VisaPage";

const AusVisa = () => {
  const mainDesc = `
The Australia student visa, subclass 500, allows international students to undertake full-time study at registered Australian educational institutions. Applicants must have an offer of enrollment, sufficient funds for tuition and living expenses, and Overseas Student Health Cover (OSHC). The visa permits work for up to 40 hours per fortnight during term and full-time during scheduled breaks. Australia's renowned education system, diverse culture, and excellent quality of life make it a top choice for international students seeking world-class education and career opportunities. The student visa is a pathway to enriching academic experiences and vibrant multiculturalism in Australia
`;

  const visaDesc = "";

  const visa = [
    {
      Image: "/v11.png",
      Circle: "/v12.png",
      Heading: "Student visa (subclass 500)",
      Types: [],
    },
    {
      Image: "/v21.png",
      Circle: "/v22.png",
      Heading: "Guardian visa (subclass 590)",
      Types: [],
    },
    {
      Image: "/gradlers/4.jpg",
      Circle: "/v32.png",
      Heading: "Training visa (subclass 407)",
      Types: [],
    },
  ];

  const eligibility = {
    Heading: "",
    Description: [],
  };
  const requirement = {
    Heading:
      "The following are the required documents to apply for a Australia student Visa:",
    Description: [
      "Proof of English Proficiency",
      "Letter of Offer",
      "Confirmation of Enrolment (CoE)",
      "Genuine Temporary Entrant (GTE) Requirement",
      "Proof of Funds",
      "Overseas Student Health Cover (OSHC)",
      "Health Requirement",
      "Character Requirement",
    ],
  };

  const steps = [
    "Check your eligibility for an Australian student Visa.",
    "Arrange the checklist of documents.",
    "Apply for the visa online.",
    "Wait for the status.",
    "Fly to study in Australia.",
  ];

  const feesDesc =
    "The cost of an Australia student visa (subclass 500) for Indian students typically includes several components:";

  const fees = [
    {
      Heading: "Visa Application Fee",
      Description: "AUD 650 (approximately ₹36,000)",
    },
    {
      Heading: "Additional Applicant Charge for Dependents",
      Description: "AUD 485 per dependent (approximately ₹27,500)",
    },
  ];

  const services = [
    {
      Image: "/vi11.png",
      Heading: "Visa Consultation and Counselling",
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
      Image: "/vi61.png",
      Heading: "Overseas Student Health Cover (OSHC)",
      Circle: "/vi62.png",
      Description:
        "Assisting students in selecting and enrolling in a suitable OSHC provider to meet visa requirements.",
    },
    {
      Image: "/vi31.png",
      Heading: "Financial Proof Assistance",
      Circle: "/vi32.png",
      Description:
        "Blocked Account Setup: Guiding students on how to open and fund a blocked account (Sperrkonto) to demonstrate sufficient financial resources. Scholarship and Funding Guidance: Providing information on available scholarships and financial aid options.",
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
      country="Australia"
      mainDesc={mainDesc}
      visaDesc={visaDesc}
      visa={visa}
      eligibility={eligibility}
      requirement={requirement}
      steps={steps}
      feesDesc={feesDesc}
      fees={fees}
      services={services}
      heading="Australia Student Visa"
    />
  );
};

export default AusVisa;
