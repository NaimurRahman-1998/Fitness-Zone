import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import running from '../assets/images/banner/running.png'
import weight from '../assets/images/banner/weight.png'
import { motion } from "framer-motion"
import img1 from '../assets/images/Home/banner01.png'
import img2 from '../assets/images/Home/banner02.png'
import img3 from '../assets/images/Home/banner03.png'
import { Autoplay } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Banner = () => {
    AOS.init();
    return (
        <div >
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay,]}
                className="mySwiper">
                <SwiperSlide className="relative">
                    <img className="w-full h-[20rem] lg:h-[40rem]" src="https://static1.squarespace.com/static/5750d5129f72662d66448028/t/57b8976b414fb53695b59f71/1471715182235/Chest+Press+with+Dumbbells.jpg?format=2500w" alt="" />
                    <div
                        className=" absolute top-0 bg-black bg-opacity-40 w-full h-full flex justify-center items-center text-center">
                        <motion.div
                            initial={{ x: 0, y: 400, scale: 0 }}
                            animate={{ x: 0, y: 0, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.75 }}
                            className='flex flex-col items-center mt-28 gap-2 text-white font-mono font-semibold uppercase  '>
                            <h1 className='text-white text-xl lg:text-7xl'>Best Program </h1>
                            <h1 className='text-xl lg:text-7xl'>For Best results</h1>
                            <p className='text-xs lg:text-base'>Consistency and proper nutrition are key to achieving and maintaining a fit and healthy lifestyle.</p>
                            <Link to='/signup'><button className=' lg:text-base mt-6 bg-[#9bb70d] px-3 py-2 lg:w-44 lg:h-20 rounded-lg hover:scale-110 transition duration-300 hover:bg-[#87b70d]'>Enroll Now</button></Link>
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[20rem] lg:h-[40rem]" src={running} alt="" />
                    <div className="absolute top-0  bg-black bg-opacity-25 w-full h-full ">
                        <div
                            className='flex flex-col mt-24 lg:mt-44 ml-8 lg:ml-36 gap-2 text-white font-mono font-semibold uppercase  '>
                            <h1 className='text-white lg:text-7xl'>Join on our</h1>
                            <h1 className='lg:text-7xl'>Fitness Journey</h1>
                            <p className='text-xs'>Regular exercise not only strengthens the body, but also improves mental well-being, increasing overall fitness and vitality.</p>
                            <Link to='/signup'><button className=' mt-6 bg-[#9bb70d] w-28 py-2 lg:w-44 lg:h-20 rounded-lg hover:scale-110 transition duration-300 hover:bg-[#87b70d]'>Enroll Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[20rem] lg:h-[40rem]" src={weight} alt="" />
                    <div className="absolute top-0  bg-black bg-opacity-40 w-full h-full ">
                        <div
                            className='flex flex-col mt-24 lg:mt-44 ml-8 lg:ml-36 gap-2 text-white font-mono font-semibold uppercase  '>
                            <h1 className='text-white lg:text-7xl'>You Can Boost</h1>
                            <h1 className='lg:text-7xl'>Your strength</h1>
                            <p className='text-xs'>Move, sweat, and nourish your body to unlock the power of fitness.</p>
                            <Link to='/signup'><button className=' mt-6 bg-[#9bb70d] w-28 py-2 lg:w-44 lg:h-20 rounded-lg hover:scale-110 transition duration-300 hover:bg-[#87b70d]'>Enroll Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex lg:flex justify-center'>
                <img className='w-[6rem] lg:w-[25rem]' src={img1} alt="" />
                <img className='w-[6rem] lg:w-[25rem]' src={img2} alt="" />
                <img className='w-[6rem] lg:w-[25rem]' src={img3} alt="" />
            </div>

        </div>
    );
};

export default Banner;