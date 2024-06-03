"use client";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { createContext, use, useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Step1
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [admitInfo, setAdmitInfo] = useState([]);
  const [blogs, setBlogs] = useState([]);

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
      setAdmitInfo(data);
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
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching data... useEffect all events");
    fetchEvents();
    fetchAdmitInfo();
    fetchBlogs();
  }, []);

  const value = {
    events,
    admitInfo,
    blogs,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
