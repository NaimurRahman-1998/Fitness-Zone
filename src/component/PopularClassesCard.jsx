import React, { useContext } from 'react';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';
import { addSelectClass } from '../api/classes';
import { AuthContext } from '../providers/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
const PopularClassesCard = ({ cls }) => {
    AOS.init();
    const { user } = useContext(AuthContext)
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    // console.log(cls)

    const handleSelect = (data) => {
        console.log('clicked')
        // const select = { classId: data._id, className: data.class, classImage: data.image, instructorEmail: data.instructorEmail, instructorName: data.instructorName, price: data.price, seats: data.seats, StudentName: user?.displayName, studentEmail: user?.email }
        // console.log(select)
        // addSelectClass(select)
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             alert('Classes Added to Dashboard')
        //         }
        //         else {
        //             alert('You Already Selected This Class')
        //         }
        //     })
    }

    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="relative hover:border-lime-500 hover:border-2 transition duration-300 w-96 bg-base-100 shadow-xl group">
                <figure><img src={cls.image} className=' h-[15rem] w-[25rem]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-neutral-600 text-2xl ">
                        {cls.class}!
                    </h2>
                    <p className='mt-[-6px] text-neutral-400'>1 yr Training Program </p>
                    {
                        cls?.enrolled ? <p className='mt-[-6px] text-neutral-400'>{cls.enrolled} Enrolled</p>
                            : <p className='mt-[-6px] text-neutral-400'>No One Enrolled</p>
                    }

                    <div className='flex justify-start gap-5 items-center mt-5'>
                        <div className='group-hover:border-lime-500 border-2 flex flex-col justify-center items-center rounded-full w-16 h-16 border-black '>
                            <p>4</p>
                            <p className='border-t-2 border-black group-hover:border-lime-500'>Steps</p>
                        </div>
                        <div>
                            <p className='color text-xl font-semibold'>Muscle Group:</p>
                            <p className='text-neutral-400'>Muscle, Excercises</p>
                        </div>
                    </div>
                    {/* <div>
                    <ol className='list-disc color space-y-4 my-6'>
                        <li>Best in class Program</li>
                        <li>Personal Trainer</li>
                        <li>Unlimited Steam Bath</li>
                    </ol>
                </div>

                <div className='flex py-8 border-t-2 mt-3 border-neutral-600 group-hover:border-lime-400'>
                    <p>$ <span className='text-3xl color'>{cls.price}/</span> <span className='text-neutral-400'>1year</span> </p>
                    <Link to='/classes'><motion.button
                        initial={{
                            rotate: 1,
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 6,
                        }}
                        className='text-white px-4 py-2 bg-lime-600 hover:bg-lime-400'>Go to Classes</motion.button></Link>
                    <motion.button
                        initial={{
                            rotate: 1,
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 6,
                        }}
                        onClick={() => handleSelect(cls)}
                        disabled={!user || isInstructor || isAdmin || cls.seats === 0 ? true : false}
                        className={!user || isInstructor || isAdmin || cls.seats === 0 ? 'text-white px-4 py-2 bg-slate-100' : 'text-white px-4 py-2 bg-lime-600 hover:bg-lime-400'}>Add To Cart
                    </motion.button>
                </div> */}

                </div>
            </div>

        </>
    );
};

export default PopularClassesCard;