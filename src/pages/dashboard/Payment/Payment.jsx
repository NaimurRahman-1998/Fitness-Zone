import React, { useContext, useEffect, useState } from 'react';
import CheckOutFrom from './CheckOutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../providers/AuthProvider';

const Payment = () => {
    const id = useParams();
    const {loading,user} = useContext(AuthContext)
    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selected', id.id],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selected/${id.id}`)
            return res.json();
        },
    })
    console.log(selectedClass?.price)

    const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY)
    return (
        <div className='bg-gray-200 h-[50vh] flex justify-center items-center'>
            <Elements stripe={stripePromise}>
                <CheckOutFrom price={400} />
            </Elements>
        </div >
    );
};

export default Payment;