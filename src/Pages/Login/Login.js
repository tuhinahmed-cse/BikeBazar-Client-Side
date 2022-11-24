import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import bike from '../../assets/bike'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const handleLogin = data =>{

        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center mb-16 ' style={{ backgroundImage: `url(${bike})`, height: '90vh', }}>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center font-bold mb-8 text-secondary' style={{ fontFamily: 'cursive' }} >Login To Our Website Bike Bazar</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

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

                    
                    <input className='btn btn-primary w-full mt-4' value="Login" type="submit" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </form>
                <p style={{ color: '#dd2c00', fontFamily: 'cursive', fontSize: '20px' }} >New to Bike Bazar? <Link className='' to="/register" style={{ color: '#ff8a65', fontFamily: 'cursive', fontSize: '20px' }}> <button className="btn btn-outline btn-success">Please Register</button></Link></p>
                <div className="divider text-white">OR</div>
                <button className="btn btn-outline btn-secondary w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;