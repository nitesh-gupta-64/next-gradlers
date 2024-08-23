"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./PartnerForm.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { toast } from "react-toastify";
import { db } from "@/firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast";

const PartnerForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [oName, setOName] = useState("");
  const [loc, setLoc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [des, setDes] = useState("");
  const [interest, setInterest] = useState({});
  const [interested, setInterested] = useState([]);
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [us, setUs] = useState(false);
  const [can, setCan] = useState(false);
  const [uk, setUk] = useState(false);
  const [ger, setGer] = useState(false);
  const [ire, setIre] = useState(false);
  const [aus, setAus] = useState(false);
  const [nz, setNz] = useState(false);
  const [all, setAll] = useState(false);
  const [clicked, setClicked] = useState(false);

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    if (clicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  useEffect(() => {
    setInterest({});
    setInterested([]);
    us
      ? setInterest((prev) => ({ ...prev, usa: true }))
      : setInterest((prev) => ({ ...prev, usa: false }));
    can
      ? setInterest((prev) => ({ ...prev, canada: true }))
      : setInterest((prev) => ({ ...prev, canada: false }));
    uk
      ? setInterest((prev) => ({ ...prev, uk: true }))
      : setInterest((prev) => ({ ...prev, uk: false }));
    ger
      ? setInterest((prev) => ({ ...prev, germany: true }))
      : setInterest((prev) => ({ ...prev, germany: false }));
    ire
      ? setInterest((prev) => ({ ...prev, ireland: true }))
      : setInterest((prev) => ({ ...prev, ireland: false }));
    aus
      ? setInterest((prev) => ({ ...prev, australia: true }))
      : setInterest((prev) => ({ ...prev, australia: false }));
    nz
      ? setInterest((prev) => ({ ...prev, newZealand: true }))
      : setInterest((prev) => ({ ...prev, newZealand: false }));
  }, [us, can, uk, ger, ire, aus, nz, all]);

  useEffect(() => {
    if (all) {
      setUs(true);
      setGer(true);
      setCan(true);
      setIre(true);
      setUk(true);
      setAus(true);
      setNz(true);
    } else {
      setUs(false);
      setGer(false);
      setCan(false);
      setIre(false);
      setUk(false);
      setAus(false);
      setNz(false);
    }
  }, [all]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ref = collection(db, "partners");
      await addDoc(ref, {
        organisationName: oName,
        location: loc,
        name,
        designation: des,
        email,
        ifWhatsapp: isWhatsapp,
        countries: interest,
        mobile: phone,
        status: "Active",
        createdAt: serverTimestamp(),
      });
      toast("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast("Failed to send message. Please try again.");
    }
    setName("");
    setEmail("");
    setPhone("");
    setOName("");
    setDes("");
    setLoc("");
    setUs(false);
    setGer(false);
    setCan(false);
    setIre(false);
    setUk(false);
    setAus(false);
    setNz(false);
    setAll(false);
    setClicked(false);
    onClose();
  };

  return (
    <div className={styles.sc}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <main id={styles.abs}>
        
        </main>
        <div>
          <label htmlFor="oname">Organisation Name</label>
          <input
            type="text"
            name="oname"
            placeholder="Organisation Name"
            value={oName}
            onChange={(e) => setOName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="loc">Location (City/State)</label>
          <input
            type="text"
            name="loc"
            placeholder="Location"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Your Name</label>
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
          <label htmlFor="des">Designation</label>
          <input
            type="text"
            name="des"
            placeholder="Designation"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Number</label>
          <PhoneInput
            className={styles.phone}
            placeholder="Contact number"
            value={phone}
            onChange={setPhone}
            required
          />
          <div>
            <input
              type="checkbox"
              onChange={(e) => setIsWhatsapp(!isWhatsapp)}
            />
            <h3>Number is available on Whatsapp</h3>
          </div>
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
          <label>Countries Processing</label>
          <a className={styles.choose} onClick={() => setClicked(!clicked)}>
            {us ? <p>USA</p> : ""}
            {can ? <p>Canada</p> : ""}
            {uk ? <p>UK</p> : ""}
            {ger ? <p>Germany</p> : ""}
            {ire ? <p>Ireland</p> : ""}
            {aus ? <p>Australia</p> : ""}
            {nz ? <p>New Zealand</p> : ""}
            {!us &&
              !can &&
              !uk &&
              !ger &&
              !ire &&
              !aus &&
              !nz &&
              !all &&
              "Choose..."}
          </a>
          <div>
            {clicked && (
              <main className={styles.sc1}>
                <ul ref={modalRef}>
                  <li onClick={() => setUs(!us)} id={us ? styles.click : ""}>
                    USA
                  </li>
                  <li onClick={() => setCan(!can)} id={can ? styles.click : ""}>
                    Canada
                  </li>
                  <li onClick={() => setUk(!uk)} id={uk ? styles.click : ""}>
                    UK
                  </li>
                  <li onClick={() => setGer(!ger)} id={ger ? styles.click : ""}>
                    Germany
                  </li>
                  <li onClick={() => setIre(!ire)} id={ire ? styles.click : ""}>
                    Ireland
                  </li>
                  <li onClick={() => setAus(!aus)} id={aus ? styles.click : ""}>
                    Australia
                  </li>
                  <li onClick={() => setNz(!nz)} id={nz ? styles.click : ""}>
                    New Zealad
                  </li>
                  <li onClick={() => setAll(!all)} id={all ? styles.click : ""}>
                    All above
                  </li>
                </ul>
              </main>
            )}
          </div>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default PartnerForm;
