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

const testimonials = [
  {
    name: "HUY HU VHAYH",
    position: "WORKING IN HJH",
    feedback:
      "My experience was all about how they made me feel at their classes. they gave me the confidence.",
    image: "/path/to/image.jpg", // Replace with the actual image path
  },
  {
    name: "Nitesh",
    position: "WORKING IN HJH",
    feedback:
      "My experience was all about how they made me feel at their classes. they gave me the confidence.",
    image: "/path/to/image.jpg", // Replace with the actual image path
  },
  {
    name: "Virat",
    position: "WORKING IN HJH",
    feedback:
      "My experience was all about how they made me feel at their classes. they gave me the confidence.",
    image: "/path/to/image.jpg", // Replace with the actual image path
  },
  // Add more testimonials as needed
];

const TestimonialsSwiper = () => {

    const {admitInfo} = useContext(AppContext);

  return (
    <div className={styles.testi}>
      <div className="swiper-button-pre" style={navButtonStyles1}>
        <Image src={arrow} />
      </div>
      <Swiper
        style={{
          width: "792px",
          height: "376px",
          boxShadow: "0px 7px 24px 0px #00000040",
          borderRadius: "10px",
        }}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-nex",
          prevEl: ".swiper-button-pre",
        }}
        pagination={{ clickable: true }}
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
                padding: "4rem 2rem",
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#fff",
                width: "792px",
                height: "376px",
              }}
            >
              <img
                src={testimonial.Image}
                alt={testimonial.Name}
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ marginTop: "20px", marginBottom: "10px" }}>
                {testimonial.Name}
              </h3>
              <p style={{ color: "#FFC107" }}>{testimonial.position}</p>
              <p style={{ textAlign: "center", maxWidth: "500px" }}>
                {testimonial.Program} {testimonial.College} {testimonial.Year}, {testimonial.Location}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-nex" style={navButtonStyles2}>
        <Image src={arrow} />
      </div>
    </div>
  );
};

const navButtonStyles1 = {
  backgroundColor: "#25315D",
  color: "#FFFFFF",
  padding: "0.5rem 1rem",
  borderTopLeftRadius: "1.5rem",
  borderEndStartRadius: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const navButtonStyles2 = {
  backgroundColor: "#25315D",
  color: "#FFFFFF",
  padding: "0.5rem 1rem",
  borderTopRightRadius: "1.5rem",
  borderEndEndRadius: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default TestimonialsSwiper;
