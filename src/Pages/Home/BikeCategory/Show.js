import React from 'react';

const Show = ({ category }) => {
  // console.log(category);
  const { name, condition, Mobile, description, img, location, orginal_price, resale_price, seller_name, time, year_use } = category;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" style={{ width: '600px', height:'500px' }} /></figure>
      <div className="card-body">
        <h2 className="card-title " > <span style={{ color: '#ff6e40' }}>Bike Name:</span>   {name
        }</h2>
         <div className="divider"></div> 
        <p className=" " > <span style={{ color: '#ff6e40' }}>Bike Condition:</span>   {condition}</p>
        <div className="divider"></div> 
        <p className='text-amber-900'> <span style={{ color: '#ff6f00' }}>Description</span> : {description}</p>
        <div className="divider"></div> 
        <div className='lg:flex justify-between'>
          <p className="card-title "> <span style={{ color: '#ff6e40' }}>Orginal Price : </span>{orginal_price
          }$</p>
          <h2 className="card-title "> <span style={{ color: '#ff6e40' }}>Resale Price :</span>{resale_price
          }$</h2>
        </div>
        <div className="divider"></div> 

        <div className='lg:flex'>
          <p ><span style={{ color: '#ff6e40' }}>Seller Name: </span> {seller_name}</p>
          <p ><span style={{ color: '#ff6e40' }}>Mobile: </span> {Mobile}</p>
          <p ><span style={{ color: '#ff6e40' }}>Location: </span> {location}</p>
          
        </div>
        <div className="divider"></div> 
        <div className='lg:flex'>

        <p ><span style={{ color: '#ff6e40' }}>Year of Use: </span> {year_use}</p>
        <p ><span style={{ color: '#ff6e40' }}>Post Update: </span> {time}</p>
        </div>
        <div className="divider"></div>
        <div className="lg:flex card-actions justify-between">
          <button className="btn btn-primary">Report Admin</button>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Show;
