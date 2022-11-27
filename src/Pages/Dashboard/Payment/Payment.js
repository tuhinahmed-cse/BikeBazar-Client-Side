import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData();
    console.log(booking)
    return (
        <div className='mt-10'>
           <h2 className='text-center font-bold mb-5' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px' }}>Payment for Bike <span style={{color:'#ff5722'}}>""   {booking.bName} ""</span> </h2>
           <p className='text-center font-bold mb-5' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px' }}>   You Need To Pay: <span style={{color:'#ff5722'}}>""   {booking.price} $ ""</span>   </p>

           <div className='w-96 lg:ml-80 my-20'>
                <Elements stripe={stripePromise}>
                    <Checkout
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;