import { useContext } from "react";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProvider";
import { addSelectClass } from "../api/classes";

const ClassesCard = ({ cls }) => {

    const { user } = useContext(AuthContext)

    const [isInstructor] = useInstructor();
    const isAdmin = false
    // console.log(cls)

    const handleSelect = (data) => {
        const select = { classId: data._id ,className: data.class, classImage: data.image, instructorEmail: data.instructorEmail, instructorName: data.instructorName, price: data.price, seats: data.seats, StudentName: user?.displayName, studentEmail: user?.email }
        addSelectClass(select)
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('Classes Added to Dashboard')
                }
                else{
                    alert('You Already Selected This Class')
                }
            })
    }


    return (
        <div className="flex flex-col ">
            <figure className="">
                <img src={cls?.image} alt="Shoes" className=" w-[22rem] h-[16rem]" />
            </figure>
            <div className="mt-8">
                <h2 className="t-color text-3xl">{cls.class}</h2>
                <h2 className="text-neutral-400">Instructor Name :{cls.instructorName}</h2>
                <p class>1yr Training Program</p>
                <h2 className="card-title">Available Seats: {cls.seats}</h2>
                <p>Price:{cls.price}</p>
                <p>Status:{cls.status}</p>
                {
                    cls.enrolled > 0 ?
                    <p>Enrolled :{cls.enrolled} Students</p>
                    :
                    <p>No One Enrolled</p>
                }
                {
                    cls.status === 'denied' &&
                    <>
                        <p>FeedBack : {cls.feedback}</p>
                    </>
                }
                <div className="card-actions">
                    <button onClick={() => handleSelect(cls)} disabled={isInstructor || isAdmin || cls.seats === 0 ? true : false} className="btn btn-primary">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;