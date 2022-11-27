import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="footer p-10 bg-base-200 text-base-content mt-20">
            <div></div>
            

            <div>
    <span className="footer-title">Address</span> 
    <div className="grid grid-col">
      <p className='footer-title'> 625, Noyatola, Moghbazar</p><br />
      <p className='footer-title'> Dhaka, Bangladesh</p>
    </div>
  </div>

  
  <div className='mt-12'>
    <span className="footer-title">Copyright © 2022 - All right reserved by Tuhin Ahmed</span> 
    
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <Link to='/login'><button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button></Link>
      </div>
    </div>
  </div>
</footer>
        
        </>
    );
};

export default Footer;