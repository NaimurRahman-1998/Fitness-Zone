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
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cls?.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cls.class}</h2>
                <h2 className="card-title">{cls.instructorName}</h2>
                <h2 className="card-title">{cls.seats}</h2>
                <p>{cls.price}</p>
                <div className="card-actions">
                    <button onClick={() => handleSelect(cls)} disabled={isInstructor || isAdmin || cls.seats === 0 ? true : false} className="btn btn-primary">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;