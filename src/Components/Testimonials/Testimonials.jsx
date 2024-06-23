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
import ql from "../../../public/assets/images/q1.png";
import qr from "../../../public/assets/images/q2.png";

// Install Swiper modules
SwiperCore.use([Navigation]);

const TestimonialsSwiper = ({data}) => {

  return (
    <div className={styles.testi}>
      <style>{`
        .swiper {
            width: 650px;
            height: 320px;
        }
        .swiper-slide > div {
            width: 650px;
            height: 320px;
        }

        .swiper-slide > div {
            padding: 3rem 2rem;
            padding-top: 5rem;
            gap: 2rem;  
        }
        .swiper-slide main {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 3rem;
        }
        .swiper-slide main img {
          width: 4rem;
          height: auto;
        }
        .swiper-slide > div > div > img {
            border-radius: 100%;
            width: 90px;
            height: 90px;
            object-fit: cover;
        }
        .swiper-slide > div > div {
          display: flex;
          justify-content: start;
          align-items: start;
          gap: 3rem;
        }
        .swiper-slide > div > div > div > h3 {
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #FFF1BC;
          opacity: 1;
        }

      .swiper-pagination-bullet-active {
        background-color: #FFC107;
      }
        @media screen and (max-width: 900px) {
            .swiper {
                width: 280px;
                height: 220px;
            }
            .swiper-slide > div {
                width: 280px;
                height: 180px;
                padding: 1rem 1rem;
                gap: 1rem;
            }
            .swiper-slide p {
              font-size: 0.6rem;
            }
             .swiper-slide main {     
                gap: 0.5rem;
            }
            .swiper-slide > div > div > img {    
              width: 50px;
              height: 50px;      
            }
            .swiper-slide h3 {
              font-size: 1rem;
              line-height: 5px;
            }
        }
      `}</style>
      <Swiper
        className={styles.swi}
        style={{
          borderRadius: "10px",
        }}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
      >
        {data && data.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#0a549506",
              }}
            >
              <main>
                <Image src={ql} alt="q" />
                <p>{testimonial.Description}</p>
                <Image src={qr} alt="q" />
              </main>
              <div>
                <img src={testimonial.Image} alt={testimonial.Name} />
                <div>
                  <h3>{testimonial.Name}</h3>
                  <p style={{ color: "#FFC107" }}>{testimonial.Program}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;
