import React from "react";
import styles from "./CountriesCont.module.css";
import CountriesBox from "../CountriesBox/CountriesBox";
import ire from "../../../public/assets/images/ireland.png";
import ger from "@/../public/ger.png";
import uk from "@/../public/uk.png";
import aus from "@/../public/auss.png";
import can from "@/../public/cann.png";
import usa from "@/../public/us.png";

const CountriesCont = () => {
  const data = [
    {
      image: can,
      name: "Canada",
    },
    {
      image: aus,
      name: "Australlia",
    },
    {
      image: usa,
      name: "USA",
    },
    {
      image: ire,
      name: "Ireland",
    },
    {
      image: ger,
      name: "Germany",
    },
    {
      image: uk,
      name: "United Kingdom",
    },
  ];
  return (
    <div className={styles.cont}>
      <div className="white-head">Countries of Admission</div>
      <CountriesBox data={data} num={5} />
    </div>
  );
};

export default CountriesCont;
