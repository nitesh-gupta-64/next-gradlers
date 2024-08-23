import React from "react";
import countryImg from "@/../public/gradlers/University of British Columbia, Canada.jpg";
import VisaPage from "./VisaPage/VisaPage";

const CanVisa = () => {
  const mainDesc = `The Canada student visa, also known as the study permit, allows international students to pursue their education at designated learning institutions (DLIs) across Canada. Applicants must have an acceptance letter from a DLI, prove sufficient funds for tuition and living expenses, and pass a medical exam if required. The visa typically allows part-time work opportunities during studies and options for post-graduation work permits. Canada's welcoming environment, diverse culture, and high-quality education system make it a popular choice for students globally. A Canada student visa opens doors to enriching academic experiences and future career opportunities in a vibrant international setting.The Canada student visa allows international students to pursue their studies at German universities and educational institutions. Applicants must have an offer from a recognized institution, proof of financial resources to cover living expenses, and health insurance. The visa permits students to work part-time during their studies and offers opportunities for post-graduation work. Canada is renowned for its high-quality education system, innovative research opportunities, and vibrant cultural experiences. With affordable tuition fees and numerous scholarships available, a Canada student visa opens doors to a world-class education and a bright future in Europe’s economic powerhouse.`;

  const visaDesc = "";
  const visa = [
    {
      Image: "/v11.png",
      Circle: "/v12.png",
      Heading: "Student Permit",
      Types: [
        {
          Type: "Permit",
          Description:
            "Permits to Study in Canadian Universities for up to 3 months (Student Direct Stream (SDS) program: Faster application process for eligible candidates)",
        },
      ],
    },
    {
      Image: "/v21.png",
      Circle: "/v22.png",
      Heading: "QAC",
      Types: [
        {
          Type: "Permit",
          Description: "Study permit for colleges in Quebec",
        },
      ],
    },
  ];

  const eligibility = {
    Heading: "",
    Description: [],
  };
  const requirement = {
    Heading:
      "The following are the required documents to apply for a Canada student Visa:",
    Description: [
      "Educational Transcripts",
      "Academic references",
      "Attestation Letter from the province or territory where you plan to study",
      "Study Permit Application",
      "Employer references",
      "SOP (Statement of Purpose)",
      "Certificates of extracurricular achievements",
      "An acceptance letter from your educational institution",
      "DLI has to confirm every LOA submitted (applicant outside Canada)",
      "Proof of payment",
      "Proof of financial funds",
      "Proof of English Proficiency",
    ],
  };

  const steps = [
    "Check your eligibility for a Canada student visa.",
    "Arrange the required documents as per checklist.",
    "Apply for the visa online.",
    "Wait for the status.",
    "Fly to study in Canada.",
  ];

  const feesDesc =
    "As per the CIC (Citizenship and Immigration Canada), the Canada Student Visa Fee is 150 CAD-200 CAD.";

  const fees = [
    {
      Heading: "Visa Application Fee",
      Description:
        "Study permit (including applications for extensions) - 150 CAD, Biometrics fee (per person) - 85 CAD",
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
      country="Canada"
      mainDesc={mainDesc}
      visaDesc={visaDesc}
      visa={visa}
      eligibility={eligibility}
      requirement={requirement}
      steps={steps}
      feesDesc={feesDesc}
      fees={fees}
      services={services}
      heading="Canada Student Visa"
    />
  );
};

export default CanVisa;
