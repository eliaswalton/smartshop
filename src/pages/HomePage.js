import React from 'react';
import HeroBanner from '../components/HeroBanner';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <div className="container mx-auto px-4 py-8">
        {/* The main welcome text can be part of HeroBanner or styled separately if needed */}
        {/* For now, keeping it simple. Product list will be managed in App.js for the home route */}
      </div>
    </>
  );
};

export default HomePage;
