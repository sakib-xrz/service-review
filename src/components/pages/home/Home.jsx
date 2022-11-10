import React from 'react';
import Gallery from '../about/Gallery';
import Banner from './Banner';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;