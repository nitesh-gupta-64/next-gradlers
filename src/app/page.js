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
import LocationHero from "@/Components/LocationHero/LocationHero";
import Cities from "@/Components/Cities/Cities";
import WhyGradlers from "@/Components/WhyGradlers/WhyGradlers";
import OurServices from "@/Components/OurServices/OurServices";
import OurAdmits from "@/Components/OurAdmits/OurAdmits";
import Scorers from "@/Components/Scorers/Scorers";
import Commitment from "@/Components/Commitment/Commitment";
import CountriesCont from "@/Components/CountriesCont/CountriesCont";
import Knowledge from "@/Components/Knowledge/Knowledge";
import NewHero from "@/Components/NewHero/NewHero";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <NewHero />
      {/* <AboutUs /> */}
      <WhyGradlers />
      <OurServices />
      <OurAdmits />
      {/* <HelpMba /> */}
      {/* <Journey /> */}
      {/* <Achievements /> */}
      <Scorers />
      <Commitment />
      <CountriesCont />
      {/* <Events /> */}
      {/* <Showcase /> */}
      <Knowledge />
    </>
  );
}
