"use client";
import React, { useContext } from "react";
import KnowledgeCard from "../KnowledgeCard/KnowledgeCard";
import { AppContext } from "@/Context/AppContext";
import { useRouter } from "next/navigation";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import styles from "./KnowledgeBox.module.css";

SwiperCore.use([Autoplay]);

const KnowledgeBox = () => {
  const { sorted } = useContext(AppContext);
  const data = sorted;
  const router = useRouter();

  return (
    <div className={styles.box}>
      <Swiper
        style={{ padding: "10px", width: "100%" }}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 2, // Show one slide on smaller screens
          },
          1024: {
            slidesPerView: 3, // Show two slides on medium screens
          },
          1260: {
            slidesPerView: 4, // Show three slides on larger screens
          },
          1400: {
            slidesPerView: 4, // Show three slides on larger screens
          },
        }}
        spaceBetween={40}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {data.map((blog) => (
          <SwiperSlide key={blog.slug}>
            <KnowledgeCard
              img={blog.image}
              desc={blog.mainDescription}
              day={Math.floor(
                (new Date() - new Date(blog.createdAt?.toDate())) /
                  (1000 * 60 * 60 * 24)
              )}
              title={blog.title}
              onClick={() =>
                router.push(
                  `/blogs/${blog.category.toLowerCase()}/${blog.slug}`
                )
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default KnowledgeBox;
