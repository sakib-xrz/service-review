import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Gallery from '../about/Gallery';
import Banner from './Banner';
import Service from './Service';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;