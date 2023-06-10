import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { addPayments } from '../../../api/classes';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {


    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selected`)
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

    // const handlePayment = item => {
    //     addPayments({ id: item.classId })
    //         .then(data => {
    //             console.log(data)
    //             alert("added to payments")
    //             axios.put(`http://localhost:5000/classes/${item.classId}`)
    //                 .then(response => {
    //                     console.log(response.data); // Output the response from the server
    //                 })
    //                 .catch(error => {
    //                     console.error('An error occurred:', error);
    //                 });
    //         })
    // }
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
                            selected.map((single, i) => <tr key={single._id}>
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