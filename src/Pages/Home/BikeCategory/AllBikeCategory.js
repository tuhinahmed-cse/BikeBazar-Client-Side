import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Show from './Show';

const AllBikeCategory = () => {
    const categories = useLoaderData();
    return (
        <div>
            <h1>Hello</h1>

            {
                categories.map((category,i)=><Show key={i} category={category}></Show>)
            }
        </div>
    );
};

export default AllBikeCategory;