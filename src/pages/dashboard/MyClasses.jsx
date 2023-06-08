import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassesCard from '../../component/ClassesCard';

const MyClasses = () => {
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes`)

            return res.json();
        },
    })
    return (
        <div className='grid grid-cols-3'>
            {
                classes.map(cls=> 
                <ClassesCard 
                key={cls._id}
                cls={cls}
                >

                </ClassesCard> )
            }
        </div>
    );
};

export default MyClasses;