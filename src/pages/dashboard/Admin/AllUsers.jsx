import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const AllUsers = () => {

    const { refetch, data: allUsers = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/allUsers`)
            return res.json();
        },
    })

    const handleAdmin = (id) => {
        console.log('clicked', id)
        confirm('are You Sure you want to make this is Admin')
        if (confirm) {
            axios.patch(`http://localhost:5000/users/admin/${id}`)
                .then(data => {
                    console.log(data.data)
                    alert('User is Admin Now')
                    refetch()
                })
        }
    }

    const handleInstructor = (id) => {
        confirm('are You Sure you want to make this is Instructor')
        if (confirm) {
            axios.patch(`http://localhost:5000/users/instructor/${id}`)
                .then(data => {
                    console.log(data.data)
                    alert('User is Instructor Now')
                    refetch()
                })
        }
    }

    console.log(allUsers)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <td></td>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((single, i) =>
                                <tr key={single._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center ">
                                            <div>
                                                <div className="font-bold">{single?.name}</div>
                                                <div className="text-sm opacity-50">{single?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {single?.role}
                                    </td>
                                    <td> <button onClick={() => handleInstructor(single._id)} className='btn btn-primary btn-xs'> Make Instructor</button> </td>
                                    <th>
                                        <button onClick={() => handleAdmin(single._id)} className="btn btn-warning btn-xs">make admin</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;