"use client";
import React, { useContext } from "react";
import styles from "./NewHero.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { AppContext } from "@/Context/AppContext";
import { useRouter } from "next/navigation";

const NewHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const { setShowModal } = useContext(AppContext);
  const router = useRouter();

  const slidesData = [
    {
      id: 1,
      title:
        "Study Visa is the key to studying abroad, <br /> and we have a 98% success rate...",
      img: "/h1.png",
    },
    {
      id: 2,
      title: "Your Pathway to Global Education <br /> Starts Here",
      img: "/h2.png",
    },
    {
      id: 3,
      title:
        "Our expert team at Gradlers is proficient with <br /> UG, Masters & MBA Admissions",
      img: "/h3.png",
    },
    {
      id: 4,
      title:
        "Your perfect score is on us be it <br /> English or Standardized tests….",
      img: "/h4.png",
    },
    {
      id: 5,
      title:
        "No matter where you choose to study, <br /> We can get you there with ease….",
      img: "/h5.png",
    },
  ];

  const redirect = (i) => {
    if (i===0) {
      router.push('/visa/usa')
    }
    else if (i===1) {
      router.push('/#whyGradlers')
    }
    else if (i===2) {
      router.push('/ug')
    }
    else if (i===3) {
      router.push('/ielts')
    }
    else if (i===4) {
      router.push('/usa')
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {slidesData.map((slide, i) => (
          <div className={styles.imgp} key={slide.id}>
            <img src={slide.img} alt={slide.title} />
            <div className={styles.abs}>
              <div dangerouslySetInnerHTML={{ __html: slide.title }} />
              <main
                onClick={() => redirect(i)}
                style={{ margin: "0" }}
                className="yellow-button"
                id={styles.read}
              >
                Read More...
              </main>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewHero;
