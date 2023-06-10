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
                alert("added")
            })
    }


    return (
        <div className="flex w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cls?.image} alt="Shoes" className="rounded-xl w-[20rem] h-[20rem]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cls.class}</h2>
                <h2 className="card-title">Name :{cls.instructorName}</h2>
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