"use client";
import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import { db } from "@/firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState({});
  const [interested, setInterested] = useState([]);
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [tp, setTp] = useState(false);
  const [fa, setFa] = useState(false);
  const [vg, setVg] = useState(false);
  const [cc, setCc] = useState(false);
  const [ii, setIi] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInterest({});
    setInterested([]);
    tp
      ? setInterest((prev) => ({ ...prev, testprep: true }))
      : setInterest((prev) => ({ ...prev, testprep: false }));
    fa
      ? setInterest((prev) => ({ ...prev, foreignAdmissions: true }))
      : setInterest((prev) => ({ ...prev, foreignAdmissions: false }));
    vg
      ? setInterest((prev) => ({ ...prev, visaGuidance: true }))
      : setInterest((prev) => ({ ...prev, visaGuidance: false }));
    cc
      ? setInterest((prev) => ({ ...prev, careerCounselling: true }))
      : setInterest((prev) => ({ ...prev, careerCounselling: false }));
    ii
      ? setInterest((prev) => ({ ...prev, internationalInternships: true }))
      : setInterest((prev) => ({ ...prev, internationalInternships: false }));
  }, [tp, fa, vg, cc, ii]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ref = collection(db, "leads");
      await addDoc(ref, {
        name,
        email,
        ifWhatsapp: isWhatsapp,
        interestedIn: interest,
        mobile: phone,
        status: "Active",
        createdAt: serverTimestamp(),
      });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
    setName("");
    setEmail("");
    setPhone("");
    setTp(false);
    setCc(false);
    setFa(false);
    setIi(false);
    setVg(false);
    setClicked(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <PhoneInput
          className={styles.phone}
          placeholder="Phone number"
          value={phone}
          onChange={setPhone}
          required
        />
        <div>
          <input type="checkbox" onChange={(e) => setIsWhatsapp(!isWhatsapp)} />
          <h3>Number is available on Whatsapp</h3>
        </div>
      </div>
      <div>
        <label>Interested in?</label>
        <a className={styles.choose} onClick={() => setClicked(!clicked)}>
         Choose...
        </a>
        <div>
          {clicked && (
            <ul>
              <li onClick={() => setTp(!tp)} id={tp && styles.click}>
                Test Prep
              </li>
              <li onClick={() => setFa(!fa)} id={fa && styles.click}>
                Foreign Admissions
              </li>
              <li onClick={() => setVg(!vg)} id={vg && styles.click}>
                Visa Guidance
              </li>
              <li onClick={() => setCc(!cc)} id={cc && styles.click}>
                Career Counselling
              </li>
              <li onClick={() => setIi(!ii)} id={ii && styles.click}>
                International Internships
              </li>
            </ul>
          )}
        </div>
      </div>
      <button>Send Message</button>
    </form>
  );
};

export default Form;
