import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SelectedClasses = () => {
    const {user, loading} = useContext(AuthContext)
    const [selectedClass,setSelectedClass] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/selected/user/${user?.email}`)
        .then(data=>{
            setSelectedClass(data.data)
        })
    },[])

    console.log(selectedClass)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedClass.map((single, i) => <tr key={single._id}>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={single.classImage} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{single.className}</div>
                                </td>
                                <td>
                                    {single.instructorName}
                                </td>
                                <td>{single.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(single._id)} className="btn btn-xs">Delete</button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${single._id}`}><button className="btn btn-xs">Pay</button></Link>
                                </td>
                            </tr>) 
                        }
                    </tbody>


                </table>
            </div>
        </div>
        
    );
};

export default SelectedClasses;