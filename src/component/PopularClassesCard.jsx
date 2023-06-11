import React, { useContext } from 'react';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';
import { addSelectClass } from '../api/classes';
import { AuthContext } from '../providers/AuthProvider';

const PopularClassesCard = ({ cls }) => {
    const { user } = useContext(AuthContext)
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    // console.log(cls)

    const handleSelect = (data) => {
        console.log('clicked')
        const select = { classId: data._id, className: data.class, classImage: data.image, instructorEmail: data.instructorEmail, instructorName: data.instructorName, price: data.price, seats: data.seats, StudentName: user?.displayName, studentEmail: user?.email }
        console.log(select)
        addSelectClass(select)
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Classes Added to Dashboard')
                }
                else {
                    alert('You Already Selected This Class')
                }
            })
    }

    return (
        <div className=" w-96 bg-base-100 shadow-xl">
            <figure><img src={cls.image} className='h-[15rem] w-[25rem]' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-neutral-600 text-2xl ">
                    {cls.class}!
                </h2>
                <p className='mt-[-6px] text-neutral-400'>1 yr Training Program </p>
                {
                    cls?.enrolled ? <p className='mt-[-6px] text-neutral-400'>{cls.enrolled} Enrolled</p>
                    : <p className='mt-[-6px] text-neutral-400'>No One Enrolled</p>
                }
                <div>
                    <ol className='list-disc color space-y-4 my-6'>
                        <li>Best in class Program</li>
                        <li>Personal Trainer</li>
                        <li>Unlimited Steam Bath</li>
                    </ol>
                </div>
                <div className='flex py-8 border-t-2 mt-3 border-neutral-600'>
                    <p>$ <span className='text-3xl color'>{cls.price}/</span> <span className='text-neutral-400'>1year</span> </p>
                    <button onClick={() => handleSelect(cls)} disabled={user ||isInstructor || isAdmin || cls.seats === 0 ? true : false} className=' text-white px-4 py-2 bg-lime-500'>Add To Cart</button>
                </div>

            </div>
        </div>
    );
};

export default PopularClassesCard;