import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import BikeCategory from './BikeCategory/BikeCategory';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <BikeCategory></BikeCategory>
          <About></About>
        
       
        </div>
    );
};

export default Home;