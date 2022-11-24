import React from 'react';
import { Link } from 'react-router-dom';
import about from "../../../assets/About.jpg"

const About = () => {
    return (
        <div className="hero  bg-base-200" style={{ backgroundImage: `url(${about})`, height:'600px' }}>
  <div className="hero-content ">
    
    <div>
      <h1 className="text-4xl font-bold text-center opacity-100" style={{color:'#ffb300', fontFamily:'cursive'}}>Why Buy Bike From Us</h1>
      <p className="mt-10 opacity-100 font-bold"  style={{color:'#e65100', fontFamily:'cursive', fontSize:'20px'}}> *** We Have a Learge Collection of Bikes ***</p>
      <p className=" font-bold"  style={{color:'#e65100', fontFamily:'cursive', fontSize:'20px'}}> *** We Provide the the best bike with reasonalble price *** </p>
      <p className="font-bold"  style={{color:'#e65100', fontFamily:'cursive',fontSize:'20px'}}> *** You can Buy it from anywhere ***</p>
      <p className="font-bold"  style={{color:'#e65100', fontFamily:'cursive',fontSize:'20px'}}> *** After Buying bikes if you face any Problem , we always try to support ***</p>
      <p className="font-bold mb-10"  style={{color:'#e65100', fontFamily:'cursive', fontSize:'20px'}}> *** We Accept Online payment and Home delivery ***</p>
      <Link to='/login'><button className="btn btn-primary ">Contact US</button></Link>
    </div>
  </div>
</div>
    );
};

export default About;