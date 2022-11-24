import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorr from '../../../assets/error.webp'

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${errorr})` }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-red-400 font-bold">{error.statusText || error.message}</h1>
     
      <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;