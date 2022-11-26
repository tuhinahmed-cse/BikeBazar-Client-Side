import React from 'react';

const SellerViewProducts = () => {
    return (
        <div>
            <h3>My Adding Products</h3>
            <div>
            {/* <div className="form-control w-full max-w-xs">
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
                    })} className="input input-bordered w-full max-w-xs" />
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
                        required: true
                    })} defaultValue={user?.email} disabled className="input input-bordered w-full max-w-xs" />
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

                <input className='btn btn-primary w-full mt-4' value="Add Product" type="submit" /> */}
            </div>
        </div>
    );
};

export default SellerViewProducts;