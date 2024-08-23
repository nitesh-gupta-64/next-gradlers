import React from "react";
import countryImg from "@/../public/gradlers/Universität Heidelberg,Germany (2).jpg";
import VisaPage from "./VisaPage/VisaPage";

const GerVisa = () => {
  const mainDesc = `The Germany student visa allows international students to pursue their studies at German universities and educational institutions. Applicants must have an offer from a recognized institution, proof of financial resources to cover living expenses, and health insurance. The visa permits students to work part-time during their studies and offers opportunities for post-graduation work. Germany is renowned for its high-quality education system, innovative research opportunities, and vibrant cultural experiences. With affordable tuition fees and numerous scholarships available, a Germany student visa opens doors to a world-class education and a bright future in Europe’s economic powerhouse.`;

  const visaDesc =
    "International students looking to study in Germany can apply for different types of visas based on their specific needs and the duration of their stay. Here are the main types of Germany student visas:";

  const visa = [
    {
      Image: "/v11.png",
      Circle: "/v12.png",
      Heading: "Student Applicant Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students who need to be in Germany to apply for university admission in person or complete other formalities required for admission.",
        },
        {
          Type: "Duration",
          Description: "Valid for up to 9 months.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of prior academic qualifications, evidence of sufficient funds, and a letter from the university indicating the need for the student to be present in Germany to complete the application process.",
        },
      ],
    },
    {
      Image: "/v21.png",
      Circle: "/v22.png",
      Heading: "Student Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students who have already received admission to a German university or preparatory course (Studienkolleg).",
        },
        {
          Type: "Duration",
          Description:
            "Initially issued for three months, then converted to a residence permit for the duration of the study program.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of admission, proof of financial resources, health insurance, and evidence of previous academic qualifications.",
        },
      ],
    },
    {
      Image: "/gradlers/4.jpg",
      Circle: "/v32.png",
      Heading: "Language Course Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students planning to attend a language course in Germany that lasts between 3 months and 1 year.",
        },
        {
          Type: "Duration",
          Description: "Valid for the duration of the language course.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of enrollment in a language course, proof of financial resources, and health insurance.",
        },
      ],
    },
    {
      Image: "/gradlers/10.jpg",
      Circle: "/v31.png",
      Heading: "Student Residence Permit",
      Types: [
        {
          Type: "Purpose",
          Description:
            "Once in Germany, students need to convert their student visa to a residence permit for study purposes.",
        },
        {
          Type: "Duration",
          Description:
            "Typically issued for one to two years and can be renewed.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of ongoing enrollment, adequate financial resources, health insurance, and proof of satisfactory academic progress.",
        },
      ],
    },
    {
      Image: "/gradlers/3.jpg",
      Circle: "/gradlers/technical university of munich, Germany.jpg",
      Heading: "Preparatory Course Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For students who need to attend a preparatory course (Studienkolleg) before enrolling in a full degree program.",
        },
        {
          Type: "Duration",
          Description:
            "Valid for the duration of the preparatory course, typically one year.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of acceptance into a Studienkolleg, proof of financial resources, and health insurance.",
        },
      ],
    },
    {
      Image: "/gradlers/11.jpg",
      Circle: "/gradlers/1.jpg",
      Heading: "Research Visa",
      Types: [
        {
          Type: "Purpose",
          Description:
            "For postgraduate students and researchers who wish to conduct research or pursue a doctoral degree in Germany.",
        },
        {
          Type: "Duration",
          Description:
            "Based on the duration of the research project or doctoral program.",
        },
        {
          Type: "Requirements",
          Description:
            "Proof of acceptance into a research program or doctoral program, proof of financial resources, and health insurance.",
        },
      ],
    },
  ];

  const eligibility = {
    Heading: "",
    Description: [
      "Must have scored 70% and above in your previous study.",
      "Transcripts and certificates of your academics.",
      "An interview with the corresponding university.",
      "Must clear the GRE or GMAT exams as required.",
      "Must clear any of the English language proficiency tests IELTS, TOEFL, or PTE if you are a non-native English speaker.",
      "If your language medium is German, you must clear Testdaf (German language test).",
      "Completing the ACS process before applying for a German Student visa.",
      "Go through the university's official portal for information regarding the additional requirements.",
    ],
  };
  const requirement = {
    Heading:
      "The following are the required documents to apply for a Germany student Visa:",
    Description: [
      "Visa Application form",
      "Declaration",
      "Statement of Purpose",
      "Proof of admission",
      "Academic transcripts",
      "ACS certificate",
      "Blocked account as financial cover proof",
      "Health Insurance",
    ],
  };

  const steps = [
    "Check your eligibility for a German student Visa.",
    "Arrange all the required documents.",
    "Apply for an ACS Certificate.",
    "Apply for a German visa online.",
    "Wait for the approval status.",
    "Fly to Germany for your education.",
  ];

  const feesDesc =
    "The cost of obtaining a Germany student visa for Indian students involves several components. Here’s a breakdown:";

  const fees = [
    {
      Heading: "Visa Application Fee",
      Description:
        " Student Applicant Visa: €75 (approx. ₹6,500) - Student Visa: €75 (approx. ₹6,500) - Language Course Visa: €75 (approx. ₹6,500) - Research Visa: €75 (approx. ₹6,500)",
    },
    {
      Heading: "Additional Costs",
      Description:
        "Health Insurance: Around €80-€160 per month (approx. ₹7,000-₹14,000), Proof of Financial Resources: Students need to demonstrate sufficient funds, typically €11,208 per year (approx. ₹9,65,000). ",
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
      Image: "/vi61.png",
      Heading: "Health Insurance Guidance",
      Circle: "/vi62.png",
      Description:
        "Assisting students in enrolling in a suitable health insurance plan that meets German visa requirements.",
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
      country="Germany"
      mainDesc={mainDesc}
      visaDesc={visaDesc}
      visa={visa}
      eligibility={eligibility}
      requirement={requirement}
      steps={steps}
      feesDesc={feesDesc}
      fees={fees}
      services={services}
      heading="Germany Student Visa"
    />
  );
};

export default GerVisa;
