import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import ClassesCard from '../../../component/ClassesCard';
import { AuthContext } from '../../../providers/AuthProvider';

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/${user?.email}`)

            return res.json();
        },
    })
    return (
        <div className='grid gap-10 w-full'>
            {
                classes.map(cls =>
                    <ClassesCard
                        key={cls._id}
                        cls={cls}
                    >

                    </ClassesCard>)
            }
        </div>
    );
};

export default MyClasses;