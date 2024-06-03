"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import React from "react";
import styles from "./Countries.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import can from "../../../public/assets/images/can.png";
import aus from "../../../public/assets/images/aus.png";
import usa from "../../../public/assets/images/usa.png";
import fra from "../../../public/assets/images/fra.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Countries = () => {
  return (
    <div className={styles.countries}>
      <div>
        <h5>Countries for Admission</h5>
      </div>
      <div>
        <Swiper
          style={{
            width: "1000px",
            height: "300px",
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "90%",
                backgroundColor: "#fff",
              }}
            >
              <Image
                src={can}
                alt={can}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Canada</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={aus}
                alt={aus}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Australia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={usa}
                alt={usa}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>USA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={fra}
                alt={fra}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>France</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={can}
                alt={can}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Canada</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={aus}
                alt={aus}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Australia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={usa}
                alt={usa}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>USA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={fra}
                alt={fra}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>France</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Countries;
