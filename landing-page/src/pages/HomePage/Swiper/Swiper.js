import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper';
import * as S from './Swiper.styled';
import 'swiper/css/autoplay';
import "swiper/css/navigation";

const InstagramSwiper = () => {
  return (
    <S.StyledInstagramSwiper>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={true}
        navigation={false}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        centeredSlides={false}
        className="mySwiper"
        breakpoints={{
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            600: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1,
            },
        }}
      >
        <SwiperSlide>
          <a href="/#">
            <img src={require('../images/pictures/1.jpeg')} alt="Pyszne.pl" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/#">
            <img src={require('../images/pictures/2.jpg')} alt="DeliGoo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/#">
            <img src={require('../images/pictures/3.jpeg')} alt="Glovo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/#">
            <img src={require('../images/pictures/4.jpeg')} alt="UberEats" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/#">
            <img src={require('../images/pictures/5.jpeg')} alt="BoltFood" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/#">
            <img src={require('../images/pictures/6.jpeg')} alt="BoltFood" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/#">
            <img src={require('../images/pictures/7.jpeg')} alt="BoltFood" />
          </a>
        </SwiperSlide>
      </Swiper>
      
    </S.StyledInstagramSwiper>
  );
};

export default InstagramSwiper;
