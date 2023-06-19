import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../../assets/images/suppliemnts/1.png'
import img2 from '../../assets/images/suppliemnts/2.png'
import img3 from '../../assets/images/suppliemnts/3.png'
import img4 from '../../assets/images/suppliemnts/4.png'
const Supplements = () => {
    return (
        <div className=''>
            <h1 className='title'>Our Supplements</h1>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={500}
                    autoplay={{
                        delay: 1600,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    
                    modules={[Autoplay, ]}
                    breakpoints={{
                        340: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}

                    className="mySwiper lg:mx-10"
                >
                    <SwiperSlide><img className='w-[10rem] lg:w-fll'  src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[10rem] lg:w-fll' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[10rem] lg:w-fll' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[10rem] lg:w-fll' src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[10rem] lg:w-fll' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[10rem] lg:w-fll' src={img3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Supplements;