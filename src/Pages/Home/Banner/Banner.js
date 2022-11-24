import React from 'react';
import bike from '../../../assets/bike2.jpeg'

const Banner = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url(${bike})`, height:'600px' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold " style={{color: '#f4511e', fontFamily:'cursive'}}>Welcome to Bike Bazar</h1>
      <p className="mb-5" style={{color: '#ff5722', fontFamily:'cursive'}}>We are here to selling the secound hand best bike.You can choose your desire bike with flexible price. You have lots of option.Because we can sell different companies best bike. you can choose any bike with your desire budget. Ours all bike condition are very good.</p>
      <button className="btn btn-primary">Lets Buy</button>
    </div>
  </div>
</div>
    );
};

export default Banner;