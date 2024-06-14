import React from "react";
import styles from "./USA.module.css";
import u1 from "../../../public/assets/images/u1.png";
import u2 from "../../../public/assets/images/u2.png";
import u3 from "../../../public/assets/images/u3.png";
import u4 from "../../../public/assets/images/u4.png";
import u5 from "../../../public/assets/images/u5.png";
import u6 from "../../../public/assets/images/u6.png";
import Image from "next/image";
import Link from "next/link";

const USA = () => {
  return (
    <div className={styles.usa}>
      <div></div>
      <div>
        <p>
          The United States tops the list of the most sought-after study
          destinations with more than one-third of the world's top 100
          universities in the country. For study-abroad aspirants, the USA is
          one of the best and most popular choices: Indian students account for
          18% of the total international student population in the United
          States. This is because US universities are the gold-standard for
          higher education, offering a large variety of exciting program options
          and unmatched academic flexibility, giving students a chance to
          explore their interests inside and outside the classroom.
        </p>
        <div>
          <h2>Get Admission to Top US Universities</h2>
          <p>
            Getting admission to top US universities is no piece of cake, and
            things tend to get competitive as people around the world are vying
            for a spot in the best universities. That’s where Jamboree comes in:
            we guide you through the application and post-admission stages of
            your journey and help you achieve your dreams!
          </p>
        </div>
        <div>
          <h2>Scholarships & Living Costs:</h2>
          <p>
            Undoubtedly, the cost of living and tuition fees in US universities
            are high. But there’s no need to fret: most colleges and
            universities in the US offer substantial scholarships and financial
            aid to international students. The process of applying to these
            scholarships, we know, is daunting; so we’re here to mentor each
            stage and help you fulfill your goals!
          </p>
        </div>
        <div>
          <h2>Planning to study abroad?</h2>
          <p>
            Talk to our US study counsellors today and take your first step in
            the right direction!
          </p>
        </div>
        <Link href="/contactus">
          <button>Start Your Application</button>
        </Link>
      </div>
      <div>
        <div>
          <h2>Why You Should Choose USA</h2>
          <p>As Your Study Destination:</p>
        </div>
        <div className={styles.cs}>
          <div>
            <Image src={u1} alt="u" />
            <p>
              Unmatched academic flexibility across STEM, Social Science, and
              Humanities majors
            </p>
          </div>
          <div>
            <Image src={u2} alt="u" />
            <p>
              Vibrant Campus Life and Diverse International Student Communities
            </p>
          </div>
          <div>
            <Image src={u3} alt="u" />
            <p>Access to a Wide Range of Academic & Professional Resources</p>
          </div>
          <div>
            <Image src={u4} alt="u" />
            <p>
              146 Tier-1 Research Universities Ranked for Very High Research
              Activity
            </p>
          </div>
          <div>
            <Image src={u5} alt="u" />
            <p>
              Generous Financial Aid and Scholarships for International Students
            </p>
          </div>
          <div>
            <Image src={u6} alt="u" />
            <p>
              Exciting Job Opportunities and up to 3 years visa extension for
              STEM degrees
            </p>
          </div>
        </div>
        <div>
          <Link href="/counselling">
            <button>Talk to our counsellor!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default USA;
