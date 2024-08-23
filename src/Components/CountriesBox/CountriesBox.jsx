"use client";
import React, { useContext } from "react";
import styles from "./CountriesBox.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { AppContext } from "@/Context/AppContext";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CountriesBox = ({data, num}) => {
  const { mb } = useContext(AppContext);
  return (
    <div className={styles.box}>
      <Swiper
        style={{
          width: "100%",
          height: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        spaceBetween={40}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        slidesPerView={mb ? num : 2}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {data.map((co) => (
          <SwiperSlide
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "90%",
              }}
            >
              <Image
                src={co.image}
                alt="img"
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p
                style={{
                  marginTop: "2rem",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  textAlign: "center",
                }}
              >
                {co.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CountriesBox;
