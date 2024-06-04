"use client";
import React, { useContext } from "react";
import styles from "./MBA.module.css";
import home1 from "../../../public/assets/images/home1.png";
import home3 from "../../../public/assets/images/contact.png";
import home4 from "../../../public/assets/images/exam.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { AppContext } from "@/Context/AppContext";

const MBA = () => {
  const { mb } = useContext(AppContext);
  return (
    <div className={styles.mba}>
      {mb && (
        <div>
          <Swiper
            style={{
              width: "35rem",
            }}
            grabCursor={true}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className={styles.mySwiper}
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
      <div>
        <h2>MBA Admission Counselling</h2>
        <p>With 27+ years in the industry, we know exactly what goes on in the admission decision rooms of your dream university</p>
        <p>BOOK A CALL</p>
      </div>
    </div>
  );
};

export default MBA;
