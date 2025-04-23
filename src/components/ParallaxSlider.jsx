import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/slider.css'; 
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const ParallaxSlider = ({ slides }) => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      speed={600}
      parallax={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          backgroundImage: 'url(https://swiperjs.com/demos/images/nature-1.jpg)',
        }}
        data-swiper-parallax="-23%"
      ></div>

      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="title" data-swiper-parallax="-300">
            {slide.title}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            {slide.subtitle}
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ParallaxSlider;
