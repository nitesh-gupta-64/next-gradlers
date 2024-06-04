"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import React, { useContext } from "react";
import styles from "./Cities.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import del from "../../../public/assets/images/del.png";
import mum from "../../../public/assets/images/mum.png";
import luk from "../../../public/assets/images/luk.png";
import pra from "../../../public/assets/images/pra.png";
import { AppContext } from "@/Context/AppContext";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Cities = () => {
  const {mb} = useContext(AppContext)
  return (
    <div className={styles.cities}>
      <div>
        <h2>WE SERVE ACROSS THE COUNTRY</h2>
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
          <SwiperSlide>
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
                src={del}
                alt={del}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Delhi</p>
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
                src={mum}
                alt={mum}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Mumbai</p>
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
                src={luk}
                alt={luk}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Lukhnow</p>
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
                src={pra}
                alt={pra}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Prayagraj</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                src={del}
                alt={del}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Delhi</p>
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
                src={mum}
                alt={mum}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Mumbai</p>
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
                src={luk}
                alt={luk}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Lukhnow</p>
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
                src={pra}
                alt={pra}
                style={{
                  borderRadius: "100%",
                  objectFit: "contain",
                  width: "140px",
                  height: "140px",
                }}
              />
              <p>Prayagraj</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Cities;
