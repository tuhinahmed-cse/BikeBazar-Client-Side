import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import bike from '../../assets/bike'
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');

    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Register Successfully.')
                const userInfo = {
                    displayName: data.name,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });

    }

    return (
        <div className='h-[800px] flex justify-center items-center mb-16 ' style={{ backgroundImage: `url(${bike})`, height: '90vh', }}>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center font-bold mb-8 text-secondary' style={{ fontFamily: 'cursive' }} >Register To Our Website Bike Bazar</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-secondary " style={{ fontFamily: 'cursive', fontSize: '20px' }}>Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control  w-full max-w-xs font-bold ">
                        <label className="label"> <span className="label-text text-secondary" style={{ fontFamily: 'cursive', fontSize: '20px' }}>Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" > <span className="label-text text-secondary" style={{ fontFamily: 'cursive', fontSize: '20px' }}>Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label" > <span className="label-text text-secondary" style={{ fontFamily: 'cursive', fontSize: '20px' }}>Want To Seller</span></label>
                        <select
                            {...register('role')}
                            className="select input-bordered w-full max-w-xs">
                            <option selected>Buyer</option>
                            <option>Seller</option>

                        </select>

                        {errors.role && <p className='text-red-500'>{errors.role.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p style={{ color: '#dd2c00', fontFamily: 'cursive', fontSize: '20px' }} >Already have an account ? <Link className='' to="/login" style={{ color: '#ff8a65', fontFamily: 'cursive', fontSize: '20px' }}> <button className="btn btn-outline btn-success">Please Login</button></Link></p>
                <div className="divider text-white">OR</div>
                <button className="btn btn-outline btn-secondary w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;