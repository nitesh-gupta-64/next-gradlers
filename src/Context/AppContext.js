"use client";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { createContext, use, useEffect, useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

// Step1
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [admitInfo, setAdmitInfo] = useState([]);
  const [visaInfo, setVisaInfo] = useState([]);
  const [testPrepInfo, setTestPrepInfo] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [gm, setGm] = useState({});
  const [gr, setGr] = useState({});
  const [ma, setMa] = useState({});
  const [ug, setUg] = useState({});
  const [ie, setIe] = useState({});
  const [sorted, setSorted] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchEvents = async () => {
    try {
      const ref = collection(db, "events");
      const snapshot = await getDocs(ref);
      const eventData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchAdmitInfo = async () => {
    try {
      const ref = collection(db, "admitInfo");
      const snapshot = await getDocs(ref);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAdmitInfo(data.reverse());
    } catch (error) {
      console.error("Error fetching Admits:", error);
    }
  };

  const fetchTestPrepInfo = async () => {
    try {
      const ref = collection(db, "testPrepInfo");
      const snapshot = await getDocs(ref);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestPrepInfo(data.reverse());
    } catch (error) {
      console.error("Error fetching Admits:", error);
    }
  };

  const fetchVisaInfo = async () => {
    try {
      const ref = collection(db, "visaInfo");
      const snapshot = await getDocs(ref);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVisaInfo(data);
    } catch (error) {
      console.error("Error fetching Admits:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const ref = collection(db, "blogs");
      const snapshot = await getDocs(ref);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(data);
      const sortedBlogs = [...data].sort(
        (b, a) =>
          new Date(a.createdAt.toDate()) - new Date(b.createdAt.toDate())
      );
      setSorted(sortedBlogs);
      console.log(sortedBlogs);

      const data5 = sortedBlogs.filter((blog) => blog.category === "GMAT");
      setGm(data5);
      const data1 = sortedBlogs.filter((blog) => blog.category === "GRE");
      setGr(data1);
      const data2 = sortedBlogs.filter(
        (blog) => blog.category === "Masters" || blog.category === "PhD"
      );
      setMa(data2);
      const data3 = sortedBlogs.filter(
        (blog) => blog.category === "Undergraduate"
      );
      setUg(data3);
      const data4 = sortedBlogs.filter(
        (blog) => blog.category === "IELTS" || blog.category === "TOEFL"
      );
      setIe(data4);
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching data... useEffect all events");
    fetchEvents();
    fetchAdmitInfo();
    fetchBlogs();
    fetchTestPrepInfo();
    fetchVisaInfo();
  }, []);
  const mb = useMediaQuery("(min-width:800px)");
  const tb = useMediaQuery("(min-width:1200px)");

  const value = {
    events,
    admitInfo,
    visaInfo,
    testPrepInfo,
    blogs,
    mb,
    gm,
    gr,
    ma,
    ug,
    ie,
    sorted,
    setSorted,
    showForm,
    setShowForm,
    isOpen,
    setIsOpen,
    showModal,
    setShowModal,
    tb,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
