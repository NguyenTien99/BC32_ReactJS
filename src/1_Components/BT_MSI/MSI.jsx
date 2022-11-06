import React from 'react';
import Header from './Header';
import Banner from './Banner';
import PhoneList from './PhoneList';
import LaptopList from './LaptopList';
import Footer from './Footer';



const MSI = () => {
  return (
    <div className="bg-dark">
      <Header />
      <Banner />
      <PhoneList />
      <LaptopList />
      <Footer />
    </div>
  )
};

export default MSI;