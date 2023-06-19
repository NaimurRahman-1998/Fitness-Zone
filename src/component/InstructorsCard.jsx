import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const InstructorsCard = ({ data }) => {
    AOS.init();
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className='relative group w-72'>
            <img className='lg:w-72 h-[26rem] group-hover:scale-110 transition-transform duration-300' src={data.image} alt="" />
            <h1 className='bg-slate-200 font-medium text-4xl absolute bottom-20 p-3'>{data.name}</h1>

            <div className='bg-lime-500 text-white px-5 py-6  w-full hidden group-hover:block absolute bottom-0 '>
                <h1>Email:{data.email}</h1>

            </div>
        </div>

    );
};

export default InstructorsCard;