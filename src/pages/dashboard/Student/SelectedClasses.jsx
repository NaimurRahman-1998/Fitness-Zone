import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const SelectedClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const url = `http://localhost:5000/selected/user/${user?.email}`

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['approved'],
        queryFn: async () => {
            const res = await fetch(url)
            return res.json();
        },
    })

    const handleDelete = id => {
        confirm("are you sure?");
        if (confirm) {
            fetch(`http://localhost:5000/selected/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("done")
                        refetch()
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='title'>My Selected Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
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
                                <td>{single.price} $</td>
                                <td>
                                    <button onClick={() => handleDelete(single._id)} className="btn btn-xs btn-error text-white hover:bg-lime-500 hover:border-lime-500">Delete</button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${single._id}`}><button className="btn btn-xs btn-warning hover:btn-link">Pay</button></Link>
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