import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const CheckOutFrom = ({ data,price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price })
            .then(data => {
                console.log(data.data.clientSecret)
                setClientSecret(data.data.clientSecret)
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            alert(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );
        if (confirmError) {
            alert(confirmError)
        }

        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const details = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classImage: data.classImage,
                classId: data.classId,
                className: data.className,
                instructorEmail: data.instructorEmail,
                instructorName: data.instructorName
            }
            axios.post('http://localhost:5000/payments',  details )
                .then(res => {
                    if (res.data.insertedId) {
                        alert('payment done')
                        axios.put(`http://localhost:5000/classes/enrolled/${data.classId}`)
                            .then(response => {
                                console.log(response.data); 
                            })
                    }
                })
        }
    }
    return (
        <form className='w-[25rem] bg-white ' onSubmit={handleSubmit}>
        price:{price}
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-warning btn-xs mt-6'
                type="submit"
                disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </form>
    );
};

export default CheckOutFrom;