"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import styles from "./Testimonials.module.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import arrow from "../../../public/assets/images/arrow.png";
import { useContext } from "react";
import { AppContext } from "@/Context/AppContext";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const TestimonialsSwiper = () => {
  const { admitInfo } = useContext(AppContext);

  return (
    <div className={styles.testi}>
      <style>{`
        .swiper, .swiper-slide > div {
            width: 650px;
            height: 340px;
        }

        .swiper-slide > div {
            padding: 4rem 2rem;
            gap: 2rem;
            
        }

        .swiper-slide > div > div > img {
            border-radius: 100%;
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
        .swiper-slide > div > div {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 3rem;
        }
        .swiper-slide > div > div > div > h3 {
            margin-top: 20px;
            margin-bottom: 10px;
        }
        @media screen and (max-width: 900px) {
            .swiper {
                width: 280px;
                height: 180px;
            }
            .swiper-slide > div {
                width: 280px;
                height: 180px;
                padding: 1rem 1rem;
                gap: 1rem;
            }
            .swiper-slide > div > div {
              gap: 1rem;
            }
            .swiper-slide > div > div > div > h3 {
                margin-top: 0.3rem;
                margin-bottom: 0.1rem;
            }
            .swiper-slide > div > div > img {
                width: 60px;
                height: 60px;
            }
        }
      `}</style>
      <div
        className="swiper-button-pre"
        id={styles.rev}
        style={navButtonStyles1}
      >
        {/* <Image src={arrow} /> */}
        {"<"}
      </div>
      <Swiper
        className={styles.swi}
        style={{
          boxShadow: "0px 7px 24px 0px #00000040",
          borderRadius: "10px",
        }}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-nex",
          prevEl: ".swiper-button-pre",
        }}
        slidesPerView={1}
        loop={true}
      >
        {admitInfo.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#0a549506",
              }}
            >
              <div>
                <img src={testimonial.Image} alt={testimonial.Name} />
                <div>
                  <h3>{testimonial.Name}</h3>
                  <p style={{ color: "#FFC107" }}>{testimonial.Program}</p>
                </div>
              </div>
              <p style={{ textAlign: "center" }}>
                "{" "}{testimonial.College} {testimonial.Year}, {testimonial.Location}{" "}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-button-nex"
        id={styles.rev1}
        style={navButtonStyles2}
      >
        {/* <Image src={arrow} /> */}
        {">"}
      </div>
    </div>
  );
};

const navButtonStyles1 = {
  backgroundColor: "transparent",
  color: "#25315D",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: '6rem',
  fontWeight: '100',
  cursor: 'pointer',
};

const navButtonStyles2 = {
  backgroundColor: "transparent",
  color: "#25315D",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: '6rem',
  fontWeight: '100',
  cursor: 'pointer',
};

export default TestimonialsSwiper;
