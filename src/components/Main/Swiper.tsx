import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { A11y, Pagination, Scrollbar } from 'swiper';
import { Navigation } from 'swiper';

const SwiperBlock = () => {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // @ts-ignore
    >
      {[...Array(6)].map((el, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={'swiper-item'}>
              <img src={require(`../../assets/images/main${index + 1}.png`)} />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperBlock;
