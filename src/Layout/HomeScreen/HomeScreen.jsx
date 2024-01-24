// src/screens/HomeScreen.js

import React from 'react';
import NavBar from './NavBar/NavBar';
import CardExplore from '../../components/CardExplore/CardExplore';
import Bar from '../../components/Bar/Bar';
import Populardestinations from '../../components/PopularDestinations/Populardestinations';
import Topairplanes from '../../components/Topairplanes/Topairplanes';
import ExclusiveDeals from '../../components/ExclusiveDeals/ExclusiveDeals';
import Footer from '../../components/Footer/Footer';

const HomeScreen = () => {
  return (
    <div className='min-h-screen bg-black'>
      <NavBar />
      <div className='flex flex-col mt-6 mx-12 w-auto'>
        <CardExplore />
        <Populardestinations />
        <Topairplanes />
        <ExclusiveDeals />
       
        {/* <Bar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
