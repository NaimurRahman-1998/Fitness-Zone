import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import EnrolledCard from './EnrolledCard';

const Enrolled = () => {

    const{user} = useContext(AuthContext);

    const { refetch, data: enrolled = [] } = useQuery({
        queryKey: ['payments' , user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payments/${user?.email}`)
            return res.json();
        },
    })
    console.log(enrolled)
    return (
        <div>
            <div className='grid grid-cols-2'>
            {
                enrolled.map(data=>
                <EnrolledCard key={data._id} data={data}>

                </EnrolledCard>
                )
            }
            </div>
        </div>
    );
};

export default Enrolled;