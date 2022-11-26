import React from 'react';
import Advertise from '../Dashboard/Advertise/Advertise';
import About from './About/About';
import Banner from './Banner/Banner';
import BikeCategory from './BikeCategory/BikeCategory';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Advertise></Advertise>
          <BikeCategory></BikeCategory>
          <About></About>
        
       
        </div>
    );
};

export default Home;