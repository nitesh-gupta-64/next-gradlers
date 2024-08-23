import React from "react";
import styles from "./Counselling.module.css";
import Link from "next/link";
import FaqItem from "../Accordion/Accordion";
const Counselling = () => {
  const img = "/gradlers/1.jpg";

  const mainDesc = `At Gradlers, are a Career Testing, Profiling, and Counseling Platform committed to empowering students from Grades 8-12 and young college students to achieve success. Our mission is to guide them in making well-informed decisions regarding their academic subjects, college courses, and future careers.
  Our Psychometric testing platform stands out by offering personalized recommendations that are carefully tailored to each individual. We achieve this by conducting standardized assessments that evaluate personality, aptitude, motivations, and interests. These assessments are underpinned by advanced frameworks and predictive algorithms, ensuring that our guidance is both accurate and relevant to each person’s unique profile.
  At Gradlers, we understand that every student is different, with their own strengths, challenges, and aspirations. By analyzing these factors, we provide clear, actionable insights that help students choose the right path forward—whether it’s selecting subjects in high school, choosing a college major, or planning a future career. Our goal is to ensure that every decision made is informed, strategic, and aligned with each student’s potential for success.`;

  const why = [
    {
      Image: "/v11.png",
      Circle: "/gradlers/5.jpg",
      Heading: "Clarity and Direction",
      Description:
        "The most significant benefits of career counseling is the clarity it provides. Many students are unsure about their strengths, interests, and how these align with potential careers. Career counseling helps students understand their unique abilities and preferences, guiding them towards careers that suit them best.",
    },
    {
      Image: "/v21.png",
      Circle: "/gradlers/2.jpg",
      Heading: "Reducing Anxiety and Stress",
      Description:
        "The pressure to succeed academically and professionally can cause significant stress for students. Career counseling offers a supportive environment where students can discuss their concerns, fears, and aspirations with a professional.",
    },
    {
      Image: "/gradlers/4.jpg",
      Circle: "/gradlers/12.jpg",
      Heading: "Customized Career Plans",
      Description:
        "Every student is different, with unique goals, strengths, and challenges. Career counseling at Gradlers is tailored to each student’s needs, ensuring that they receive personalized advice and strategies. Whether it’s choosing the right major, or preparing for college applications, a customized plan is crucial for success.",
    },
    {
      Image: "/gradlers/10.jpg",
      Circle: "/v31.png",
      Heading: "Understanding the Job Market",
      Description:
        "The job market is continuously evolving, with new industries emerging and others fading away. Career counselors stay updated on these trends, providing students with insights into the current and future job market. This knowledge helps students choose careers that are not only fulfilling.",
    },
    {
      Image: "/gradlers/3.jpg",
      Circle: "/gradlers/1.jpg",
      Heading: "Developing Essential Skills",
      Description:
        "Beyond academic knowledge, students need a range of soft skills, such as communication, teamwork, and problem-solving abilities. Career counseling programs, like those offered by Gradlers, focus on developing these skills, ensuring that students are prepared for the challenges of the professional world.",
    },
  ];

  const faqs = [
    {
      question: "How Will the Career Test Help Me?",
      answer:
        "The Career Test is designed to guide you in making informed decisions about your subjects, college courses, and career choices. By taking the test, you gain clarity and validation for your career decisions, ensuring they align with your strengths and aspirations. The resulting profile offers personalized, directional, and contextual insights based on an in-depth analysis of your personality, aptitude, motivations, interests, and academic performance.",
    },
    {
      question: "Which Career Test is Suitable for Me?",
      answer:
        "The Career Test that’s right for you depends on the specific outcomes you’re seeking. Here’s a guide to help you choose:\n• Career Test & Profile 1 (CTP1): Ideal for making subject stream decisions. This test is recommended for students in Grades 8 and 9.\n• Career Test & Profile 2 (CTP2): Designed for making individual subject decisions. This test is recommended for students in Grade 10.\n• Career Test & Profile 3 (CTP3): Perfect for deciding on a career path, college course, and college selection. This test is recommended for students in Grades 11 and 12.\n• Career Test & Profile 4 (CTP4): Tailored for making career decisions, this test is recommended for college students, college graduates and working professionals.",
    },
    {
      question: "Do I Need to Prepare in Advance for the Career Test?",
      answer:
        "No preparation is needed for the Career Test. The tests are designed to assess your personality, motivations, and interests, so there’s no need for any prior study. The Aptitude section includes questions based on the curriculum you’ve already covered in school, so you’ll be familiar with the content. Simply approach the test with an open mind, and answer honestly to get the most accurate results.",
    },
    {
      question:
        "What Is the Duration of the Test, and Does It Have to Be Completed in One Go?",
      answer:
        "Most students complete the Career Test within 60-90 minutes. However, you don’t have to finish it in one sitting. You can pause the test by simply closing the test window—your responses will be automatically saved. To resume, just log in to the link provided and click on the ‘Complete Your Test’ button.",
    },
    {
      question: "How Many Times Can I Take the Career Test I Have Paid For?",
      answer:
        "Each Career Test can be taken only once per purchase. If you complete the test and wish to retake it, you’ll need to repurchase the same test using a different account.",
    },
    {
      question: "How Can I Make Payment for the Career Test?",
      answer:
        "Payments for the Career Test can be made online using UPI, Net Banking, Credit Card, or Debit Card. The payment gateway is verified and secure. Please ensure you select the Career Test that is relevant or recommended for you this year, as payments are non-refundable.",
    },
    {
      question:
        "When and How Will I Receive the Summary & Detailed Profile, and How Do I Interpret Them?",
      answer:
        "Your Gradlers Career Counseling Test Summary & Detailed Profile will be automatically generated and available within 24 hours of completing the test. The profiles are designed to be user-friendly and easy to understand.",
    },
    {
      question:
        "Who Can I Reach Out to If I Have Questions About the Career Test Outcome?",
      answer:
        "If you have questions about your Career Test outcome, you have a few options:\n• Engage Model: You can choose to take counseling alongside the test by opting for the Engage Model.\n• Counseling After the Test: If you prefer, you can pay for a counseling session after completing the test. This session will provide you with a one-on-one discussion with an expert, focusing on your Career Test results.\n• Contact Us: If you have any additional questions, feel free to contact us.",
    },
    {
      question: "Can I Take the Career Test on a Mobile or Tablet?",
      answer:
        "Yes, the Career Test can be taken on a mobile device, tablet, or computer.",
    },
  ];

  const contentArray = [
    {
      image: "/why1.png",
      heading: "Experienced Counselors",
      description:
        "Our team of experienced counselors brings a wealth of knowledge from various industries and educational backgrounds. They are dedicated to helping students discover their true potential and guiding them on a path that aligns with their aspirations.",
    },
    {
      image: "/why2.png",
      heading: "Comprehensive Assessments",
      description:
        "We use a variety of assessment tools to evaluate students' interests, strengths, personality traits, and career preferences. These assessments provide a detailed understanding of the student, which forms the basis of our personalized counseling sessions.",
    },
    {
      image: "/why3.png",
      heading: "Real-World Insights",
      description:
        "At Gradlers, we believe in providing students with real-world insights. We offer opportunities for students to engage in internships, job shadowing, and networking with professionals. These experiences are invaluable in helping students make informed decisions about their careers.",
    },
    {
      image: "/why5.png",
      heading: "Long-Term Support",
      description:
        "Career counseling is not a one-time session but an ongoing process. We offer continued support to our students, from high school through college and even as they enter the workforce. This long-term relationship ensures that students always have access to guidance as they navigate their career journeys.",
    },
    {
      image: "/why6.png",
      heading: "Proven Success",
      description:
        "Gradlers has a track record of success, with numerous students who have gone on to achieve their academic and career goals. Our success stories are a testament to the effectiveness of our counseling services.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/" style={{ cursor: "pointer" }}>
          Home
        </Link>
        / Career Counselling
      </div>

      <div>
        <div className={styles.img}>
          <img src={img} alt="ihdi" />
        </div>
        <div
          className="blue-head"
          style={{ fontSize: "3.5rem", marginTop: "2rem" }}
        >
          Our Expertise
        </div>
        <div className={styles.mainPara}>{mainDesc}</div>
        <div className={styles.blueContainer} style={{ marginTop: "-1rem" }}>
          <div className={styles.why1}>
            <div className="white-head">Why Career Counseling Matters?</div>
            <div className={styles.whyBox}>
              {why.map((cd, i) => (
                <div key={i} className={styles.whyCard}>
                  <img src={cd.Image} alt="icon" />
                  <div>{cd.Heading}</div>
                  <div>{cd.Description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.whiteContainer}>
          <div className={styles.how}>
            <div className="blue-head">
              Why Choose Gradlers for Career <br /> Counseling?
            </div>
            <div className={styles.howBox}>
              {contentArray.map((cd, i) => (
                <div key={i} className={styles.howCard}>
                  <img src={cd.image} alt="icon" />
                  <div>{cd.heading}</div>
                  <div>{cd.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.whiteContainer}>
          <div className={styles.faqs}>
            <div className="blue-head">Frequently Asked Questions (FAQs)</div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselling;
