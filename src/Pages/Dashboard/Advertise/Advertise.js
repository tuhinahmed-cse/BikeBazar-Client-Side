import React, { useEffect, useState } from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const  [advertises, setAdvertises] = useState([]);


    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-xi.vercel.app/advertise')
            .then(res => res.json())
            .then(data =>setAdvertises(data))
    }, [])



    
    return (
        <div className='mt-20 bg-teal-50'>
            {
         advertises?.length  &&  <>

<h2 className='text-center font-bold text-2xl' style={{color:'#795548', fontFamily:'cursive'}}> Currently Our Best secound hand Bikes For Sell</h2>

         
<div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-20'>

            
{
    advertises.map((advertise,i)=> <AdvertiseCard key={i} advertise={advertise}></AdvertiseCard>)    
}
</div>
         
         
         
         </>




            }
            
        </div>
    );
};

export default Advertise;