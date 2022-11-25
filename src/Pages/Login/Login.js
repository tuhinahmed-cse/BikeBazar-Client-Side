import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bike from '../../assets/bike'
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data =>{

        console.log(data);

        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                toast.success(" User Login Sucessfully")
                
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
                toast.error(error.message);
            });
    }

    const handleGoogleSignIn =()=>{

        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            
            toast.success('Login Sucessfully! Thank You')
            saveUser(user.displayName, user.email, user.role);
        })
        .catch(error => {
            console.error(error)
            toast.error(error.message);
        })
    
    }

    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setLoginUserEmail(email);
        })
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
                <button className="btn btn-outline btn-secondary w-full" onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
