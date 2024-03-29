import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';

import * as S from './Swiper.styled';

const InstagramSwiper = () => {
  return (
    <S.StyledInstagramSwiper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        //navigation
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        breakpoints=
        {{
          2300: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1200: {
            slidesPerView: 5,
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
          <a
            href="https://www.instagram.com/p/CbVANtxsTvr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../images/pictures/1.jpeg')} alt="Pyszne.pl" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://www.instagram.com/p/CUW6-pKs9Hl/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../images/pictures/4.jpeg')} alt="DeliGoo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://www.instagram.com/p/CZY2BsNsp1k/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../images/pictures/2.jpg')} alt="Glovo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://www.instagram.com/p/CO9tF3Mrp4n/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../images/pictures/3.jpeg')} alt="UberEats" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://www.instagram.com/p/Ca9kc3DMoFV/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../images/pictures/5.jpeg')} alt="BoltFood" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://www.instagram.com/p/CNjvaIdHCOR/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../images/pictures/6.jpeg')} alt="BoltFood" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://www.instagram.com/p/CPU_G6YreSV/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../images/pictures/7.jpeg')} alt="BoltFood" />
          </a>
        </SwiperSlide>
      </Swiper>
    </S.StyledInstagramSwiper>
  );
};

export default InstagramSwiper;
