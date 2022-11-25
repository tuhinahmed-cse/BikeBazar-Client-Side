import React from 'react';
import { Link } from 'react-router-dom';

const BikeCollection = ({category}) => {

    // console.log(category)
    const{category_id, category_title, img }= category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className="card-title justify-center">{category_title}</h2>
          
          <div className="card-actions justify-center">
            <Link to={`/collection/${category_id}`}><button className="btn btn-primary">See All</button></Link>
          </div>
        </div>
      </div>
    );
};

export default BikeCollection;