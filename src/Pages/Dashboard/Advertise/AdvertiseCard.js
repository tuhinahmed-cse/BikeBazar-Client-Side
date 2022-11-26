import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({advertise}) => {
    const {name,img , resale_price, category_id} = advertise
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <div>
   <h2 className="card-title" style={{color:'#795548', fontFamily:'cursive'}}>Bike Name: {name}</h2>
    <p style={{color:'#795548', fontFamily:'cursive'}} > Price: {resale_price} $</p>
   </div>
   <div>
   <Link to={`/collection/${category_id}`}><button className="btn btn-sm btn-primary ">Buy</button></Link>
   </div>
   

  </div>
  <figure><img src={img} style={{height:'300px'}} alt="Shoes" /></figure>
</div>
    );
};

export default AdvertiseCard;