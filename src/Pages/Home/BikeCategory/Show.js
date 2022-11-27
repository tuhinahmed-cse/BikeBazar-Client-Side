import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcApproval } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthProvider';
import useBuyer from '../../../hooks/useBuyer';


const Show = ({ category, setBooks }) => {
  console.log(category);
  const { name, condition, Mobile, description, img, location, orginal_price, resale_price, seller_name, time, year_use, verify} = category;

  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);

  const handleReport = id =>{
    fetch(`https://b612-used-products-resale-server-side-xi.vercel.app/report/${id}`, {
      method: 'PUT', 
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
  })
  .then(res => res.json())
  .then(data => {
      if(data.modifiedCount > 0){
          toast.success('Report successful.')
      }
  })

    
  }

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
         <p> {
            verify && <p><FcApproval className='text-4xl'></FcApproval></p>
          }</p>
          <p ><span style={{ color: '#ff6e40' }}>Mobile: </span> {Mobile}</p>
          <p ><span style={{ color: '#ff6e40' }}>Location: </span> {location}</p>
          
        </div>
        <div className="divider"></div> 
        <div className='lg:flex'>

        <p ><span style={{ color: '#ff6e40' }}>Year of Use: </span> {year_use}</p>
        <p ><span style={{ color: '#ff6e40' }}>Post Update: </span> {time}</p>
        </div>
        <div className="divider"></div>

        { isBuyer && 

<div className="lg:flex card-actions justify-between">
<button onClick={() => handleReport(category._id)} className="btn btn-primary">Report to Admin</button>
          
           
<>
<label
                       
htmlFor="booking-modal"
className="btn btn-primary"
onClick={() => setBooks(category)}
>Book Bike</label>

</>

            
        </div>
        }
      </div>
    </div>
  );
};

export default Show;
