import styles from "./page.module.css";
import Hero from "@/Components/Hero/Hero";
import AboutUs from "@/Components/AboutUs/AboutUs";
import Journey from "@/Components/Journey/Journey";
import Achievements from "@/Components/Achievements/Achievements";
import Countries from "@/Components/Countries/Countries";
import Events from "@/Components/Events/Events";
import Showcase from "@/Components/Showcase/Showcase";
import "leaflet/dist/leaflet.css";
import HelpMba from "@/Components/HelpMba/HelpMba";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <HelpMba />
      <Journey />
      <Achievements />
      <Countries />
      <Events />
      <Showcase />   
    </>
  );
}
