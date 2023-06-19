import React from 'react';
import { RiRulerLine } from 'react-icons/ri'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { MdOutlineDoneOutline } from 'react-icons/md'
const Process = () => {
    return (
        <div className='mt-20'>
            <h1 className='title' >Our Process</h1>
            <div className='flex justify-center w-full'>
                <div className='grid grid-cols-4  sm:gap-5 md:gap-10 lg:gap-20 '>
                    <div className=' flex flex-col items-center gap-5 w-[7rem] lg:w-[17rem]'>
                        <div className='group bg-[#9bb70d] h-[4rem] lg:h-[10rem] w-[4rem] md:w-[7rem] lg:w-[10rem] rounded-full border-4 transition duration-400 border-lime-300 hover:border-8 hover:border-lime-400 hover:scale-110'>
                            <div className='flex justify-center h-[3.5rem] lg:h-[10rem] items-center'>
                                <RiRulerLine className='lg:text-5xl group-hover:text-6xl text-gray-200' />
                            </div>
                        </div>
                        <h1 className='text-center text-xs lg:text-xl text-neutral-700 font-medium'>Analyze Your Goal</h1>
                    </div>
                    <div className='flex flex-col items-center gap-5  w-[7rem] lg:w-[17rem]'>
                        <div className='group bg-[#9bb70d] h-[4rem] lg:h-[10rem] w-[4rem] md:w-[7rem] lg:w-[10rem] rounded-full border-4 transition duration-400 border-lime-300 hover:border-8 hover:border-lime-400 hover:scale-110'>
                            <div className='flex justify-center h-[3.5rem] lg:h-[10rem] items-center'>
                                <GiWeightLiftingUp className='lg:text-5xl group-hover:text-6xl text-gray-200' />
                            </div>
                        </div>
                        <h1 className='text-center text-xs lg:text-xl text-neutral-700 font-medium'>Work Hard On It</h1>
                    </div>
                    <div className='flex flex-col items-center gap-5  w-[7rem] lg:w-[17rem]'>
                        <div className='group bg-[#9bb70d] h-[4rem] lg:h-[10rem] w-[4rem] md:w-[7rem] lg:w-[10rem] rounded-full border-4 transition duration-400 border-lime-300 hover:border-8 hover:border-lime-400 hover:scale-110'>
                            <div className='flex justify-center h-[3.5rem] lg:h-[10rem] items-center'>
                                <BsSpeedometer2 className='lg:text-5xl group-hover:text-6xl text-gray-200' />
                            </div>
                        </div>
                        <h1 className='text-center text-xs lg:text-xl text-neutral-700 font-medium'>Improve Your Performance</h1>
                    </div>
                    <div className='flex flex-col items-center gap-5 w-[7rem] lg:w-[17rem]'>
                        <div className='group bg-[#9bb70d] h-[4rem] lg:h-[10rem] w-[4rem] md:w-[7rem] lg:w-[10rem] rounded-full border-4 transition duration-400 border-lime-300 hover:border-8 hover:border-lime-400 hover:scale-110'>
                            <div className='flex justify-center h-[3.5rem] lg:h-[10rem] items-center'>
                                <MdOutlineDoneOutline className='lg:text-5xl group-hover:text-6xl text-gray-200' />
                            </div>
                        </div>
                        <h1 className='text-center text-xs lg:text-xl text-neutral-700 font-medium'>Achive Your Destiny</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Process;