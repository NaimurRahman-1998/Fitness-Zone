import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AClassesCard from './AClassesCard';
import TransitionEffect from '../../component/TransitionEffect';

const Classes = () => {

    const { refetch, data: approvedClasses = [] } = useQuery({
        queryKey: ['approved'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/approved`)
            return res.json();
        },
    })
    console.log(approvedClasses)

    return (
        <>
        <TransitionEffect></TransitionEffect>
            <div className='mt-20 mx-40'>
                <div className='grid grid-cols-3 gap-12'>
                    {
                        approvedClasses.map(acls =>
                            <AClassesCard key={acls._id} acls={acls}>

                            </AClassesCard>
                        )
                    }
                </div>
            </div>

        </>

    );
};

export default Classes;