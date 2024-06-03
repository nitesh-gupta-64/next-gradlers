"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import home1 from "../../../public/assets/images/home1.png";
import home2 from "../../../public/assets/images/home2.png";
import home3 from "../../../public/assets/images/contact.png";
import home4 from "../../../public/assets/images/exam.png";
import bulb from "../../../public/assets/images/bulb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";

const Hero = () => {

  const mb = useMediaQuery("(min-width:800px)");

  return (
    <div className={styles.hero}>
      <div>
        <h2>
          Welcome to <span>gradlers</span>
        </h2>
        <p>Give Wings to your Study Abroad Dreams</p>
        {mb && (
          <div>
            <Swiper
              grabCursor={true}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={home1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={home3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={home4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
      <div>
        <Image src={bulb} />
        <Image src={home2} />
      </div>
    </div>
  );
};

export default Hero;
