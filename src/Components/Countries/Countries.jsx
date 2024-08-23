"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import React, { useContext } from "react";
import styles from "./Countries.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import can from "../../../public/assets/images/can.png";
import aus from "../../../public/assets/images/aus.png";
import usa from "../../../public/assets/images/usa.png";
import fra from "../../../public/assets/images/germany.png";
import ire from "../../../public/assets/images/ireland.png";
import { AppContext } from "@/Context/AppContext";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Countries = () => {
  const { mb } = useContext(AppContext);
  return (
    <div className={styles.countries}>
      <div>
        <h5>Countries for Admissions</h5>
      </div>
      <div>
        <Swiper
          style={{
            width: "100%",
            height: "350px",
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
          slidesPerView={mb ? 4 : 2}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
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
                backgroundColor: "#fff",
              }}
            >
              <Image
                src={can}
                alt={can}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Canada</p>
            </div>
          </SwiperSlide>
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
                  objectFit: "cover",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Australia</p>
            </div>
          </SwiperSlide>
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
                  objectFit: "cover",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>USA</p>
            </div>
          </SwiperSlide>
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
                  objectFit: "cover",
                  width: "140px",
                  height: "140px",
                  boxShadow: "0px 4px 10px gray",
                }}
              />
              <p>Germany</p>
            </div>
          </SwiperSlide>
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
                width: "90%",
                backgroundColor: "#fff",
                flexDirection: "column",
              }}
            >
              <Image
                src={ire}
                alt={fra}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                  width: "140px",
                  height: "140px",
                  boxShadow: "0px 4px 10px gray",
                }}
              />
              <p>Ireland</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Countries;
