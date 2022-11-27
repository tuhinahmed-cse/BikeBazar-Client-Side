import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';



const SellerAddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;



    const handleAddProduct = data =>{

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){

                console.log(imgData.data.url);

                const bike = {
                    category_id: data.category_id, 
                    category_title: data.category_title, 
                    name: data.name, 
                    location: data.location, 
                    resale_price: data.resale_price, 
                    orginal_price: data.orginal_price, 
                    year_use: data.year_use, 
                    condition: data.condition, 
                    seller_name: data.seller_name, 
                    Mobile: data.Mobile, 
                    email: data.email, 
                    img: imgData.data.url,
                    description: data.description, 
                    status: data.status, 
                    time: data.time, 
                }
                // console.log(bike);

                fetch('http://localhost:5000/bikes',{

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },

                    body: JSON.stringify(bike)
                })

                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`Bike is added successfully`);
                    navigate('/dashboard/viewproduct')
                })


            }

        })

    }
    



    let email= user?.email;
    let name= user?.displayName;
    let showDate = new Date();
    let displayToday= showDate.getDate()+'/'+showDate.getMonth()+'/'+showDate.getFullYear()+'-'+showDate.getHours()+':'+showDate.getMinutes()+':'+showDate.getSeconds();
    return (
        <div className='bg-gradient-to-r from-green-400 to-blue-500' style={{height:'230vh'}}>
            <div className='lg:ml-96 mt-5 w-96 p-7 bg-lime-200' >
            <h2 className='text-center font-bold mb-5' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px', }}> Add a Product for Sell</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>



            <div className="form-control w-full max-w-xs">
                        <label className="label" > <span>Category Id</span></label>
                        <select
                            {...register('category_id')}
                            className="select input-bordered w-full max-w-xs">
                            <option selected>01</option>
                            <option >02</option>
                            <option >03</option>
                            
                        </select>
                        {errors.category_id && <p className='text-red-500'>{errors.category_id.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label" > <span>Category Name</span></label>
                        <select
                            {...register('category_title')}
                            className="select input-bordered w-full max-w-xs">
                            <option selected>Adventure or Touring Bikes</option>
                            <option >Scooters</option>
                            <option >Sport Bikes</option>
                            
                        </select>
                        {errors.category_title && <p className='text-red-500'>{errors.category_title.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Bike Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">ReSell Price</span></label>
                    <input type="text" {...register("resale_price", {
                        required: "Resell is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resale_price && <p className='text-red-500'>{errors.resale_price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Orginal Price</span></label>
                    <input type="text" {...register("orginal_price", {
                        required: "orginal_price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.orginal_price && <p className='text-red-500'>{errors.orginal_price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of Use</span></label>
                    <input type="text" {...register("year_use", {
                        required: "Year is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.year_use && <p className='text-red-500'>{errors.year_use.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Bike Condition</span></label>
                    <input type="text" {...register("condition", {
                        required: "Year is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" {...register("seller_name", {
                        required: "seller_name is Required"
                    })} defaultValue={name} readOnly className="input input-bordered w-full max-w-xs" />
                    {errors.seller_name && <p className='text-red-500'>{errors.seller_name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile</span></label>
                    <input type="text" {...register("Mobile", {
                        required: "Mobile is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Mobile && <p className='text-red-500'>{errors.Mobile.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Email</span></label>
                    <input type="email" {...register("email", {
                        
                    })}  defaultValue={email} readOnly className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Bike Photo</span></label>
                    <input type="file" {...register("img",)} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: "description is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                        <label className="label" > <span>Status</span></label>
                        <select
                            {...register('status')}
                            className="select input-bordered w-full max-w-xs">
                            <option selected>Available</option>
                            <option >Sold</option>
                            
                            
                        </select>
                        {errors.category_title && <p className='text-red-500'>{errors.category_title.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Time of post</span></label>
                    <input type="text" {...register("time", {
                        required: "time is Required"
                    })} defaultValue={displayToday} className="input input-bordered w-full max-w-xs" />
                    {errors.time && <p className='text-red-500'>{errors.time.message}</p>}
                  </div>

                 

                

                    
            
                <input className='btn btn-primary w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default SellerAddProduct;