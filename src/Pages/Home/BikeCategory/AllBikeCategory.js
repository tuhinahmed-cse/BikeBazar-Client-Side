import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Show from './Show';

const AllBikeCategory = () => {
    const categories = useLoaderData();
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20 ms items-center'>
            

            {
                categories.map((category,i)=><Show key={i} category={category}></Show>)
            }
        </div>
    );
};

export default AllBikeCategory;