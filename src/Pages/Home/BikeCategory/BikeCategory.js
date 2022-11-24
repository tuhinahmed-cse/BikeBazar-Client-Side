import React, { useEffect, useState } from 'react';
import BikeCollection from './BikeCollection';




const BikeCategory = () => {

    const  [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikeCategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

   

    return (
       

           <>
            <div className='mt-20 '>
            <h2 className='text-center font-bold text-2xl' style={{color:'#795548', fontFamily:'cursive'}}> Categories of Bike for Selling</h2>
            </div>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-20'>

            
            {
                categories.map((category,i)=> <BikeCollection key={i} category={category} ></BikeCollection>)    
            }
            </div>
           
           </>



        
    );
};

export default BikeCategory;