import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./Carousel.module.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={20}
    slidesPerView={1}
    className={styles.carousel}
  >
    {images.map((src, idx) => (
      <SwiperSlide key={idx}>
        <img src={src} alt={`Screenshot ${idx + 1}`} className={styles.image} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
