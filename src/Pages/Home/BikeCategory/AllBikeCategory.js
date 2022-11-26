import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeBookingModal from './Bikebooking/BikeBookingModal';
import Show from './Show';

const AllBikeCategory = () => {
    const categories = useLoaderData();

    const [books, setBooks] = useState(null);
   
    

    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20 ms items-center'>
            

            {
                categories.map((category,i)=><Show key={i} category={category} setBooks={setBooks}></Show>)
            }

            <div>
                
               {

                books &&  
                <BikeBookingModal books={books} setBooks={setBooks} ></BikeBookingModal>
               }
            </div>
        </div>
    );
};

export default AllBikeCategory;