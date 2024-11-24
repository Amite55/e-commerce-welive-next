import React from 'react';
import Banner from '../Banner/Banner';
import NewArrivals from '../NewArrivalsSection/NewArrivals';
import OfferSection from '../OfferSection/OfferSection';
import MenCollection from '../MenCollection/MenCollection';
import AllItem from '../AllItemSection/AllItem';

const HomePage = () => {
    return (
        <div className='bg-white text-black'>
            <Banner/>
            <NewArrivals/>
            <OfferSection/>
            <MenCollection/>
            <AllItem/>
        </div>
    );
};

export default HomePage;